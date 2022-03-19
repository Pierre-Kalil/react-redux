import axios from "axios";
import { login } from "./actions";

export const loginThunks = (data, navigate) => {
  return (dispatch) => {
    axios.post("http://localhost:4000/login", data).then((response) => {
      localStorage.setItem("token", response.data.token);
      dispatch(login(response.data.token));
      navigate("/products");
    });
  };
};
