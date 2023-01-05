import { Collection, CollectionPermission } from "./types"

export namespace CollectionGetEndpoint {
    /**
     * @description
     * Request to get a collection
     */
    export const path = "/collections/:id"
    export const method = "GET"

    export type Request = {
        id: number
    }
    export type Response = {
        collection: Collection
    }
}

export namespace CollectionGetAllEndpoint {
    /**
     * @description
     * Request to get all collections
     */
    export const path = "/collections"
    export const method = "GET"

    export type Request = {}
    export type Response = {
        collections: Collection[]
    }
}

export namespace CollectionCreateEndpoint {
    /**
     * @description
     * Request to create a collection
     */
    export const path = "/collections"
    export const method = "POST"

    export type Request = {
        name: string
        description: string
    }
    export type Response = {
        collection: Collection
    }
}

export namespace CollectionUpdateEndpoint {
    /**
     * @description
     * Request to update a collection
     */
    export const path = "/collections/:id"
    export const method = "PUT"

    export type Request = {
        name: string
        description: string
    }
    export type Response = {
        collection: Collection
    }
}

export namespace CollectionDeleteEndpoint {
    /**
     * @description
     * Request to delete a collection
     */
    export const path = "/collections/:id"
    export const method = "DELETE"

    export type Request = {
        id: number
    }
    export type Response = {}
}
