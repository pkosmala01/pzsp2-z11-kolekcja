import { ICollection } from "../models";
import authClient from "../untils/authClient";
import { ENDPOINT } from "../untils/endpoint";

export const CollectionService = {
  async createCollection(collection: ICollection) {
    const responce = await authClient.post(`${ENDPOINT.createCollection}`, collection);
    return responce.data;
  },

  async getAll() {
    const responce = await authClient.get(`${ENDPOINT.collectionsList}`);
    return responce.data
  },

  async getById(collectionId: number) {
    const responce = await authClient.get(`${ENDPOINT.collection}/${collectionId}`);
    return responce.data
  },
}
