# WebSocket Client

## Introduction

该 WebSocket 客户端是一个简单的工具，用于与 WebSocket 服务器建立连接、发送消息、接收消息以及处理心跳和重连逻辑。此客户端支持单例模式，适合需要保持长连接的应用程序。

## Installation

```shell
npm install @qs/websocket-client
```

## Usage

```js
import WebSocketClient from "@qs/websocket-client";

const wsClient = WebSocketClient.getInstance("ws://localhost:8080", {
  busName: "bus-test",
  msgTypes: [1, 3],
});
wsClient.connect();
wsClient.subscribe("bus-test", 1001, (data) => {
  // TODO: 接收到的消息
});

// 发送消息
wsClient.sendMessage("bus-test", 1001, {
  hello: "121323",
  test: "xxxx",
});
```

## API

`WebSocketClient.getInstance(url: string, options: object)`

获取 WebSocket 客户端的单例实例。

- url: WebSocket 服务器的 URL。
- options: 构造器选项

`connect()`
打开 WebSocket 连接。

`subscribe(busName: string, msgTypes: number[], callback: Callback)`
发送消息到 WebSocket 服务器。

`unSubscribe(busName: string, msgTypes: number[], callback?: Callback)`
取消订阅

`sendMessage(busName: string, msgType: number, msg: any)`
发送消息

`close()`
关闭 WebSocket 连接。

## 构造器选项

`heartbeatInterval`
心跳包发送的间隔时间，单位为毫秒，默认值为 30 秒。

`maxReconnectTimes`
最大重连次数。超过此次数后将停止重连，默认是 30 次。

`reconnectInterval`
重连间隔，单位为毫秒，默认是 3000 毫秒。

`appName`
应用名称

`busName`
总线名称

`msgTypes`
消息类型

## 错误处理与重连

- 如果 WebSocket 连接关闭或出现错误，客户端会尝试重新连接。
- 可以设置最大重连次数和重连间隔时间。
