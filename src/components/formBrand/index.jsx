import { BoxInputs, BoxSvg, FormComponentBrand, InputComponent } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validate";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Button } from "../button";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { createBrandThunks } from "../../store/brand/thunks";

export const BrandForm = ({ stateModal }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
    },
  });

  const handleCloseModal = () => {
    stateModal(false);
  };

  const onSubmitData = (data) => {
    dispatch(createBrandThunks(data));
    reset();
    stateModal(false);
  };
  return (
    <>
      <FormComponentBrand onSubmit={handleSubmit(onSubmitData)}>
        <BoxSvg>
          <AiOutlineCloseSquare onClick={handleCloseModal} />
        </BoxSvg>
        <div>
          <h2>Cadastro de Marca</h2>
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
        </BoxInputs>

        <Button type="submit" name="Cadastrar">
          Cadastrar
        </Button>
      </FormComponentBrand>
    </>
  );
};
