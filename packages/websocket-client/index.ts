import { MsgType } from './type';
type Callback = (data: any) => void;

function createWsData(type: MsgType, busName: string, msgTypes: number[]) {
  return {
    interMsgType: type,
    data: {
      busName,
      msgTypes,
    },
  };
}

export class WebSocketClient {
  private static InstanceMap: Map<string, WebSocketClient> = new Map();
  private ws: WebSocket | null = null;
  private url: string;
  private messageHandlers: Map<string, Callback[]> = new Map();
  private cache: Map<string, any> = new Map(); // 消息缓存
  private heartbeatInterval: number;
  private heartbeatTimer: NodeJS.Timeout | null = null;
  // 客户端主动发送心跳
  private enableHeartbeat = false;
  private reconnectTimer: NodeJS.Timeout | null = null;
  private isConnected = false;
  // 最大重连次数
  private maxReconnectTimes = 30;
  // 重连间隔
  private reconnectInterval = 3000;
  private wsOptions = null;
  private enableLog = true;
  private _subscribeTasks: any[] = [];
  private manualClosed = false;

  private constructor(url: string, options: any = {}) {
    const { heartbeatInterval = 30e3 } = options;
    this.url = url;
    this.heartbeatInterval = heartbeatInterval;
    this.maxReconnectTimes = options.maxReconnectTimes || 30;
    this.reconnectInterval = options.reconnectInterval || 3000;
    this.wsOptions = options;
    this.enableLog = options.enableLog;
    this.enableHeartbeat = options.enableHeartbeat;
  }

  // 获取 WebSocketClient 单例实例
  static getInstance(
    url: string,
    options?: any,
  ): WebSocketClient {
    if (!url.startsWith('ws://') && !url.startsWith('wss://')) {
      url = 'ws://' + url;
    }
    console.log('getInstance: ', url, options)
    let instance = WebSocketClient.InstanceMap.get(url);
    if (!instance) {     
      instance = new WebSocketClient(url, options);
      WebSocketClient.InstanceMap.set(url, instance);
    } else {
      console.log('Using existing WebSocketClient instance.');
    }
    instance.connect();
    return instance;
  }


  // 1. 初始化 WebSocket 连接并处理事件
  connect() {
    if (!this.url) {
      // throw new Error('ws url is required');
      console.error('ws url is required');
      return
    }
    if (this.isConnected) {
      this.wsOptions.onReady && this.wsOptions.onReady();
      return;
    }; // 避免重复连接

    // 避免重复创建 ws
    if (!this.ws) {
      this.ws = new WebSocket(this.url);
      this.ws.onopen = () => {
        this.isConnected = true;
        this.register();
        this.startHeartbeat();
        this.subscribe(this.wsOptions.busName, this.wsOptions.msgTypes);
        console.log('========= WebSocket connection established. =========');
        // 清空队列
        this._subscribeTasks.forEach((task) => {
          task();
        });
        this._subscribeTasks = [];
        this.wsOptions.onReady && this.wsOptions.onReady();
      };
  
      this.ws.onmessage = (event) => {
        this.handleMessage(event.data);
      };
  
      this.ws.onclose = () => {
        this.isConnected = false;
        if (!this.manualClosed) {  // 只有非手动关闭时才重连和停止心跳
          this.stopHeartbeat();
          this.reconnect();
        }
        console.log('WebSocket connection closed.');
      };
  
      this.ws.onerror = (error) => {
        console.error('WebSocket error:', error);
        this.isConnected = false;
        this.stopHeartbeat();
        this.reconnect();
      };
    } else if (this.ws.readyState === WebSocket.OPEN) {
      this.wsOptions.onReady && this.wsOptions.onReady();
    } else {
      console.error('连接已断开：', this.url)
      this.ws = new WebSocket(this.url);
      this.ws.onopen = () => {
        this.isConnected = true;
        this.register();
        this.startHeartbeat();
        this.subscribe(this.wsOptions.busName, this.wsOptions.msgTypes);
        console.log('========= WebSocket connection established. =========');
        // 清空队列
        this._subscribeTasks.forEach((task) => {
          task();
        });
        this._subscribeTasks = [];
        this.wsOptions.onReady && this.wsOptions.onReady();
      };
  
      this.ws.onmessage = (event) => {
        this.handleMessage(event.data);
      };
  
      this.ws.onclose = () => {
        this.isConnected = false;
        if (!this.manualClosed) {  // 只有非手动关闭时才重连和停止心跳
          this.stopHeartbeat();
          this.reconnect();
        }
        console.log('WebSocket connection closed.');
      };
  
      this.ws.onerror = (error) => {
        console.error('WebSocket error:', error);
        this.isConnected = false;
        this.stopHeartbeat();
        this.reconnect();
      };
    }
    
  }

  /**
   * @description websocket通信建立后，应立刻发送此消息进行注册
   * @param appName 应用名称
   */
  private register(appName?: string) {
    const registerData = {
      interMsgType: MsgType.MSG_FAMILY_REGISTER,
      data: {
        name: appName || this.wsOptions.appName || 'WebSocket Client',
      },
    };
    this.ws.send(JSON.stringify(registerData));
  }

  /**
   * @description TODO
   * @param appName
   */
  private unRegister(appName?: string) {
    // const registerData = createWsData(
    //   MsgType.MSG_FAMILY_UNSUBSCRIBE,
    //   busName || this.wsOptions.busName,
    //   msgTypes || this.wsOptions.msgTypes
    // );
    // this.ws.send(JSON.stringify(registerData));
  }

