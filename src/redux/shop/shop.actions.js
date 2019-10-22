import * as types from "./shop.types";

export const updateCollections = collectionsMap => ({
  type: types.UPDATE_COLLECTIONS,
  payload: collectionsMap
});
