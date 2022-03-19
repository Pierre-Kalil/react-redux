import api from "../../services/api";
import {
  createCategory,
  deleteCategory,
  listCategory,
  updateCategory,
} from "./actions";

export const allCategoriesThunks = () => {
  return (dispatch) => {
    api.get("/category").then((response) => {
      console.log(response);
      dispatch(listCategory(response.data));
    });
  };
};

export const createCategoryThunks = (data) => {
  return async (dispatch) => {
    await api
      .post("/category", data, {
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
    await api
      .patch(`/category/${id}`, data, {
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
    await api
      .delete(`/category/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
        },
      })
      .then((response) => {
        console.log(response);
      });
  };
};
