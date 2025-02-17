const { contextBridge, ipcRenderer, } = require('electron')
const path = require('path')

// console.log('------------- preload.js ----------> ', process, __dirname) // => app.asar


contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  // 除函数之外，我们也可以暴露变量
  projectListSync: () => ipcRenderer.invoke('argv:project-file'),
})