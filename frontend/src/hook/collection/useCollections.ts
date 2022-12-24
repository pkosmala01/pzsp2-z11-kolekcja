import { useQuery } from "react-query";
import { CollectionService } from "../../services";

const useCollections = () => {
  const {data, isLoading, isFetching, isError, refetch } = useQuery('collections', async () => {
    return CollectionService.getAll();
  });
  return {data, isLoading, isFetching, isError, refetch }
}

export default useCollections;
