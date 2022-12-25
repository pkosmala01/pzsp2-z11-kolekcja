
export type IItemBase = {
  name: string,
  description: string,
  condition: string,
  location: string,
  price: number,
  collectionId: number
  properties: any
}

export type IItemPlainData = IItemBase & {
  itemId: number,
}

export type IItemMediaData = {
  photo: File
}

export type IItem = IItemPlainData & IItemMediaData;