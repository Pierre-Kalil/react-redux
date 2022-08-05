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
import { useSelector } from "react-redux";
import { updateBrandThunks } from "../../store/brand/thunks";

export const BrandUdateForm = ({ setState }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.statesModel);
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
    setState(false);
  };

  const onSubmitData = (data) => {
    dispatch(updateBrandThunks(id, data));

    reset();
    setState(false);
  };
  return (
    <>
      <FormComponentRegister onSubmit={handleSubmit(onSubmitData)}>
        <BoxSvg>
          <AiOutlineCloseSquare onClick={handleCloseModal} />
        </BoxSvg>
        <div>
          <h2>Atualização de Marca</h2>
        </div>
        <BoxInputs>
          <InputComponent
            type="text"
            placeholder="Nome da marca"
            name="name"
            {...register("name")}
            className="brand"
          />
          {errors?.name && <span>{errors.name?.message}</span>}
        </BoxInputs>
        <Button type="submit" name="Atualizar">
          Atualizar
        </Button>
      </FormComponentRegister>
    </>
  );
};
