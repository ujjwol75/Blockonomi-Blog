

import { getApiData } from "../Helper/AxiosInstance";
import {useQuery} from 'react-query'

const useGetHook = ({queryKey, url, parma}) => {
  const {isLoading, isError, data} = useQuery(queryKey, async () => {
      const response = await getApiData(url, parma);
      return response.data;
    },
    {
      refetchOnWindowFocus: false,
    });

  return {isLoading, isError, data};
};

export default useGetHook;