import { ref, computed } from 'vue';
import { EventAction } from '../types/Event'

type StepDataType = {
  name: string;
  order?: number;
  description?: string;
  duration?: number;
  // 元件状态集合
  stateList?: ElectricState[];
  currentStateList?: ElectricCurrentState[];
  // meta2d 内置属性集合，用于电路协议未支持的状态：颜色、大小等等
  privatePropList: any[];
};

// 元件 msgType 1001
type ElectricState = {
  // 电路元件名称, 对应图元标签
  Name: string;
  // 电路元件类型
  Type: number;
  // 电路元件是否有电
  Value: number;
  // 开关的状态
  State: 0 | 1 | 2;
};

// 电流 msgType 8002
type ElectricCurrentState = {
  // 对应图元标签
  Name: string;
  // 电流值，带正负，决定流向
  Value: number;
};

function transformToPenProps(state: ElectricCurrentState | ElectricState, type: number) {
  // 电流
  if (type == 1) {
    const { Name, Value } = state;
    // TODO: value 决定流向
    // TODO: name 目前感觉是线条，其他类型有什么效果需要特别处理
  } else {
    const { Name, Type, Value, State, } = state as ElectricState;

    // * 开关取 state
    // 修改开关组合状态 0 1 2
    if (Type == 28) {
      return {
        tag: Name,
        showChild: State || 0, // 制作组合时和电路元件定义的状态保持一致
      }
    }
    // * 其他取 value, 代表有电无电
    // ? 什么效果
    else {

    }
  }
}

export const usePlayer = () => {
  const playList = ref<StepDataType[]>([]);
  const currentStep = ref(0);
  const currentStepData = computed(() => playList.value[currentStep.value]);
  let queue: TaskQueue | null = null;

  const changePage = (key: string | number) => {
    // 名称、序号
    if (typeof key === 'string') {
      const step = playList.value.findIndex((step) => step.name === key);
      if (~step) {
        currentStep.value = step;
      } else {
        console.warn('没有这个步骤: ', key);
      }
    } else if (typeof key == 'number') {
      const max = playList.value.length - 1;
      if (max == -1) {
        currentStep.value = 0;
        return;
      }
      const normalKey = +Number(key).toFixed();
      if (normalKey > max) {
        currentStep.value = max;
        console.warn('指定序号超出上限');
      } else if (normalKey < 0) {
        currentStep.value = 0;
      } else {
        currentStep.value = key;
      }
    }
  };
  // 执行更新
  const apply = () => {
    console.log('apply: ', currentStepData.value);
    if (currentStepData.value) {
      const { stateList, currentStateList, privatePropList } = currentStepData.value;
      if (stateList?.length) {
        stateList.forEach((state) => {
          const value = transformToPenProps(state, 0);
          if (value) {
            if (!value.tag && !value.id) {
              console.warn('更新参数必须要有标签名或ID：', value)
              return;
            }
            meta2d.setValue(value);
          }
        });
      }
      if (currentStateList?.length) {
        currentStateList.forEach((state) => {
          const value = transformToPenProps(state, 1);
          if (value) {
            if (!value.tag && !value.id) {
              console.warn('更新参数必须要有标签名或ID：', value)
              return
            }
            meta2d.setValue(value);
          }

        });
      }
      if (privatePropList?.length) {
        privatePropList.forEach(value => {
          if (value) {
            if (!value.id && !value.tag) {
              return;
            }
            const { id, tag, action, ...props } = value;
            const pens = meta2d.find(id || tag)
            if (action == EventAction.StartAnimate) {
              meta2d.startAnimate(pens)
            } else if (action == EventAction.PauseAnimate) {
              meta2d.pauseAnimate(pens)
            } else if (action == EventAction.StopAnimate) {
              meta2d.stopAnimate(pens)
            } else {
              // - 修改属性
              meta2d.setValue(value)
            }
          }
        })
      }
    }
  };

  const prev = () => {
    changePage(currentStep.value - 1);
  };
  const next = () => {
    changePage(currentStep.value + 1);
  };

  // * 针对所有步骤
  const play = () => {
    console.log('play: ', playList.value, queue)
    if (!queue || queue.currentIndex >= playList.value.length) {
      queue = new TaskQueue(playList.value)
      queue.handler((task, index) => {
        currentStep.value = index;
        apply()
      })
      queue.start()
    } else {
      queue.resume()
    }
  }
  const pause = () => {
    if (queue) {
      queue.pause();
    }
  };
  const stop = () => {
    if (queue) {
      queue.stop()
    }
  };
  const replay = () => {
    if (queue) {
      queue.replay()
    }
  };

  return {
    playList,
    currentStep,
    changePage,
    apply,
    play,
    pause,
    stop,
    replay,
    prev,
    next,
    currentStepData,
  };
};

