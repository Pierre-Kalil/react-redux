import { GET_ID_CATEGORY } from "./actionsTypes";

export const statesModelReducer = (state = "", action) => {
  switch (action.type) {
    case GET_ID_CATEGORY:
      return (state.idCategory = action.payload.idCategory);
    default:
      state;
  }
};
