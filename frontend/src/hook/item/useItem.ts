import { useQuery } from "react-query";
import { ItemService } from "../../services";

const useItem = (itemId: number) => {
  const {data, isLoading, isFetching, isError, refetch } = useQuery('item', async () => {
    return ItemService.getItemById(itemId);
  });
  return {data, isLoading, isFetching, isError, refetch }
}

export default useItem;
