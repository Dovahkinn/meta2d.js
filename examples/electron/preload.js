const { contextBridge, ipcRenderer, } = require('electron')
const path = require('path')

// console.log('------------- preload.js ----------> ', process, __dirname) // => app.asar

// const projectListSync = async () => {
//   const argv = await ipcRenderer.invoke('argv:project-file')
//   const projectList = require(path.resolve(__dirname, './project/' + argv))
//   if (Array.isArray(projectList)) {
//     projectList.forEach(item => {
//       if (Array.isArray(item.children)) {
//         item.children.forEach(child => {
//           const value = child.value;
//           // 读取 json 文件
//           child.json = require(path.resolve('./project', value))
//         })
//       }
//     })
//     return projectList
//   }
//   return []
// }

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  // 除函数之外，我们也可以暴露变量
  projectListSync: () => ipcRenderer.invoke('argv:project-file'),
})