import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { UserForm } from "../../components/formUser";
import { FormContainer, ImgContainer, RegisterContainer } from "./style";
import register from "../../assets/register.svg";

export const Register = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login);
  const [user, setUser] = useState();

  return (
    <>
      <RegisterContainer>
        <FormContainer>
          <UserForm />
        </FormContainer>
        <ImgContainer>
          <img src={register} alt="login" />
        </ImgContainer>
      </RegisterContainer>
    </>
  );
};
