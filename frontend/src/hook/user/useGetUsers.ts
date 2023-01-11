import { useQuery } from "react-query";
import { CollectionPermission, CollectionPermissionMock } from "../../configs/types";
import { UserService } from "../../services/user.service";

const useGetUsers = (collectionId: number) => {
  const { data, isLoading, isFetching, isError, refetch } =
    useQuery<CollectionPermissionMock[]>(["items", collectionId], async () => {
      return UserService.getUsers(collectionId);
    });
  return { data, isLoading, isFetching, isError, refetch };
};

export default useGetUsers;
