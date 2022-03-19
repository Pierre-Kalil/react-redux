import axios from "axios";
import api from "../../services/api";

export const createUserThunks = (data) => {
  return (dispatch) => {
    api.post("/user", data).then((response) => {
      console.log(response);
      // dispatch(User(response.data));
    });
  };
};
