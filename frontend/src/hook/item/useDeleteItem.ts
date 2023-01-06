import { useMutation } from "react-query";
import { IItemPlainData } from "../../models";
import { ItemService } from "../../services";

const useDeleteItem = (item: IItemPlainData, onSuccess: CallableFunction) => {
  const {mutate, data, isLoading, isError } = useMutation(
    "deleteItem",
    async () => {
      return ItemService.deleteItem(item.item_id);
    },
    {
      onSuccess: () => {
        onSuccess();
      },
    }
  );

  return { mutate, data, isLoading, isError }
};

export default useDeleteItem;
