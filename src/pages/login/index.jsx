import { LoginForm } from "../../components/formLogin";
import { FormContainer, ImgContainer, LoginContainer } from "./style";
import login2 from "../../components/assets/login2.svg";

export const Login = () => {
  return (
    <>
      <LoginContainer>
        <ImgContainer>
          <img src={login2} alt="login" />
        </ImgContainer>
        <FormContainer>
          <LoginForm />
        </FormContainer>
      </LoginContainer>
    </>
  );
};
