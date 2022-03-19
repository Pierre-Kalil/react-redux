import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  description: yup.string().required("Campo obrigatório"),
  price: yup.number().min(0).required("Campo obrigatório"),
  inventory: yup.number().required("Campo obrigatório"),
  category: yup.string().required("Campo obrigatório"),
  brand: yup.string().required("Campo obrigatório"),
  teste: yup.string().required("Campo obrigatório"),
});
