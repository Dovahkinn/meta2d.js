// 左右偏移20移动
const moveXFrames = [
  { x: -10, duration: 100 },
  { x: 10, duration: 80 },
  { x: -10, duration: 50 },
  { x: 10, duration: 30 },
  { x: 0, duration: 300 },
];

// 上下跳动
const moveYFrames = [
  { y: -10, duration: 100 },
  { y: 10, duration: 80 },
  { y: -10, duration: 50 },
  { y: 10, duration: 30 },
  { y: 0, duration: 300 },
];

// 左右摇摆
const rotateXFrames = [
  {
    duration: 100,
    rotate: -10,
  },
  {
    duration: 100,
    rotate: 10,
  },
  {
    duration: 100,
    rotate: 0,
  },
];

// 缩放
const scaleFrames = [
  {
    duration: 100,
    scale: 0.8,
  },
  {
    duration: 400,
    scale: 1,
  },
  {
    duration: 100,
    scale: 1.2,
  },
];

const rotateFrames = [
  {
    duration: 1000,
    rotate: 360,
  }
]

const rotateFrames2 = [
    {
        duration: 1000,
        rotate: -360,
    }
]


// 上述动画所列属性是相对变化

// 其他数字属性匀速渐变
// 进度变化
const processFrames = [
//   {
//     duration: 1000,
//     progress: 0.5,
//   },
  {
    duration: 2000,
    progress: 1,
  },
];
// 非数字类型，直接变化
const colorFrames = [
  {
    duration: 1000,
    color: 'green',
  },
  {
    duration: 2000,
    color: 'red',
  },
];

export const PenFrameOptions = [
  {
    label: '上下跳动',
    value: 'moveYFrames',
  },
  {
    label: '左右跳动',
    value: 'moveXFrames',
  },

  {
    label: '心跳',
    value: 'scaleFrames',
  },
  {
    label: '摇摆',
    value: 'rotateXFrames',
  },

  {
    label: '旋转',
    value: 'rotateFrames',
  },
  {
    label: '反向旋转',
    value: 'rotateFrames2',
  },

  {
    label: '进度',
    value: 'processFrames',
  },

  {
    label: '自定义',
    value: 'x-custom',
  },

  

];


export const PenFrames = {
  moveXFrames,
  moveYFrames,
  rotateXFrames,
  scaleFrames,
  processFrames,
  colorFrames,
  rotateFrames,
  rotateFrames2,
};
