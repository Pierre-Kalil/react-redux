import { ADD_BRAND } from "./actionsTypes";
import { LIST_BRAND } from "./actionsTypes";
import { UPDATE_BRAND } from "./actionsTypes";
import { DELETE_BRAND } from "./actionsTypes";

export const brandReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BRAND:
      return (state.brand = action.payload.brand);
    case LIST_BRAND:
      return (state.brand_List = action.payload.list);
    case UPDATE_BRAND:
      return (state.brand = action.payload.brand);
    case DELETE_BRAND:
      return (state.brand = action.payload.brand);
    default:
      return state;
  }
};
