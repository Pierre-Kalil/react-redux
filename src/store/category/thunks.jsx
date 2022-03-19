import axios from "axios";
import {
  createCategory,
  deleteCategory,
  listCategory,
  updateCategory,
} from "./actions";

export const allCategoriesThunks = () => {
  return (dispatch) => {
    axios.get("http://localhost:4000/category").then((response) => {
      console.log(response);
      dispatch(listCategory(response.data));
    });
  };
};

export const createCategoryThunks = (data) => {
  return async (dispatch) => {
    await axios
      .post("http://localhost:4000/category", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
        },
      })
      .then((response) => {
        console.log(response);
      });
  };
};

export const updateCategoryThunks = (id, data) => {
  return async (dispatch) => {
    await axios
      .patch(`http://localhost:4000/category/${id}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
        },
      })
      .then((response) => {
        console.log(response);
      });
  };
};

export const deleteCategoryThunks = (id) => {
  return async (dispatch) => {
    await axios
      .delete(`http://localhost:4000/category/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
        },
      })
      .then((response) => {
        console.log(response);
      });
  };
};
