
## 使用说明
1. 从大屏项目导入配置文件改名为 @.txt
2. 解压缩 dist-base.zip
3. 修改 index.js 加载入口
```js
    // 改为实际的入口路径
    win.loadFile('./dist/index.html')
```
4. 默认解压目录为 dist, 如果修改了名称，需要修改静态文件 config.js
```js
    // 改为实际的目录名
    globalThis.$_goView_config = {
        distDir: './dist/',
    }
```

5. 将多媒体文件放入 dist 目录
6. 启动 electron
```bash
    npm run start
```
7. 分发 deb
```bash
    npm run package
    npm run make
```

## 其他备注
自定义协议
```
local-resource://./dist/
```

7 HXD3非正常行车处理办法多媒体

4 HXD3型机车电器动作实验