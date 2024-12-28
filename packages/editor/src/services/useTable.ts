import { reactive } from "vue";

const testStepData = [
    // L1 流动
    {
      index: 0,
      name: "task1",
      description: "text1",
      duration: 6000,
      privatePropList: [
        {
          tag: "L1",
          action: 2,
        },
      ],
    },
    // L2 流动
    {
      index: 1,
      name: "task2",
      description: "text2",
      duration: 9000,
  
      privatePropList: [
        {
          tag: "L1",
          action: 4,
        },
        {
          tag: "L2",
          action: 2,
        },
      ],
    },
    // 播放视频
    {
      index: 2,
      name: "task3",
      description: "text3",
      duration: 7000,
  
      privatePropList: [
        {
          tag: "video",
          action: 1,
          value: {
            visible: 1,
          },
        },
        {
          tag: "video",
          action: 8,
        },
      ],
    },
    // 关闭视频，打开弹窗
    {
      index: 3,
      name: "task4",
      description: "text4",
      duration: 7000,
  
      privatePropList: [
        {
          tag: "video",
          action: 1,
          value: {
            visible: 0,
          },
        },
        {
          tag: "video",
          action: 10,
        },
        // ? 如何调用
        {
          tag: "",
          action: 14,
        },
      ],
    },
    // 关闭弹窗
    {
      index: 4,
      name: "task5",
      description: "text5",
      duration: 7000,
  
      privatePropList: [
        {
          tag: "",
          action: 2,
        },
      ],
    },
  ];

export const useLogTable = (metaData: any = {}) => {
  const { presetScriptsConfig = {} } = metaData || {}
    // let columns = [
    //     // { colKey: 'serial-number', title: '序号', width: '100' },
    //     // { colKey: 'name', title: '名称' },
    //     // { colKey: 'description', title: '描述', ellipsis: true },
    // ];
    // if (Array.isArray(presetScriptsConfig.columns)) {
    //   columns = presetScriptsConfig.columns
    // }

    const { columns = [], scripts = [], style, ...tableProps } = presetScriptsConfig || {}

    const tableLogData = reactive([...testStepData])
    let tableStyle = {}  
    if (style) {
      const { evenRowBackgroundColor, oddRowBackgroundColor } = style
      tableStyle = {
        '--td-bg-color-secondarycontainer': oddRowBackgroundColor,
        '--td-bg-color-container': evenRowBackgroundColor,
      }
    }

    return {
        columns,
        tableLogData,
        tableProps,
        tableStyle,
    }
}