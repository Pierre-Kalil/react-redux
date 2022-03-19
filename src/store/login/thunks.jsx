import api from "../../services/api";
import { login } from "./actions";

export const loginThunks = (data, navigate) => {
  return (dispatch) => {
    api.post("/login", data).then((response) => {
      localStorage.setItem("token", response.data.token);
      dispatch(login(response.data.token));
      navigate("/products");
    });
  };
};
