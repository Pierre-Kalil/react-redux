import { USER } from "./actionsTypes";

export const User = (user) => ({
  type: USER,
  payload: { user },
});
