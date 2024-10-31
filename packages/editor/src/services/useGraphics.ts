import { reactive, ref } from 'vue';
import { proxyApi } from './apiManager';
import { deepClone } from '@meta2d/core';
import { useUpload } from './useUpload.ts';

let cache: any = null;

function base64ToFile(base64, fileName) {
  let arr = base64.split(',');
  let mime = arr[0].match(/:(.*\/*?);/)?.[1] || 'image/png';
  let bstr = atob(arr[1]);
  let n = bstr.length;
  let u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], fileName, { type: mime });
}
function activePenToPng(name: string, paper?: boolean) {
  const blob = paper ? meta2d.toPng() : meta2d.activeToPng();
  if (!name?.endsWith('.png')) {
    name += '.png';
  }
  // blob 转 formData
  if (blob) {
    const file = base64ToFile(blob, name);
    return file;
  }
}

function getJsonString(data: any) {
  console.log('getJsonString: ', data);
  if (!data) return;
  let pen;
  if (data.mode == 1) {
    // 单选
    if (data.pen.name == 'combine') {
      const children = data.pen.children.map((id: string) => {
        return meta2d.findOne(id);
      });
      pen = [...children, data.pen];
    } else {
      pen = data.pen;
    }
  } else if (data.mode == 2) {
    // 多选
    // 创建一个组合
    // TODO: pens 中不含 combine 的 children
    const pens = data.pens;
    meta2d.combine(pens);
    const newPen = meta2d.store.active?.[0];
    pen = [...pens, newPen];
  }

  let result = '';
  try {
    const copy = deepClone(pen);
    if (Array.isArray(copy)) {
      copy.forEach((v: any) => {
        v.calculative = undefined;
      });
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
  const blueprintList = ref([]);
  const componentList = ref([]);
  const visible = ref(false);
  const folderName = ref('');
  const selectMode = ref(false);
  const selectType = ref('');
  const apiManager = proxyApi();
  const fileName = ref(''); // 图纸名称或组件名称
  let tempData: any = null;
  let tempCode: string = '';

  const showAddFolder = (code: string) => {
    selectMode.value = false;
    visible.value = true;
    tempCode = code;
  };

  const { uploadFileFn } = useUpload();
  const confirm = () => {
    console.log('confirm: ', folderName.value, tempData);
    visible.value = false;
    if (!folderName.value) return;
    if (selectMode.value) {
      let data;
      if (tempCode != 'paper') {
        // 保存组件
        data = getJsonString(tempData);
      } else {
        data = JSON.stringify(tempData);
      }
      // *: get png file
      const png = activePenToPng(
        fileName.value || 'image.png',
        tempCode == 'paper',
      );
      const saveFn = (cover: string) =>
        apiManager
          .saveComponent({
            nodeId: folderName.value,
            data,
            type: tempCode, // image, component, paper,
            name: fileName.value,
            label: tempCode == 'paper' ? 'paper' : 'component',
            cover,
          })
          .then((res: any) => {
            if (res?.code == 200) {
              getTree(tempCode);
            }
          });
      console.log('png file: ', png);
      if (png) {
        uploadFileFn(png).then((res) => {
          console.log('upload file: ', res);
          if (res?.code == 200) {
            const cover = res.data.fileurl;
            saveFn(cover);
          }
        });
        return;
      }
      // png 不存在
      saveFn();
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
    apiManager
      .saveComponent({
        nodeId: folder.id,
        data: JSON.stringify(data),
        type: 'component',
        name: data.fileName,
        cover: data.image,
        label: 'iamge',
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
    selectType.value = tempCode;
  };

  const saveBlueprintShow = () => {
    selectMode.value = true;
    visible.value = true;
    tempData = meta2d.data();
    tempCode = 'paper';
    selectType.value = tempCode;
  };

  const deleteFolder = (item: any, code: string) => {
    apiManager.deleteFolder(item.id).then((res: any) => {
      if (res?.code == 200) {
        getTree(code);
      }
    });
  };

  const getTree = (code: string) => {
    return apiManager.getTree(code).then((res: any) => {
      if (Array.isArray(res.data)) {
        if (code == 'paper') {
          blueprintList.value = res.data;
        } else {
          componentList.value = res.data;
        }
      }
    });
  };

  if (useSingle && cache) return cache;

  return (cache = {
    blueprintList,
    componentList,
    saveComponentShow,
    showAddFolder,
    deleteMyPen,
    visible,
    folderName,
    confirm,
    close,
    selectMode,
    selectType,
    deleteFolder,
    getTree,
    fileName,
    saveImageComponent,
    saveBlueprintShow,
  });
};
