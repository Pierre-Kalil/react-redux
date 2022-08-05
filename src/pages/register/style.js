import styled from "styled-components";

export const RegisterContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  width: 40%;
  height: 100vh;
  background: #f9ffff;

  div {
    text-align: center;
    width: 100%;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const ImgContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    width: 60%;
    height: 100vh;
    /* background: rgba(0, 0, 0, 0.1); */
    img {
      width: 60%;
    }
  }
`;
