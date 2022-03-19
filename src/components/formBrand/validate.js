import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
});
