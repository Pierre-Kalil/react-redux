import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { UserForm } from "../../components/formUser";
import { FormContainer, ImgContainer, RegisterContainer } from "./style";
import jwt_decode from "jwt-decode";
import register from "../../components/assets/register.svg";

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
