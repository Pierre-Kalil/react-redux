import axios from "axios";
import {
  createProduct,
  deleteProduct,
  listProduct,
  updateProduct,
} from "./actions";

export const allProductsThunks = () => {
  return async (dispatch) => {
    await axios.get("http://localhost:4000/product").then((response) => {
      dispatch(listProduct(response.data));
    });
  };
};

export const createProductsThunks = (data) => {
  return async (dispatch) => {
    await axios
      .post("http://localhost:4000/product", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
        },
      })
      .then((response) => {
        console.log(response);
      });
  };
};

export const updateProductThunks = (id, data) => {
  return async (dispatch) => {
    await axios
      .patch(`http://localhost:4000/product/${id}`, data, {
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
    await axios
      .delete(`http://localhost:4000/product/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
        },
      })
      .then((response) => {
        console.log(response);
      });
  };
};
