import { reactive, ref } from 'vue';

let cache: any = null

export const useData = (useSingle?: boolean) => {
  const myPensGroup = reactive([
    {
      label: '我的目录',
      value: '1',
      folder: true,
      children: [
        {
          name: 'test1',
          image: '',
          id: '1',
        },
        {
          name: 'test2',
          image: '',
          id: '2',
        },
        {
          name: 'test3',
          image: '',
          id: '3',
        },
      ],
    },
    {
      label: '默认',
      value: '',
      folder: true,
      children: [
        {
          name: 'test3',
          image: '',
          id: '3',
        },
        {
          name: 'test4',
          image: '',
          id: '4',
        },
      ],
    },
  ]);

  const visible = ref(false);
  const folderName = ref('');
  const selectMode = ref(false);

  const showAddFolder = () => {
    selectMode.value = false
    visible.value = true;
  };

  const confirm = () => {
    console.log('confirm: ', folderName.value);
    visible.value = false;
    if (selectMode.value) {
        // TODO: 保存组件
    } else {
        // 新增目录
        
    }
  };

  const close = () => {
    folderName.value = '';
  };

  const deleteMyPen = (item: any) => {
    console.log('del: ', item);
  };

  const saveComponent = (data: any) => {
    selectMode.value = true
    visible.value = true;
    // TODO: 保存组件
    console.log('saveComponent: ', data);
  };

  if (useSingle && cache) return cache;

  return cache = {
    myPensGroup,
    saveComponent,
    showAddFolder,
    deleteMyPen,
    visible,
    folderName,
    confirm,
    close,
    selectMode,

  };
};
