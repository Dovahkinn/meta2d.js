import { ref, useAttrs } from 'vue';

export const useUpload = () => {
  const uploadValue = ref([]);
  const sizeLimit = {
    limit: 1024 * 1,
    unit: 'KB',
  };

  const attrs = useAttrs();
  const headers = {
    Authorization: attrs.token,
  };

  const handleFail = (e: any) => {
    console.log('upload fail: ', e);
  };

  const uploadFileFn = (file: File) => {
    if (!attrs.uploadUrl) return Promise.reject('文件上传地址不存在！');
    const formData = new FormData();
    formData.append('object', file);
    return fetch(attrs.uploadUrl, {
      method: 'POST',
      headers,
      body: formData,
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        // console.log('res: ', res);
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return {
    uploadValue,
    sizeLimit,
    headers,
    handleFail,
    uploadFileFn,
  };
};
