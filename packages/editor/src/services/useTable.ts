import { reactive, ref, } from 'vue';
import { EventAction } from '../types/Event'

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
    const { evenRowBackgroundColor, oddRowBackgroundColor } = style;
    tableStyle = {
      '--td-bg-color-secondarycontainer': oddRowBackgroundColor,
      '--td-bg-color-container': evenRowBackgroundColor,
    };
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
    meta2d[fnName](pens);
  }
}


export const useScripts = (metaData: any = {}) => {
  const { presetScriptsConfig = {} } = metaData || {};
  const { scripts = [] } = presetScriptsConfig || {};

  const tasks: Function[] = [];
  if (Array.isArray(scripts)) {
    scripts.forEach((item, index) => {
      const { handlers = [], duration = 3000, rowPropList = [], } = item;
      // TODO: 创建任务
      if (Array.isArray(handlers) && handlers.length) {
        const fn = () => {
          handlers.forEach((handler) => {
            const { target, action, value = {} } = handler;
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
                  meta2d.canvas.dialog.show(value, handler.params)                  
                  break;  
              }
            }
          });
        };

        const task = () => {
          return new Promise((resolve) => {
            setTimeout(() => {
              const row: any = {};
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
          })
        }

        tasks.push(task)
      }
    });
  }

  return {
    tasks,
  };
};
