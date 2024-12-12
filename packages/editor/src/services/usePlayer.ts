import { ref, computed } from 'vue';

type StepDataType = {
  name: string;
  order?: number;
  description?: string;
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
    const { Name, Type, Value, State, } = state;

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
      const normalKey = parseInt(key);
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

  const play = () => {
    console.log('play: ', currentStepData.value);
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
              // - 修改属性
              meta2d.setValue(value)
              // - 执行动画
              //
            }
          })
      }
    }
  };
  const pause = () => {};
  const stop = () => {};
  const replay = () => {};

  const prev = () => {
    changePage(currentStep.value - 1);
  };
  const next = () => {
    changePage(currentStep.value + 1);
  };

  return {
    playList,
    currentStep,
    changePage,
    play,
    pause,
    stop,
    replay,
    prev,
    next,
    currentStepData,
  };
};
