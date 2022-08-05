import { FormComponentLogin, InputComponent } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validate";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginThunks } from "../../store/login/thunks";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../button";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const onSubmitData = (data) => {
    dispatch(loginThunks(data, navigate));
    reset();
  };
  return (
    <>
      <FormComponentLogin onSubmit={handleSubmit(onSubmitData)}>
        <div>
          <h2>Bem vindo</h2>
          <p>Faça o login para continuar</p>
        </div>
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
        <Button type="submit" name="Entrar">
          Enviar
        </Button>
        <span className="info">
          Ainda não tem uma conta? <Link to="/register">Cadastre-se</Link>
        </span>
      </FormComponentLogin>
    </>
  );
};
