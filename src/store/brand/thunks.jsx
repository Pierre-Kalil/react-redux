import api from "../../services/api";
import { createBrand, deleteBrand, listBrand, updateBrand } from "./actions";

export const allBrandsThunks = () => {
  return (dispatch) => {
    api.get("/brand").then((response) => {
      console.log(response);
      dispatch(listBrand(response.data));
    });
  };
};

export const createBrandThunks = (data) => {
  return async (dispatch) => {
    await api
      .post("/brand", data, {
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
    await api
      .patch(`/brand/${id}`, data, {
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
    await api
      .delete(`/brand/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
        },
      })
      .then((response) => {
        console.log(response);
      });
  };
};
