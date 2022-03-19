import { ADD_PRODUCT } from "./actionsTypes";
import { LIST_PRODUCT } from "./actionsTypes";
import { UPDATE_PRODUCT } from "./actionsTypes";
import { DELETE_PRODUCT } from "./actionsTypes";

export const createProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: { product },
});
export const listProduct = (list) => ({
  type: LIST_PRODUCT,
  payload: { list },
});
export const updateProduct = (product) => ({
  type: UPDATE_PRODUCT,
  payload: { product },
});
export const deleteProduct = (product) => ({
  type: DELETE_PRODUCT,
  payload: { product },
});
