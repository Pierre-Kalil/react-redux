import { useDispatch } from "react-redux";
import { createUserThunks } from "../../store/user/thunks";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validate";
import { useForm } from "react-hook-form";
import { FormUser, InputComponent } from "./style";
import { Button } from "../button";
import { Link } from "react-router-dom";

export const UserForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitData = (data) => {
    dispatch(createUserThunks(data));
    reset();
  };
  return (
    <>
      <FormUser onSubmit={handleSubmit(onSubmitData)}>
        <div>
          <h2>Faça seu cadastro</h2>
        </div>
        <InputComponent
          type="text"
          placeholder="Nome"
          name="name"
          {...register("name")}
        />
        {errors?.name && <span>{errors.name?.message}</span>}
        <InputComponent
          type="text"
          placeholder="Email"
          name="email"
          {...register("email")}
        />
        {errors?.email && <span>{errors.email?.message}</span>}
        <InputComponent
          type="text"
          placeholder="Senha"
          name="password"
          {...register("password")}
        />
        {errors?.password && <span>{errors.password?.message}</span>}
        <Button type="submit" name="Enviar">
          Enviar
        </Button>
        <span>
          Já possui uma conta? <Link to="/">Cadastre-se</Link>
        </span>
      </FormUser>
    </>
  );
};
