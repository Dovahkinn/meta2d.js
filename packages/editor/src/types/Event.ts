// where数据属性结构如下：
// ● type - 任意值，推荐使用条件的功能名称方便阅读。为空时，表示没有触发条件。
// ● fn - 条件函数，返回一个bool值。最高优先级。
// ● fnJs - 条件的js代码文本，可获取'pen'和 'context'参数，返回一个bool值。高优先级。
// ● key - 通过属性名进行条件比较。低优先级。
// ● comparison - 属性比较条件，配合key使用。
//   ○ “>” - 大于
//   ○ “>=” - 大于等于
//   ○ “<” - 小于
//   ○ “<=” - 小于等于
//   ○ “=” - 等于
//   ○ “!=” - 不等于
//   ○ “[)” - 介于，与数学上相同，例如：[0, 100) 0~100，包含0不包含100； [0,100] 0~100,包含0和100
//   ○ “![)” - 不介于，“介于”以外的
//   ○ “[]” - 属于,集合，例如：[1,20,30..50,65] ，1.0.48版本后支持字符串，例如 [1,20,aaa,值1]
//   ○ “![]” - 不属于，上述集合以外的
// ● value - 属性比较值，配合key使用。

type ComparisonType = ">" | ">=" | "<" | "<=" | "=" | "!=" | "[)" | "![)" | "[]" | "![]"

export type WhereType = {
  type?: string;
  fn?: (pen: Pen) => boolean;
  fnJs?: string;
  key?: string;
  comparison?: ComparisonType;
  value?: any;
};

// events对象说明
// ● name - 事件类型
// ● action - 事件行为
// ● value - 事件附属数据
// ● params - 事件参数
// ● where - 触发条件
export type EventConfig = {
  name: string;
  action: EventAction;
  value: any;
  params: string;
  where: object;
  extend: object;
};

export enum EventAction {
  Link, // 打开链接
  SetProps, // 更改属性
  StartAnimate, // 执行动画
  PauseAnimate, // 暂停动画
  StopAnimate, // 停止动画
  JS, // 执行JS代码
  GlobalFn, // 执行全局函数
  Emit, // 发送消息
  StartVideo, // 播放视频
  PauseVideo, // 暂停视频
  StopVideo, // 停止视频
  SendPropData, // 发送图元数据
  SendVarData, // 发送绑定变量
  Dialog = 14, //对话框 14
}


export type HandlerType = {
  id: string
  action: EventAction
  params: {
    tags: string[],
    ids: string[],
  },
  value: any
  where: {
    key: string,
    value: string | number,
    comparison: ComparisonType,
  }
}
