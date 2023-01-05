export type Property = {
    id: number,
    name: string,
    dataType: string,
    required: boolean,
    description: string
}

export type User = {
    id: number,
    email: string,
    name: string
}

export type Permission = {
    permissionLevel: number,
    name: string,
    description: string
}

export type CollectionPermission = {
    permission: Permission,
    user: User
}

export type Collection = {
    id: number,
    name: string,
    description: string,
    collectionPermissions: CollectionPermission[]
}

export type Item = {
    id: number,
    collection: Collection,
    name: string,
    description: string,
    properties: Property[]
}