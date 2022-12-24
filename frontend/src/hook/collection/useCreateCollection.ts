import { useMutation } from "react-query";
import { ICollection } from "../../models";
import { CollectionService } from "../../services";

const useCreateCollection = (collection: ICollection, onSuccess: CallableFunction) => {
  const {mutate, data, isLoading, isError } = useMutation("createCollection", async () => {
    return CollectionService.createCollection(collection)
  }, {
    onSuccess: () => {
      onSuccess();
    }
  })

  return { mutate, data, isLoading, isError }
}

export default useCreateCollection;
