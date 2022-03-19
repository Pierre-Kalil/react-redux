import axios from "axios";
import { createBrand, deleteBrand, listBrand, updateBrand } from "./actions";

export const allBrandsThunks = () => {
  return (dispatch) => {
    axios.get("http://localhost:4000/brand").then((response) => {
      console.log(response);
      dispatch(listBrand(response.data));
    });
  };
};

export const createBrandThunks = (data) => {
  return async (dispatch) => {
    await axios
      .post("http://localhost:4000/brand", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
        },
      })
      .then((response) => {
        console.log(response);
      });
  };
};

export const updateBrandThunks = (id, data) => {
  return async (dispatch) => {
    await axios
      .patch(`http://localhost:4000/brand/${id}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
        },
      })
      .then((response) => {
        console.log(response);
      });
  };
};

export const deleteBrandThunks = (id) => {
  return async (dispatch) => {
    await axios
      .delete(`http://localhost:4000/brand/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
        },
      })
      .then((response) => {
        console.log(response);
      });
  };
};
