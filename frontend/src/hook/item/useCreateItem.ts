import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { IItemBase } from "../../models";
import { ItemService } from "../../services";

const useCreateItem = (item: IItemBase, onSuccess: CallableFunction) => {

  const navigate = useNavigate();
  const {mutate, data, isLoading, isError } = useMutation("createItem", async () => {
    return ItemService.createItem(item);
  },
  {
    onSuccess: () => {
      navigate(-1)
    }
  }
);

  return { mutate, data, isLoading, isError }
}

export default useCreateItem;
