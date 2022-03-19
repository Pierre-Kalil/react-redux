import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/login";
import { ProductPage } from "../pages/products";
import { CategoryPage } from "../pages/category";
import { Register } from "../pages/register";
import { Private } from "./auth";
import { BrandPage } from "../pages/brand";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/products"
        element={
          <Private component={<ProductPage />}>
            <ProductPage />
          </Private>
        }
      />
      <Route
        path="/category"
        element={
          <Private component={<CategoryPage />}>
            <ProductPage />
          </Private>
        }
      />
      <Route
        path="/brand"
        element={
          <Private component={<BrandPage />}>
            <ProductPage />
          </Private>
        }
      />
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
}