  // 2. 处理 WebSocket 消息
  private handleMessage(message: string) {
    const parsedMessage = JSON.parse(message);
    if (this.enableLog) {
      console.log('Received message:', parsedMessage);
    }
    const { interMsgType, data } = parsedMessage;

    // 处理心跳反馈消息
    if (interMsgType === MsgType.MSG_FAMILY_HEARTBEAT) {
      const feedbackMsg = {
        interMsgType: MsgType.MSG_FAMILY_HEARTBEAT_FEEDBACK,
        data,
      };
      this.ws.send(JSON.stringify(feedbackMsg));
      return;
    }

    // 更新缓存
    const type = data?.busName;
    if (type) {
      this.cache.set(type, data);
    }

    // 转发消息到对应的订阅者
    const handlers = this.messageHandlers.get(type) || [];
    handlers.forEach((handler) => handler && handler(data));
  }

  /**
   * @description 客户端如果需要收到消息，需先订阅消息，订阅后BusServer会将对应的消息转发给对应的连接
   *  当websocket通信断开了，当重新连接成功后，SDK中应再重新自动发送订阅消息。
   * @param busName
   * @param msgTypes
   * @param callback
   */
  subscribe(busName: string, msgTypes: number[], callback?: Callback) {
    const _busName = busName || this.wsOptions.busName;
    const _msgTypes = msgTypes || this.wsOptions.msgTypes;
    if (!_busName) {
      console.error('订阅消息需要指定 [busName] 参数！');
    }

    const registerData = createWsData(
      MsgType.MSG_FAMILY_SUBSCRIBE,
      _busName,
      _msgTypes
    );
    if (this.ws?.readyState !== WebSocket.OPEN) {
      console.log('WebSocket 连接尚未建立，订阅任务加入队列');
      this._subscribeTasks.push(() => {
        this.ws.send(JSON.stringify(registerData));
      });
    } else {
      this.ws.send(JSON.stringify(registerData));
    }

    // 如果有缓存的消息，直接调用回调
    if (this.cache.has(_busName) && callback) {
      callback(this.cache.get(_busName));
    }

    if (!callback) {
      console.error(`请使用 subscribe() 方法订阅消息： ${_busName} `);
      return;
    }

    // 注册新的消息处理器
    if (!this.messageHandlers.has(_busName)) {
      this.messageHandlers.set(_busName, []);
    }
    this.messageHandlers.get(_busName)!.push(callback);
  }

  /**
   * @description 取消订阅后，BusServer 不再将对应消息转发给对应的连接
   * @param busName
   * @param msgTypes
   * @param callback
   */
  unSubscribe(busName: string, msgTypes: number[], callback?: Callback) {
    const _busName = busName || this.wsOptions.busName;
    const _msgTypes = msgTypes || this.wsOptions.msgTypes;
    const registerData = createWsData(
      MsgType.MSG_FAMILY_UNSUBSCRIBE,
      _busName,
      _msgTypes
    );
    this.ws.send(JSON.stringify(registerData));
    const handlers = this.messageHandlers.get(_busName);
    if (handlers) {
      this.messageHandlers.set(
        _busName,
        handlers.filter((handler) => handler !== callback)
      );
    }
  }

  /**
   * @description 针对客户端订阅的消息，如果某个客户端发送了对应的消息，则会转发给其他所有订阅此消息的客户端
   * @param busName
   * @param data
   */
  sendMessage(busName: string, msgType: number, msg: any) {
    const _busName = busName || this.wsOptions.busName;
    const message = {
      interMsgType: MsgType.MSG_FAMILY_TRANSMIT,
      data: {
        busName: _busName,
        msgType,
        msg,
      },
    };
    if (this.ws?.readyState !== WebSocket.OPEN) {
      console.warn('WebSocket 连接尚未建立，sendMessage 任务加入队列');
      this._subscribeTasks.push(() => {
        this.ws.send(JSON.stringify(message));
      });
    } else {
      this.ws?.send(JSON.stringify(message));
    }
  }

  /**
   * @description BusServer会定时1秒对所有连接发送心跳消息，客户端收到后立刻返回心跳反馈消息
   * 当websocket通信处于连接状态时，客户端超过设定时间没有接收到心跳消息，主动断开websocket通信，然后重新连接，设定时间默认为30s。
   * BusServer内部的机制为：如果超过设定时间没有接收到连接反馈，亦会主动断开websocket连接。
   * @returns
   */
  private startHeartbeat() {
    if (!this.enableHeartbeat) return;
    if (this.heartbeatTimer) return;

    this.heartbeatTimer = setInterval(() => {
      if (this.ws && this.ws.readyState === WebSocket.OPEN) {
        this.ws.send(
          JSON.stringify({
            interMsgType: MsgType.MSG_FAMILY_HEARTBEAT,
            data: {
              version: '1.0',
              ackId: Date.now(),
            },
          })
        );
      }
    }, this.heartbeatInterval);
  }

  // 停止心跳
  private stopHeartbeat() {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }
  }

  // 7. 尝试重新连接
  private reconnect() {
    if (this.reconnectTimer) return;

    // if (this.maxReconnectTimes <= 0) {
    //   console.log('Max reconnect times reached.');
    //   return;
    // }

    this.reconnectTimer = setTimeout(() => {
      // console.log('Reconnecting...', this.maxReconnectTimes);
      // this.maxReconnectTimes--;
      this.connect();
      this.reconnectTimer = null;
    }, this.reconnectInterval);
  }

  // 8. 清除缓存
  clearCache(type: string) {
    if (type) {
      this.cache.delete(type);
    } else {
      this.cache.clear();
    }
  }

  // 9. 关闭 WebSocket 连接并清除单例
  close() {
    this.manualClosed = true; // 设置手动关闭标识
    this.stopHeartbeat();
    this.ws?.close();
    this.ws = null;
    WebSocketClient.InstanceMap.delete(this.url);
    this.isConnected = false;
    console.log('WebSocketClient instance closed and cleared.');
  }
}
