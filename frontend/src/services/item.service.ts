import { IItemBase, IItemPlainData } from "../models";
import authClient from "../untils/authClient";
import { ENDPOINT } from "../untils/endpoint";

export const ItemService = {
  async getAllByCollection(collectionId: number): Promise<IItemPlainData[]> {
    const responce = await authClient.get(`${ENDPOINT.collection}/${collectionId}/items`);
    return responce.data;
  },

  async getItemById(itemId: number): Promise<IItemPlainData>{
    const responce = await authClient.get(`${ENDPOINT.item}/${itemId}`);
    return responce.data;
  },

  async createItem(item: IItemBase) {
    const responce = await authClient.post(`${ENDPOINT.createItem}`, item);
    return responce.data;
  },

  async deleteItem(itemId: number) {
    const responce = await authClient.delete(`${ENDPOINT.item}/${itemId}`);
    return responce.data;
},

  async getItemImage(itemId: number): Promise<string | null> {

    const responce = await authClient.get(`/items/${itemId}/image`, {responseType: "arraybuffer"});
    const byteArray = new Uint8Array(responce.data)
    if(byteArray.length === 0) {
      return null;
    }

    const contentType = responce.headers.getContentType as string
    const blob = new Blob([byteArray.buffer], {
      type: contentType!
    })
    const url = URL.createObjectURL(blob);
    return url;
  },

}