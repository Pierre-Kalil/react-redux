import { ADD_CATEGORY } from "./actionsTypes";
import { LIST_CATEGORY } from "./actionsTypes";
import { UPDATE_CATEGORY } from "./actionsTypes";
import { DELETE_CATEGORY } from "./actionsTypes";

export const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return (state.category = action.payload.category);
    case LIST_CATEGORY:
      return (state.category_List = action.payload.list);
    case UPDATE_CATEGORY:
      return (state.category = action.payload.category);
    case DELETE_CATEGORY:
      return (state.category = action.payload.category);
    default:
      return state;
  }
};
