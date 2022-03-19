import { ADD_CATEGORY } from "./actionsTypes";
import { LIST_CATEGORY } from "./actionsTypes";
import { UPDATE_CATEGORY } from "./actionsTypes";
import { DELETE_CATEGORY } from "./actionsTypes";

export const createCategory = (category) => ({
  type: ADD_CATEGORY,
  payload: { category },
});
export const listCategory = (list) => ({
  type: LIST_CATEGORY,
  payload: { list },
});
export const updateCategory = (category) => ({
  type: UPDATE_CATEGORY,
  payload: { category },
});
export const deleteCategory = (category) => ({
  type: DELETE_CATEGORY,
  payload: { category },
});
