import { useState } from "react";
import { Navigate } from "react-router-dom";

export const Private = ({ component }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  if (!!token == false) {
    return <Navigate to="/" />;
  }
  return component;
};
