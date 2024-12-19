
## 使用说明
### 1. 安装依赖
```bash
npm install
```

### 2. 运行
```bash
npm run start
```

### 3. 打包
```bash
npm run package
npm run make
```

### 4. 打包后输出目录

```
/out/{buildIdentifier}/make/
```

## 启动参数

**约定：**

> 项目图纸文件固定放在 '.exe' 同级 `/project` 目录下，文件名为 'XXX.json'

内容示例：
```json
[
  {
    "label": "Electron Test",
    "value": "",
    "children": [
      {
        "label": "test1",
        "value": "./dir1/test-1.json" // 具体的电路 json 文件
      },
      {
        "label": "test2",
        "value": "./dir1/test-2.json"
      },
      {
        "label": "test3",
        "value": "./dir1/test-3.json"
      }
    ]
  }
]

```



**参数格式：**
```
 --project-file=[filename].json
```