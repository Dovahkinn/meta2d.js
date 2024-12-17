# 基础图形可视化编辑器 diagram-editor-vue3

这是一个基于 vite+vue3+meta2d.js 实现的基础图形可视化编辑器。

This is a diagram editor implemented based on vite+vue3+meta2d.js.

## 教程

https://doc.le5le.com/blog/136442377

## 运行 How to run

```
pnpm i

pnpm start

// 在浏览器中打开http://127.0.0.1:5173/ 运行

// open http://127.0.0.1:5173/ in browser

```

## 编译 Build

```
pnpm i

pnpm build

```

## TODO

- 预览页支持步骤切换、播放、停止等 -- 预设指令脚本的情形  
  * ~~一个电路图包含若干步骤~~
  * ~~一个步骤包含若干状态，有时序，有持续时间~~

- ws 消息处理调度、优化机制：
  * ~~短时间大量更新消息，先统一更新数据，后渲染~~ wsHanlder 已处理
  * 时间段的连续消息，可见视图即时更新，未加载的图纸，维护一个后台任务 -- 仅限于电路的逻辑
  * 

- 内置控件
  * 支持视频音频
- 事件行为增加一种类型：执行 JavaScript
  * 用于单击打开、再单击关闭这一类情景
-------
### 官方存在的Bug：
- 下载的 svg 与图形不一致
- 下载的 png 也有问题，多了一圈边框

## License

MIT © le5le.com
