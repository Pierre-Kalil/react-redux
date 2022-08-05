import { BoxSvg, FormComponentProduct, InputComponent } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validate";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createProductsThunks } from "../../store/product/thunks";
import { Button } from "../button";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useEffect } from "react";
import { allCategoriesThunks } from "../../store/category/thunks";
import { useState } from "react";

export const FormProduct = ({ stateModal }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category);
  const [categoryId, setCategoryId] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    dispatch(allCategoriesThunks());
  }, []);

  const onSubmitData = (data) => {
    console.log(data);
    // dispatch(createProductsThunks(data));
    // reset();
  };

  const handleCloseModal = () => {
    stateModal(false);
  };

  return (
    <>
      <>
        <FormComponentProduct onSubmit={handleSubmit(onSubmitData)}>
          <BoxSvg>
            <AiOutlineCloseSquare onClick={handleCloseModal} />
          </BoxSvg>
          <InputComponent
            type="text"
            placeholder="name"
            name="name"
            {...register("name")}
          />
          <InputComponent
            type="text"
            placeholder="description"
            name="description"
            {...register("description")}
          />
          <InputComponent
            type="text"
            placeholder="price"
            name="price"
            {...register("price")}
          />
          <InputComponent
            type="text"
            placeholder="inventory"
            name="inventory"
            {...register("inventory")}
          />

          <InputComponent
            type="text"
            placeholder="category"
            name="category"
            {...register("category")}
          />
          <InputComponent
            type="text"
            placeholder="brand"
            name="brand"
            {...register("brand")}
          />
          <Button type="submit" name="Enviar">
            Enviar
          </Button>
        </FormComponentProduct>
      </>
    </>
  );
};
