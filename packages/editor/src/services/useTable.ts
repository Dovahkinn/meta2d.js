import { reactive, ref } from 'vue';
import {
  EventAction,
  ExtendAction,
  ExtendEventSource,
  ExtendActionEventNameMap,
  ExtendActionMessageTypeMap,
} from '../types/Event';
import { s12 } from '@meta2d/core';
import { callExtendAction } from './useHandlers';
import { createPathAnimation } from '../utils/pathAnimate';

export const useLogTable = (metaData: any = {}) => {
  const { presetScriptsConfig = {} } = metaData || {};

  const {
    columns = [],
    scripts = [],
    style,
    ...tableProps
  } = presetScriptsConfig || {};
  const tableLogData = ref([]);

  let tableStyle: any = {};
  if (style) {
    const {
      evenRowBackgroundColor,
      oddRowBackgroundColor,
      textColor,
      backgroundImageUrl,
    } = style;
    tableStyle = {
      '--td-bg-color-secondarycontainer': oddRowBackgroundColor,
      '--td-bg-color-container': evenRowBackgroundColor,
      '--td-text-color-primary': textColor || '#FFFFFF',
      '--td-text-color-placeholder': textColor || '#FFFFFF',
      '--table-background-image-url': `url(${backgroundImageUrl || ''})`,
    };
    if (backgroundImageUrl && !evenRowBackgroundColor) {
      tableStyle['--td-bg-color-container'] = 'transparent';
    }
    if (backgroundImageUrl && !oddRowBackgroundColor) {
      tableStyle['--td-bg-color-secondarycontainer'] = 'transparent';
    }
  }

  return {
    columns,
    tableLogData,
    tableProps,
    tableStyle,
  };
};

function executeAnimate(type: string | number, target: string[], meta2d: any) {
  if (!meta2d) {
    meta2d = globalThis.meta2d;
  }

  const fnMap: any = {
    0: 'startAnimate',
    1: 'pauseAnimate',
    2: 'stopAnimate',
  };
  const pens: any[] = [];
  if (target?.length) {
    target.forEach((tag) => {
      const res = meta2d.find(tag);
      if (res) {
        pens.push(...res);
      }
    });
  }
  const fnName = fnMap[type];
  if (fnName) {
    pens.forEach((pen) => {
      if (Array.isArray(pen.pathFrames)) {
        let control = pen.pathAnimateControl;
        if (!control || !control.play) {
          pen.pathAnimateControl = createPathAnimation(pen, pen.pathFrames);
          control = pen.pathAnimateControl;
        }
        // console.log('pathAnimateControl =============> ', control, type);
        if (type == 0) {
          if (control.isPaused.value) {
            control.resume();
          } else {
            control.play();
          }
        } else if (type == 1) {
          control.pause();
        } else if (type == 2) {
          control.stop();
        }
      }
    });
    meta2d[fnName](pens);
  }
}

