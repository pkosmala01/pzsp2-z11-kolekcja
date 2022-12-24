import { IItem } from "../models";
import authClient from "../untils/authClient";
import { ENDPOINT } from "../untils/endpoint";

export const ItemService = {
  async getAllByCollection(collectionId: number){
    const responce = await authClient.get(`${ENDPOINT.collection}/${collectionId}/items`);
    return responce.data;
  },

  async getItemById(itemId: number){
    const responce = await authClient.get(`${ENDPOINT.item}/${itemId}`);
    return responce.data;
  },

  async createItem(item: IItem) {
    const responce = await authClient.post(`${ENDPOINT.createItem}`, item);
    return responce.data;
  },

}