import { ADD_PRODUCT } from "./actionsTypes";
import { LIST_PRODUCT } from "./actionsTypes";
import { UPDATE_PRODUCT } from "./actionsTypes";
import { DELETE_PRODUCT } from "./actionsTypes";

export const productReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return (state.product = action.payload.product);
    case LIST_PRODUCT:
      return (state.product_List = action.payload.list);
    case UPDATE_PRODUCT:
      return (state.product = action.payload.product);
    case DELETE_PRODUCT:
      return (state.product = action.payload.product);
    default:
      return state;
  }
};
