import { useMutation } from 'react-query';
import axios from 'axios';

const usePostData = <T>(url: string, success: CallableFunction) => {
//   const queryClient = useQueryClient();
  const { data, isLoading, isError, error, mutate } = useMutation(
    async (data: T) => {
      const resp = await axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      return resp.data;
    },
    {
      onSuccess: (_data: T) => {
        success();
      },
    },
  );

  return { data, isLoading, isError, error, mutate };
};

export default usePostData;