class TaskQueue {
  private tasks: StepDataType[]; // 任务队列
  currentIndex: number; // 当前任务索引
  private isPaused: boolean; // 暂停标志
  private isRunning: boolean; // 运行标志
  private resumeCallback: (() => void) | null; // 恢复回调
  private isStopped: boolean; // 停止标志
  private handlerCallback: ((task: StepDataType, index: number) => void) | null;

  constructor(tasks: StepDataType[]) {
    this.tasks = tasks;
    this.currentIndex = 0;
    this.isPaused = false;
    this.isRunning = false;
    this.resumeCallback = null;
    this.isStopped = false;
  }


  public handler(fn: (task: StepDataType, index: number) => void) {
    this.handlerCallback = fn;
  }

  // 执行任务
  private async runTask(task: StepDataType): Promise<void> {
    console.log(`Task started: ${JSON.stringify(task)}`);
    return new Promise((resolve) => {
      // 开始执行更新任务
      if (this.handlerCallback) {
        this.handlerCallback(task, this.currentIndex)
      }

      const timer = setTimeout(() => {
        console.log(`Task completed: ${JSON.stringify(task)}`);
        resolve();
      }, task.duration);

      // 支持暂停和停止逻辑
      const checkPauseOrStop = () => {
        if (this.isPaused || this.isStopped) {
          clearTimeout(timer); // 清除当前任务的定时器
          if (this.isPaused) {
            this.resumeCallback = () => {
              console.log(`Task resumed: ${JSON.stringify(task)}`);
              this.runTask(task).then(resolve); // 重新开始任务
            };
          }
        }
      };

      checkPauseOrStop();
    });
  }

  // 启动任务队列
  public async start(): Promise<void> {
    if (this.isRunning) return; // 防止重复启动
    this.isRunning = true;
    this.isPaused = false;
    this.isStopped = false;

    while (this.currentIndex < this.tasks.length) {
      const task = this.tasks[this.currentIndex];
      await this.runTask(task);
      if (this.isPaused || this.isStopped) break; // 暂停或停止后退出循环
      this.currentIndex += 1;
    }

    this.isRunning = false; // 所有任务执行完毕或停止后重置运行状态
    if (this.currentIndex >= this.tasks.length && !this.isStopped) {
      console.log("All tasks completed.");
    }
  }

  // 暂停任务
  public pause(): void {
    if (!this.isRunning || this.isPaused) return;
    this.isPaused = true;
    console.log("Task queue paused.");
  }

  // 恢复任务
  public resume(): void {
    if (!this.isPaused || this.isStopped) return;
    this.isPaused = false;
    console.log("Task queue resumed.");

    if (this.resumeCallback) {
      this.resumeCallback();
      this.resumeCallback = null;
    } else {
      this.start();
    }
  }

  // 停止任务
  public stop(): void {
    if (!this.isRunning) return;
    this.isStopped = true;
    this.isPaused = false;
    this.resumeCallback = null;
    console.log("Task queue stopped.");
  }

  public replay(): void {
    this.currentIndex = 0;
    this.start()
  }
}
