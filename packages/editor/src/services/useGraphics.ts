import { reactive, ref } from 'vue';
import { proxyApi } from './apiManager';
import { deepClone } from '@meta2d/core';

let cache: any = null;

function getJsonString(data: any) {
  console.log('getJsonString: ', data);
  if (!data) return;
  let pen;
  if (data.mode == 1) {
    // 单选
    if (data.pen.name == "combine") {
      const children = data.pen.children.map((id: string) => {
        return meta2d.findOne(id)
      })
      pen = [...children, data.pen];
    } else {      
      pen = data.pen;
    }
  } else if (data.mode == 2) {
    // 多选
    // 创建一个组合
    const pens = data.pens
    meta2d.combine(pens);
    const newPen = meta2d.store.active?.[0]
    pen = [...pens, newPen];
  }

  let result = '';
  try {
    const copy = deepClone(pen);
    if (Array.isArray(copy)) {
      copy.forEach((v: any) => {
        v.calculative = undefined;
      })
    } else {
      copy.calculative = undefined;
    }
    result = JSON.stringify(copy);
  } catch (error) {
    console.log('error: ', error);
  }

  return result;
}

export const useData = (useSingle?: boolean) => {
  const myPensGroup = ref([]);
  const visible = ref(false);
  const folderName = ref('');
  const selectMode = ref(false);
  const apiManager = proxyApi();
  const fileName = ref(''); // 图纸名称或组件名称
  let tempData: any = null;
  let tempCode: string = '';

  const showAddFolder = (code: string) => {
    selectMode.value = false;
    visible.value = true;
    tempCode = code;
  };

  const confirm = () => {
    console.log('confirm: ', folderName.value, tempData);
    visible.value = false;
    if (!folderName.value) return;
    if (selectMode.value) {
      // 保存组件
      const data = getJsonString(tempData);

      apiManager
        .saveComponent({
          nodeId: folderName.value,
          data,
          type: tempCode,
          name: fileName.value,
        })
        .then((res: any) => {
          if (res?.code == 200) {
            getTree(tempCode);
          }
        });
    } else {
      // 新增目录
      apiManager
        .createFolder({
          dictName: folderName.value,
          type: tempCode,
        })
        .then((res: any) => {
          if (res?.code == 200) {
            getTree(tempCode);
          }
        });
    }
  };

  const saveImageComponent = (folder: any, data: any) => {
    // data.type = 'component'
    apiManager
      .saveComponent({
        nodeId: folder.id,
        data: JSON.stringify(data),
        type: 'component',
        name: data.fileName,
      })
      .then((res: any) => {
        if (res?.code == 200) {
          getTree('component');
        }
      });
  };

  const close = () => {
    folderName.value = '';
    fileName.value = '';
  };

  const deleteMyPen = (item: any, code: string) => {
    apiManager.deleteComponent(item.id).then((res: any) => {
      if (res?.code == 200) {
        getTree(code);
      }
    });
  };

  // 右键菜单--保存组件
  const saveComponentShow = (data: any) => {
    selectMode.value = true;
    visible.value = true;
    tempData = data;
    tempCode = 'component';
  };

  const deleteFolder = (item: any, code: string) => {
    apiManager.deleteFolder(item.id).then((res: any) => {
      if (res?.code == 200) {
        getTree(code);
      }
    });
  };

  const getTree = (data: any) => {
    return apiManager.getTree(data).then((res: any) => {
      if (Array.isArray(res.data)) {
        myPensGroup.value = res.data;
      }
    });
  };

  if (useSingle && cache) return cache;

  return (cache = {
    myPensGroup,
    saveComponentShow,
    showAddFolder,
    deleteMyPen,
    visible,
    folderName,
    confirm,
    close,
    selectMode,
    deleteFolder,
    getTree,
    fileName,
    saveImageComponent,
  });
};
