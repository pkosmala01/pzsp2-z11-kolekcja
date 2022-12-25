import { useQuery } from "react-query";
import { IItemPlainData } from "../../models";
import { ItemService } from "../../services";

const useItem = (itemId: number) => {
  const {data, isLoading, isFetching, isError, refetch } = useQuery<IItemPlainData>(['items', itemId], async () => {
    return ItemService.getItemById(itemId);
  });
  return {data, isLoading, isFetching, isError, refetch }
}

export default useItem;
