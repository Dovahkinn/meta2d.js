// 定义接口
export interface IApiManager {
    // 新建文件夹
    createFolder(data: any): Promise<any>;
    // 删除文件夹
    deleteFolder(data: any): Promise<any>;
    // 新增组件或图纸
    saveComponent(data: any): Promise<any>;
    // 删除组件
    deleteComponent(data: any): Promise<any>;
    // 查询 json
    // getMetaJson(data: any): Promise<any>;
    // 查询树
    getTree(data: any): Promise<any>;
}

// 创建ApiManager实例
const apiManager: IApiManager = {
    createFolder(data: any) {
        return new Promise((resolve, reject) => {
            
        })
    },

    deleteFolder(data: any) {
        return new Promise((resolve, reject) => {
            
        })
    },
    saveComponent(data: any) {
        return new Promise((resolve, reject) => {
            
        })
    },
    deleteComponent(data: any) {
        return new Promise((resolve, reject) => {
            
        })
    },
    // getMetaJson(data: any) {
    //     return new Promise((resolve, reject) => {
            
    //     })
    // },

    getTree(data: any) {
        return new Promise((resolve, reject) => {
            resolve({
                code: 200,
                data: [],
            })
        })
    }

};

export function registerApi(api: IApiManager) {
    if (!api) {
        throw new Error('api is required!')
    }
    Object.assign(apiManager, api);
}


// proxy 代理请求
export function proxyApi() {
    // 代理apiManager对象中的方法
    return new Proxy(apiManager, {
        get(target, prop: keyof IApiManager) {
            if (typeof target[prop] === 'function') {
                return target[prop].bind(target);
            }
            console.error(`api proxy: ${prop} not found!`);
            return function() {
                return new Promise((resolve, reject) => {
                    reject(new Error(`数据接口: ${prop} 不存在，请先在插件选项中定义`));
                })
            };
        },
    })
}