import { Collection, CollectionPermission, Item, Property } from "./types";

export namespace CollectionGetEndpoint {
  /**
   * @description
   * Request to get a collection
   */
  export const path = "/collections/:id";
  export const method = "GET";

  export type Request = {
    id: number;
  };
  export type Response = Collection;
}

export namespace CollectionGetAllEndpoint {
  /**
   * @description
   * Request to get all collections
   */
  export const path = "/collections";
  export const method = "GET";

  export type Request = {};
  export type Response = Collection[];
}

export namespace CollectionGetCollectionItemsEndpoint {
    /**
     * @description
     * Request to get all items in a collection
     */
    export const path = "/collections/:id/items";
    export const method = "GET";

    export type Request = {};

    export type Response = Item[];
}

export namespace CollectionCreateEndpoint {
  /**
   * @description
   * Request to create a collection
   */
  export const path = "/collections";
  export const method = "POST";

  export type Request = {
    name: string;
    description: string;
  };
  export type Response = Collection;
}

export namespace CollectionUpdateEndpoint {
  /**
   * @description
   * Request to update a collection
   */
  export const path = "/collections/:id";
  export const method = "PUT";

  export type Request = {
    name: string;
    description: string;
  };
  export type Response = Collection;
}

export namespace CollectionDeleteEndpoint {
  /**
   * @description
   * Request to delete a collection
   */
  export const path = "/collections/:id";
  export const method = "DELETE";

  export type Request = {};
  export type Response = {};
}

export namespace ItemGetEndpoint {
  /**
   * @description
   * Request to get an item
   */
  export const path = "/items/:id";
  export const method = "GET";

  export type Request = {};
  export type Response = Item;
}

export namespace ItemGetAllEndpoint {
  /**
   * @description
   * Request to get all items
   */
  export const path = "/items";
  export const method = "GET";

  export type Request = {};
  export type Response = Item[];
}

export namespace ItemCreateEndpoint {
  /**
   * @description
   * Request to create an item
   */
  export const path = "/items";
  export const method = "POST";

  export type Request = Item;
  export type Response = Item;
}

export namespace ItemUpdateEndpoint {
  /**
   * @description
   * Request to update an item
   */
  export const path = "/items/:id";
  export const method = "PUT";

  export type Request = Item;
  export type Response = Item;
}

export namespace ItemDeleteEndpoint {
    /**
     * @description
     * Request to delete an item
     */
    export const path = "/items/:id";
    export const method = "DELETE";

    export type Request = {};

    export type Response = {};
}

export namespace ItemImageUploadEndpoint {
    /**
     * @description
     * Request to upload an image for an item
     */
    export const path = "/items/:id/image";
    export const method = "POST";

    export type Request = {
        image: File;
    };

    export type Response = {};
}

export namespace ItemImageGetEndpoint {
    /**
     * @description
     * Request to get an image for an item
     */
    export const path = "/items/:id/image";
    export const method = "GET";

    export type Request = {};

    export type Response = {
        image: string;
    };
}

export namespace CollectionAddCollectionPermissionEndpoint {
    /**
     * @description
     * Request to add a collection permission
     */
    export const path = "/collections/:id/users";
    export const method = "POST";

    export type Request = {
        userId: number;
        permissionLevel: number;
    };

    export type Response = CollectionPermission;
}

export namespace CollectionRemoveCollectionPermissionEndpoint {
    /**
     * @description
     * Request to remove a collection permission
     */
    export const path = "/collections/:id/users/:userId";
    export const method = "DELETE";

    export type Request = {};

    export type Response = {};
}

export namespace CollectionGetCollectionPermissionsEndpoint {
    /**
     * @description
     * Request to get all collection permissions
     */
    export const path = "/collections/:id/users";
    export const method = "GET";

    export type Request = {};

    export type Response = CollectionPermission[];
}

export namespace CollectionGetItemsFilterByPropertiesEndpoint {
    /**
     * @description
     * Request to get all items in a collection filtered by properties
     */
    export const path = "/collections/:id/items/filter";
    export const method = "GET";

    export type Request = {
        properties: Property[];
    };

    export type Response = Item[];
}

export namespace ItemPostToAllegroEndpoint {
    /**
     * @description
     * Request to post an item to allegro
     */
    export const path = "/items/:id/post";
    export const method = "POST";

    export type Request = {};

    export type Response = {};
}

export namespace ItemGetAllegroPostStatusEndpoint {
    /**
     * @description
     * Request to get the status of an allegro post
     */
    export const path = "/items/:id/post/status";
    export const method = "GET";

    export type Request = {};

    export type Response = {
        status: string;
    };
}

export namespace CollectionGetAllItemsPostedToAllegroEndpoint {
    /**
     * @description
     * Request to get all items posted to allegro
     */
    export const path = "/collections/:id/items/posted";
    export const method = "GET";

    export type Request = {};

    export type Response = Item[];
}