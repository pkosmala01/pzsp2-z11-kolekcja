
export type IItemBase = {
  name: string,
  description: string,
  condition: string,
  location: string,
  price: number,
  collection_id: number
  properties: any
}

export type IItemPlainData = IItemBase & {
  item_id: number,
}

export type IItemMediaData = {
  photo: File
}

export type IItem = IItemPlainData & IItemMediaData;