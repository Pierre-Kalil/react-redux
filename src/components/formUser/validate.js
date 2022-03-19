import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().email("Email inválido").required("Campo obrigatório"),
  password: yup
    .string()
    .min(6, "Senha deve ter no mínimo 6 digitos")
    .required("Campo obrigatório"),
});
