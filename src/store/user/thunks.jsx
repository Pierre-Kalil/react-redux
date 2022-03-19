import axios from "axios";

export const createUserThunks = (data) => {
  return (dispatch) => {
    axios.post("http://localhost:4000/user", data).then((response) => {
      console.log(response);
      // dispatch(User(response.data));
    });
  };
};