export const useScripts = (metaData: any = {}, meta2dInstance?: any) => {
  let meta2d = globalThis.meta2d;
  if (meta2dInstance) {
    meta2d = meta2dInstance;
  }

  const { presetScriptsConfig = {} } = metaData || {};
  const { scripts = [] } = presetScriptsConfig || {};

  const tasks: Function[] = [];
  if (Array.isArray(scripts)) {
    scripts.forEach((item, index) => {
      const { handlers = [], duration = 3000, rowPropList = [] } = item;
      // 创建任务
      if (Array.isArray(handlers) && handlers.length) {
        //
        // * 自定义消息: 不能跨进程
        // ! 实际的调用时间是不可预测的，只能被动接收
        let msgHandler = (params?: any) => {
          console.log(
            'default custom message handler: ',
            params,
            item,
            msgHandler._cbs
          );
          msgHandler._cache = params;
          // ! 可能没有值，因为靠后的队列还没执行到
          if (msgHandler._cbs.length) {
            msgHandler._cbs.forEach((cb: any) => {
              setTimeout(() => {
                cb(params);
              }, duration);
            });
            msgHandler._cbs = []
          }
        };
        msgHandler._cbs = [];

        // * 消息监听
        if (meta2d || globalThis.meta2d) {
          (meta2d || globalThis.meta2d).on(
            ExtendActionEventNameMap.CustomMessage,
            msgHandler
          );
        } else {
          setTimeout(() => {
            (meta2d || globalThis.meta2d).on(
              ExtendActionEventNameMap.CustomMessage,
              msgHandler
            );
          }, 1000);
        }

        // 一个步骤下有多个动作, 统一处理为一个 Promise
        const fnQueue = () => {
          if (!meta2d) {
            meta2d = globalThis.meta2d;
          }
          const syncQueue = [];
          const asyncQueue = [];

          handlers.forEach((handler) => {
            const { target, action, value = {}, where } = handler;
            // 配置解析执行，同步
            const executer = () => {
              if (Array.isArray(target)) {
                switch (action) {
                  case EventAction.SetProps:
                    target.forEach((tag) => {
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
                    break;
                  case EventAction.StartAnimate:
                    executeAnimate('0', target, meta2d);
                    break;
                  case EventAction.PauseAnimate:
                    executeAnimate('1', target, meta2d);
                    break;
                  case EventAction.StopAnimate:
                    executeAnimate('2', target, meta2d);
                    break;
                  case EventAction.Dialog:
                    meta2d.canvas.dialog.show(value, handler.params);
                    break;
                  case ExtendAction.DialogClose:
                    meta2d.canvas.dialog.hide();
                    // 复用
                    callExtendAction(ExtendEventSource.ExternalCall, handler);
                    break;
                  case ExtendAction.AnimateReverse:
                    target.forEach((tag) => {
                      const pens = meta2d.find(tag);
                      pens.forEach((pen) => {
                        const { id, animateReverse } = pen;
                        meta2d.setValue(
                          {
                            id,
                            animateReverse: !animateReverse,
                          },
                          {
                            render: false,
                          }
                        );
                      });
                    });

                    break;

                  case ExtendAction.Video:
                    callExtendAction(ExtendEventSource.ExternalCall, handler);
                    break;

                  case ExtendAction.ScriptEnd:
                    // * 没有具体行为，只是通知消息
                    // ! 发送给主画布
                    globalThis.meta2d.emit(
                      ExtendActionEventNameMap.CustomMessage,
                      {
                        type: ExtendActionMessageTypeMap.ScriptEnded,
                        key: handler.name || handler.id,
                      }
                    );
                    break;

                  case ExtendAction.ShowMeta2D:
                    callExtendAction(ExtendEventSource.ExternalCall, handler);
                    break;

                  case ExtendAction.GoToView:
                    // TODO: 瞬移，缺少平滑效果，考虑如何优化
                    if (typeof value == 'string') {
                      const pen = meta2d.findOne(value);
                      if (pen) {
                        meta2d.gotoView(pen);
                      }
                    }

                    break;

                  default:
                    console.warn('unknown action:', action, handler);
                    break;
                }
              }
            };

            // * 设置了触发条件，异步
            if (
              where &&
              where.type == ExtendActionEventNameMap.CustomMessage &&
              ![null, undefined, ''].includes(where.value) && where.key
            ) {
              // - 消息触发是异步的，封装成 Promise，等待完成
              const p = new Promise((resolve) => {

                // * 根据具体参数生成消息处理器
                if (where.value === ExtendActionMessageTypeMap.VideoEnded) {
                  const _msgHandler = ({ type, key }) => {
                    console.log(
                      '-------------- custom message: ',
                      type,
                      key,
                      handler
                    );
                    if (
                      type == ExtendActionMessageTypeMap.VideoEnded &&
                      key == where.key
                    ) {
                      resolve(executer());
                      meta2d.off(
                        ExtendActionEventNameMap.CustomMessage,
                        msgHandler
                      );
                    }
                  };
                  msgHandler._cbs.push(_msgHandler);
                } else if (
                  where.value === ExtendActionMessageTypeMap.ScriptEnded
                ) {
                  const _msgHandler = ({ type, key }) => {
                    if (
                      type == ExtendActionMessageTypeMap.ScriptEnded &&
                      key == where.key
                    ) {
                      resolve(executer());
                      meta2d.off(
                        ExtendActionEventNameMap.CustomMessage,
                        msgHandler
                      );
                    }
                  };
                  msgHandler._cbs.push(_msgHandler);
                }

                // TODO：扩展其他自定义消息
              });

              asyncQueue.push(p);

              console.log(
                'asasas ----------------',
                handler,
                msgHandler._cbs
              );
            } else {
              // * 未设置条件，直接执行
              // executer();
              syncQueue.push(Promise.resolve(executer()));
            }
          });

          return [syncQueue, asyncQueue];
        };

        // 生成任务, 按照步骤
        
        const task = () => {
          const [syncQueue, asyncQueue] = fnQueue();
          console.group('task')
          console.log("sync queue: ", syncQueue)
          console.log('async queue: ', asyncQueue)
          console.log('msgHandler._cache: ', msgHandler._cache, msgHandler._cbs)
          console.groupEnd()
          if (msgHandler._cache && msgHandler._cbs.length) {
            msgHandler._cbs.forEach((cb: any) => {
              setTimeout(() => {
                cb(msgHandler._cache);
              }, duration);
            });
            msgHandler._cbs = []
          }

          return new Promise((resolve) => {
            setTimeout(() => {
              const row: any = {
                sid: s12(),
              };
              if (Array.isArray(rowPropList) && rowPropList.length) {
                rowPropList.forEach((rowItem) => {
                  const { prop, value } = rowItem;
                  if (prop) {
                    row[prop] = value;
                  }
                });
              }

              if (asyncQueue.length) {
                
              }

              Promise.race([...syncQueue, ...asyncQueue]).then((res) => {
                resolve(row);
              });
            }, duration);
          });
        };

        tasks.push(task);
      }
    });
  }

  return {
    tasks,
  };
};
