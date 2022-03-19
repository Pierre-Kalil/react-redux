import {
  BoxInputs,
  BoxSvg,
  FormComponentRegister,
  InputComponent,
} from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validate";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Button } from "../button";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { createCategoryThunks } from "../../store/category/thunks";

export const CategoryForm = ({ state }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleCloseModal = () => {
    state(false);
  };

  const onSubmitData = (data) => {
    dispatch(createCategoryThunks(data));
    reset();
    state(false);
  };
  return (
    <>
      <FormComponentRegister onSubmit={handleSubmit(onSubmitData)}>
        <BoxSvg>
          <AiOutlineCloseSquare onClick={handleCloseModal} />
        </BoxSvg>
        <div>
          <h2>Cadastro de Categoria</h2>
        </div>
        <BoxInputs>
          <InputComponent
            type="text"
            placeholder="Nome da categoria"
            name="name"
            {...register("name")}
            className="category"
          />
          {errors?.name && <span>{errors.name?.message}</span>}
          <InputComponent
            type="text"
            placeholder="Descrição"
            name="description"
            {...register("description")}
            className="category"
          />
          {errors?.description && <span>{errors.description?.message}</span>}
        </BoxInputs>

        <Button type="submit" name="Cadastrar">
          Cadastrar
        </Button>
      </FormComponentRegister>
    </>
  );
};
