import { LOGIN_USER } from "./actionsTypes";

export const login = (login) => ({
  type: LOGIN_USER,
  payload: { login },
});
