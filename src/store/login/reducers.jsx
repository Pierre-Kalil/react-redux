import { LOGIN_USER } from "./actionsTypes";

export const loginReducer = (state = [], action) => {
  switch (action.type) {
    case LOGIN_USER:
      return (state.token = action.payload.login);

    default:
      return state;
  }
};
