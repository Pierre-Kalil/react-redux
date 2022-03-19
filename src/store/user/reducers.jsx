import { USER } from "./actionsTypes";

export const userReducer = (state = [], action) => {
  switch (action.type) {
    case USER:
      return (state.user = action.payload.user);
    default:
      return state;
  }
};
