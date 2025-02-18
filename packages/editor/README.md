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

- 编辑器功能测
- 支持重新开始

- 事件行为增加一种类型：
  * 单击打开、再单击关闭这一类情景

  





#### new
*****************************
- 脚本队列执行中切换页面，再次进入报错

- ~~没有网络，图标不显示~~  
  // https://tdesign.gtimg.com/icon/0.3.1/fonts/index.js
- ~~弹窗下边距控制~~
- ~~支持弹窗显示文字~~
- ~~轨迹移动结束不要回到原点~~
- ~~脚本时长需要关联视频结束~~
- ~~多个步骤配置相同的触发条件，会同时执行 -- 事件源是同一个~~

- 最后一步，视频结束重新开始轨迹动画，为啥重新开始了？（在demo 中才有问题）



### 官方存在的Bug：
- 下载的 svg 与图形不一致
- 下载的 png 也有问题，多了一圈边框
- 动画暂停、播放，状态从头开始执行

## License

MIT © le5le.com
