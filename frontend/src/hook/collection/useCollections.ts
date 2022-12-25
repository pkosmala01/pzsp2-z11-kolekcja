import { useQuery } from "react-query";
import { ICollection } from "../../models";
import { CollectionService } from "../../services";

const useCollections = () => {
  const {data, isLoading, isFetching, isError, refetch } = useQuery<ICollection[]>('collections', async () => {
    return CollectionService.getAll();
  });
  return {data, isLoading, isFetching, isError, refetch }
}

export default useCollections;
