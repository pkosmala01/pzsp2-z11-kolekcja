import { useQuery } from "react-query";
import { CollectionService } from "../../services";

const useCollection = (collectionId: number) => {
  const {data, isLoading, isFetching, isError, refetch } = useQuery(['collections', collectionId], async () => {
    return CollectionService.getById(collectionId);
  });
  return {data, isLoading, isFetching, isError, refetch }
}

export default useCollection;
