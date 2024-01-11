import { useAccessToken } from './useAccessToken';
import { useAsync } from 'react-use-custom-hooks';

export const useAsyncWithToken = <T, P, E = string>(
  asyncOperation: () => Promise<T>, deps: any[]
) => {
  const { saveAccessToken } = useAccessToken();
  const [ data, loading, error ] = useAsync(async () => {
    await saveAccessToken();
    return asyncOperation();
  }, {},  deps);

  return {
    data,
    loading,
    error
  };
};