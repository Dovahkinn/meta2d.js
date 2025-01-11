import { reactive, ref } from 'vue';
import { EventAction, ExtendAction, ExtendEventSource, ExtendActionEventNameMap, ExtendActionMessageTypeMap, } from '../types/Event';
import { s12 } from "@meta2d/core";
import { callExtendAction } from './useHandlers'
import { createPathAnimation } from '../utils/pathAnimate'

const testStepData = [
  // L1 流动
  {
    index: 0,
    name: 'task1',
    description: 'text1',
    duration: 6000,
    privatePropList: [
      {
        tag: 'L1',
        action: 2,
      },
    ],
  },
  // L2 流动
  {
    index: 1,
    name: 'task2',
    description: 'text2',
    duration: 9000,

    privatePropList: [
      {
        tag: 'L1',
        action: 4,
      },
      {
        tag: 'L2',
        action: 2,
      },
    ],
  },
  // 播放视频
  {
    index: 2,
    name: 'task3',
    description: 'text3',
    duration: 7000,

    privatePropList: [
      {
        tag: 'video',
        action: 1,
        value: {
          visible: 1,
        },
      },
      {
        tag: 'video',
        action: 8,
      },
    ],
  },
  // 关闭视频，打开弹窗
  {
    index: 3,
    name: 'task4',
    description: 'text4',
    duration: 7000,

    privatePropList: [
      {
        tag: 'video',
        action: 1,
        value: {
          visible: 0,
        },
      },
      {
        tag: 'video',
        action: 10,
      },
      // ? 如何调用
      {
        tag: '',
        action: 14,
      },
    ],
  },
  // 关闭弹窗
  {
    index: 4,
    name: 'task5',
    description: 'text5',
    duration: 7000,

    privatePropList: [
      {
        tag: '',
        action: 2,
      },
    ],
  },
];

export const useLogTable = (metaData: any = {}) => {
  const { presetScriptsConfig = {} } = metaData || {};

  const {
    columns = [],
    scripts = [],
    style,
    ...tableProps
  } = presetScriptsConfig || {};
  const tableLogData = ref([]);
  // const tableLogData = reactive([...testStepData])

  if (Array.isArray(scripts)) {
    // scripts.forEach((item, index) => {
    //   const list = item.rowPropList || [];
    //   const row: any = {};
    //   if (Array.isArray(list) && list.length) {
    //     list.forEach((rowItem) => {
    //       const { prop, value } = rowItem;
    //       if (prop) {
    //         row[prop] = value;
    //       }
    //     });
    //     tableLogData.push(row);
    //   }
    // });
  }

  let tableStyle = {};
  if (style) {
    const { evenRowBackgroundColor, oddRowBackgroundColor, textColor, backgroundImageUrl, } = style;
    tableStyle = {
      '--td-bg-color-secondarycontainer': oddRowBackgroundColor,
      '--td-bg-color-container': evenRowBackgroundColor,
      '--td-text-color-primary': textColor || '#FFFFFF',
      '--td-text-color-placeholder': textColor || '#FFFFFF',
      '--table-background-image-url': `url(${backgroundImageUrl || ''})`,
    };
    if (backgroundImageUrl) {
      tableStyle['--td-bg-color-container'] = 'transparent';
    }
  }

  return {
    columns,
    tableLogData,
    tableProps,
    tableStyle,
  };
};

function executeAnimate(type: string, target: string[]) {
  const fnMap = {
    0: 'startAnimate',
    1: 'pauseAnimate',
    2: 'stopAnimate',
  };
  const pens = [];
  if (target?.length) {
    target.forEach((tag) => {
      pens.push(...meta2d.find(tag));
    });
  }
  const fnName = fnMap[type];
  if (fnName) {
    console.log('=============> ', fnName);
    pens.forEach((pen) => {
      if (Array.isArray(pen.pathFrames)) {
        let control = pen.pathAnimateControl;
        if (!control) {
          pen.pathAnimateControl = createPathAnimation(pen, pen.pathFrames);
          control = pen.pathAnimateControl;
        } 
        // console.log('=============> ', control, type);
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
    })
    meta2d[fnName](pens);
  }
}

export const useScripts = (metaData: any = {}) => {
  const { presetScriptsConfig = {} } = metaData || {};
  const { scripts = [] } = presetScriptsConfig || {};

  const tasks: Function[] = [];
  if (Array.isArray(scripts)) {
    scripts.forEach((item, index) => {
      const { handlers = [], duration = 3000, rowPropList = [] } = item;
      // TODO: 创建任务
      if (Array.isArray(handlers) && handlers.length) {
        const fn = () => {
          handlers.forEach((handler) => {
            const { target, action, value = {}, where, } = handler;
            console.log('----------- script fn call -------------: ', handler);
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
                    executeAnimate('0', target);
                    break;
                  case EventAction.PauseAnimate:
                    executeAnimate('1', target);
                    break;
                  case EventAction.StopAnimate:
                    executeAnimate('2', target);
                    break;
                  case EventAction.Dialog:
                    meta2d.canvas.dialog.show(value, handler.params);
                    break;
                  case ExtendAction.DialogClose:
                    meta2d.canvas.dialog.hide();
                    // 复用
                    callExtendAction(ExtendEventSource.ExternalCall, handler)
                    break;
                  case ExtendAction.AnimateReverse:
                    target.forEach((tag) => {
                      const pens = meta2d.find(tag);
                      pens.forEach(pen => {
                        const { id, animateReverse } = pen;
                        meta2d.setValue({
                          id,
                          animateReverse: !animateReverse,
                        }, {
                          render: false,
                        })
                      })
                    })
  
                    break;
  
                    case ExtendAction.Video:
                      callExtendAction(ExtendEventSource.ExternalCall, handler)
                      break;
  
                  default:
                    console.log('unknown action:', action, handler);
                    break;
                }
              }
            }
            if (where && where.type == ExtendActionEventNameMap.CustomMessage && where.value !== null) {
              // * 自定义消息: 视频播放结束              
              if (where.value === ExtendActionMessageTypeMap.VideoEnded) {
                meta2d.on(ExtendActionEventNameMap.CustomMessage, ({ type, key, }) => {
                  if (type == ExtendActionMessageTypeMap.VideoEnded && key == where.key) {
                    executer()
                  }
                })
              }
              
            } else {
              executer()
            }
          });
        };

        const task = () => {
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
              fn();
              resolve(row);
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
