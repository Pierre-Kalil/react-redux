import api from "../../services/api";
import {
  createProduct,
  deleteProduct,
  listProduct,
  updateProduct,
} from "./actions";

export const allProductsThunks = () => {
  return (dispatch) => {
    api.get("/product").then((response) => {
      dispatch(listProduct(response.data));
    });
  };
};

export const createProductsThunks = (data) => {
  return async (dispatch) => {
    await api
      .post("/product", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console(err));
  };
};

export const updateProductThunks = (id, data) => {
  return async (dispatch) => {
    await api
      .patch(`/product/${id}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
        },
      })
      .then((response) => {
        console.log(response);
      });
  };
};

export const deleteProductThunks = (id) => {
  return async (dispatch) => {
    await api
      .delete(`/product/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
        },
      })
      .then((response) => {
        console.log(response);
      });
  };
};
