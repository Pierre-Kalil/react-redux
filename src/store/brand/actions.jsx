import { ADD_BRAND } from "./actionsTypes";
import { LIST_BRAND } from "./actionsTypes";
import { UPDATE_BRAND } from "./actionsTypes";
import { DELETE_BRAND } from "./actionsTypes";

export const createBrand = (brand) => ({
  type: ADD_BRAND,
  payload: { brand },
});
export const listBrand = (list) => ({
  type: LIST_BRAND,
  payload: { list },
});
export const updateBrand = (brand) => ({
  type: UPDATE_BRAND,
  payload: { brand },
});
export const deleteBrand = (brand) => ({
  type: DELETE_BRAND,
  payload: { brand },
});
