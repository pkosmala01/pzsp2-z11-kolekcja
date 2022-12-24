import { useQuery } from "react-query";
import { ItemService } from "../../services";

const useCollectionItems = (collectionId: number) => {
  const {data, isLoading, isFetching, isError, refetch } = useQuery('collectionItems', async () => {
    return ItemService.getAllByCollection(collectionId);
  });
  return {data, isLoading, isFetching, isError, refetch }
}

export default useCollectionItems;
