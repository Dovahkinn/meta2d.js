import { Where } from '@meta2d/core';
import { HandlerType, EventAction } from '../types/Event';

/**
 * 根据 where 推断是否执行 handler
 * @param where 
 * @param msg 
 */
function executeWhere(where: Where, msg: any) {
  // console.log('executeWhere: ', where, msg)
  if (!where) return true;
  const { key, value, comparison } = where
  if (!key) return true
  if (!comparison) return true
  const v = value as number | string;
  switch (comparison) {
    case '==':
      return msg[key] == value
    case '!=':
      return msg[key] != value
    case '>':
      return msg[key] > v
    case '<':
      return msg[key] < v
    case '>=':
      return msg[key] >= v
    case '<=':
      return msg[key] <= v
    // case '[)':
    //   return msg[key] >= v && msg[key] <= v
    // case '![)':
    //   return msg[key] < v || msg[key] > v
    // case '[]':
    //   return msg[key] >= v && msg[key] <= v
    // case '![]':
    //   return msg[key] < v || msg[key] > v
    default:
      return true
  }
}


export const useWsHandlers = (data: any) => {
  const resolver = (response: any) => {
    // ? 如何判断是更新图元的消息
    if (response.msg) {
      const handlers = data.wsMsgHandlers || [];
      // console.log('resolver: ', data, handlers);
      const msg = response.msg;
      handlers.forEach((handler: HandlerType) => {
        const { action, params, value, where, } = handler
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

        switch (action) {
          case EventAction.SetProps:
            const { tags, ids, } = params
            // ! id 保存时进行了过滤，理论上都存在
            if (ids?.length) {
              ids.forEach((id) => {
                meta2d.setValue({
                  id,
                  ...value,
                }, {
                  render: false,
                })

              });
              meta2d.render()
            } else if (tags?.length) {
              tags.forEach(tag => {
                meta2d.setValue({
                  tag,
                  ...value,
                }, {
                  render: false,
                })

              })
              meta2d.render()
            }
            break;
          case EventAction.StartAnimate:
            break;
          case EventAction.PauseAnimate:
            break;
          case EventAction.StopAnimate:
            break;
        }
      });
    }
  };

  return {
    resolver,
  };
};
