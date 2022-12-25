import { useQuery } from "react-query";
import { ICollection } from "../../models";
import { CollectionService } from "../../services";

const useCollection = (collectionId: number) => {
  const {data, isLoading, isFetching, isError, refetch } = useQuery<ICollection>(['collections', collectionId], async () => {
    return CollectionService.getById(collectionId);
  });
  return {data, isLoading, isFetching, isError, refetch }
}

export default useCollection;
