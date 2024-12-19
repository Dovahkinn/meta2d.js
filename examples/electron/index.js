const { app, BrowserWindow, protocol, net, nativeImage, Tray, ipcMain, } = require('electron/main')
const path = require('node:path')
const fs = require("node:fs").promises;
const url = require('node:url')
const { createServer } = require('http-server');


const triggerServer = (host, port, directory) => {
    const server = createServer({
        root: path.join(__dirname, directory) // 指定服务器根目录
    });

    server.listen(port, host, () => {
        console.log(`Server running at http://${host}:${port}/`)
    })
    return [server, `http://${host}:${port}/#/preview`];
}

function createWindow(url) {
    const trayIcon = nativeImage.createFromPath('./192x192.png')
    const appIcon = nativeImage.createFromPath('./192x192.png')
    const tray = new Tray(trayIcon)

    const win = new BrowserWindow({
        icon: appIcon,
        width: 1920,
        height: 1080,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            webSecurity: false
        }
    })
    // ! 如果修改了，需要同步更新 dist/config.js
    // win.loadFile('./dist/index.html')

    win.loadURL(url)
}

const projectListSync = async (argv) => {
    const dir = path.dirname(app.getPath('exe'))
    if (!argv) return []
    const projectList = require(path.resolve(dir, './project/' + argv))
    if (Array.isArray(projectList)) {
        projectList.forEach(item => {
            if (Array.isArray(item.children)) {
                item.children.forEach(child => {
                    const value = child.value;
                    // 读取 json 文件
                    child.json = require(path.resolve('./project', value))
                })
            }
        })
        return projectList
    }
    return []
}


app.whenReady().then(() => {
    // 获取参数中指定的目录配置文件
    const prefix = '--project-file='
    const arg = process.argv.find(v => v.startsWith(prefix));
    let projectFile = ''
    if (arg) {
        console.log('app ready: ', arg)
        projectFile = arg.replace(prefix, '')
    }
    ipcMain.handle('argv:project-file', () => projectListSync(projectFile))

    const [server, url] = triggerServer("localhost", "8081", "dist");

    createWindow(url)

    app.on('before-quit', () => { // 记得关闭
        server.close();
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
