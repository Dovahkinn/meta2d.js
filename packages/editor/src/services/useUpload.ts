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

  return {
    uploadValue,
    sizeLimit,
    headers,
    handleFail,
  };
};
