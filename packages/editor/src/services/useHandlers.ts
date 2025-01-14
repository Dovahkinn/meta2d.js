import { Where } from '@meta2d/core';
import {
  HandlerType,
  EventAction,
  ExtendEventNameKey,
  ExtendAction,
  ExtendEventSource,
  ExtendActionEventNameMap,
} from '../types/Event';

/**
 * 根据 where 推断是否执行 handler
 * @param where
 * @param msg
 */
function executeWhere(where: Where, msg: any) {
  // console.log('executeWhere: ', where, msg)
  if (!where) return true;
  const { key, value, comparison } = where;
  if (!key) return true;
  if (!comparison) return true;
  const v = value as number | string;
  switch (comparison) {
    case '==':
      return msg[key] == value;
    case '!=':
      return msg[key] != value;
    case '>':
      return msg[key] > v;
    case '<':
      return msg[key] < v;
    case '>=':
      return msg[key] >= v;
    case '<=':
      return msg[key] <= v;
    // case '[)':
    //   return msg[key] >= v && msg[key] <= v
    // case '![)':
    //   return msg[key] < v || msg[key] > v
    // case '[]':
    //   return msg[key] >= v && msg[key] <= v
    // case '![]':
    //   return msg[key] < v || msg[key] > v
    default:
      return true;
  }
}
function executeAnimate(type: string, ids: string[], tags: string[]) {
  const fnMap = {
    0: 'startAnimate',
    1: 'pauseAnimate',
    2: 'stopAnimate',
  };
  const pens = [];
  if (ids?.length) {
    ids.forEach((id) => {
      pens.push(meta2d.findOne(id));
    });
  } else if (tags?.length) {
    tags.forEach((tag) => {
      pens.push(...meta2d.find(tag));
    });
  }
  const fnName = fnMap[type];
  if (fnName) {
    meta2d[fnName](pens);
  }
}

export const useWsHandlers = (data: any) => {
  const resolver = (response: any) => {
    // ? 如何判断是更新图元的消息
    if (response?.msg) {
      const handlers = data.wsMsgHandlers || [];
      const msg = response.msg;
      handlers.forEach((handler: HandlerType) => {
        const { action, params, value, where } = handler;
        if (!executeWhere(where, msg)) return;
        // ! 性能测试 4600+
        // if (msg.CurrentInfo) {
        //   const colors = ['rgba(54, 85, 207, 1)', 'rgba(214, 30, 195, 1)', 'rgba(209, 13, 46, 1)', 'rgba(29, 209, 97, 1)', 'rgba(224, 191, 61, 1)']
        //   msg.CurrentInfo.pens.forEach((pen: any) => {
        //     // 随机取 colors
        //     pen.color = colors[Math.floor(Math.random() * colors.length)];
        //     meta2d.setValue({
        //       ...pen,
        //     }, {
        //       render: false,
        //     })
        //   })
        //   meta2d.render()
        //   console.log('update: ', msg.CurrentInfo)
        //   return
        // }
        // ! 性能测试结束

        const { tags, ids } = params;
        //console.log('resolver: ', handlers);
        //console.log('process action: ', action, ids, tags);
        switch (action) {
          case EventAction.SetProps:
            // ! id 保存时进行了过滤，理论上都存在
            if (ids?.length) {
              ids.forEach((id) => {
                meta2d.setValue(
                  {
                    id,
                    ...value,
                  },
                  {
                    render: false,
                  }
                );
              });
              meta2d.render();
            } else if (tags?.length) {
              tags.forEach((tag) => {
                meta2d.setValue(
                  {
                    tag,
                    ...value,
                  },
                  {
                    render: false,
                  }
                );
              });
              meta2d.render();
            }
            break;
          case EventAction.StartAnimate:
            executeAnimate('0', ids, tags);
            break;
          case EventAction.PauseAnimate:
            executeAnimate('1', ids, tags);
            break;
          case EventAction.StopAnimate:
            executeAnimate('2', ids, tags);
            break;

          default:
            console.log('unknown action: ', action);
            break;
        }
      });
    }
  };

  return {
    resolver,
  };
};

/**
 * @description 可供全局使用的扩展能力调用函数
 * @param sourceType 
 * @param eventOptions 
 * @returns 
 */
export const callExtendAction = (sourceType: ExtendEventSource, eventOptions: any) => {
  // console.log('callExtendAction  ------------> ', sourceType, eventOptions);
  if (!eventOptions) {
    console.error('自定义消息参数不存在！');
    return;
  }
  const { params, ...rest } = eventOptions;

  // sourceType == 0:
  if (sourceType == ExtendEventSource.ExternalCall) {
    if (params && typeof params == 'object') {
      params.action = eventOptions.action
    }
  }
  // else rest = { pen, context, }

  switch (eventOptions.action) {
    case ExtendAction.Video:
      // 弹窗播放视频
      meta2d.emit(ExtendActionEventNameMap.Dialog, eventOptions)
      break;
    case ExtendAction.DialogClose: 
      meta2d.emit(ExtendActionEventNameMap.Dialog, eventOptions)
      break;  

    default:
      console.error('未知扩展能力调用: ', eventOptions.action);
      break;
  }
};

globalThis.$_callExtendAction = callExtendAction;

export const useExtendEvent = () => {
  const extendOn = () => {
    if (meta2d) {
      meta2d.on(ExtendEventNameKey, (...args) => {
        console.log('--------------', args);
      });
    } else {
      console.error('meta2d is not ready');
    }
  };

  const extendOff = (fn: any) => {
    if (meta2d) {
      meta2d.off(ExtendEventNameKey, fn);
    }
  };

  return {
    extendOn,
    extendOff,
  };
};
