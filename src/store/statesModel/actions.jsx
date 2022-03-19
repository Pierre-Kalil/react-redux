import { GET_ID_CATEGORY } from "./actionsTypes";

export const getIdCategory = (idCategory) => ({
  type: GET_ID_CATEGORY,
  payload: { idCategory },
});
