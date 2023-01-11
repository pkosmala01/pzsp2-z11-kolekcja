import { CollectionPermission, CollectionPermissionMock } from "../configs/types";
import authClient from "../untils/authClient";
import { ENDPOINT } from "../untils/endpoint";

export const UserService = {
  async getUsers(collectionId: number): Promise<CollectionPermissionMock[]>{
    const responce = await authClient.get(`${ENDPOINT.collection}/${collectionId}${ENDPOINT.user}`);
    return responce.data;
  }
}