import { useQuery } from "react-query";
import { ItemService } from "../../services";

const useItemImage = (itemId: number) => {
  const {data, isLoading, isFetching, isError, refetch } = useQuery<string | null>(['itemImage', itemId], async () => {
    return ItemService.getItemImage(itemId);
  });

  return {data, isLoading, isFetching, isError, refetch }
}

export default useItemImage;
