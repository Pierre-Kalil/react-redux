import styled from "styled-components";

export const FormComponentLogin = styled.form`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;

  span {
    text-align: center;
    font-size: 12px;
    color: orange;
  }

  .info {
    color: initial;
  }

  a {
    text-decoration: none;
    color: #4180ab;
  }

  @media (min-width: 1441px) {
    width: 500px;
    height: 500px;

    p {
      font-size: 18px;
    }
    span {
      font-size: 18px;
    }
  }
`;

export const InputComponent = styled.input`
  padding: 10px;
  border-radius: 2px;
  border: 1px solid #4180ab;

  :focus {
    border: 2px solid #4180ab;
  }

  @media (min-width: 1441px) {
    padding: 20px;
    font-size: 18px;
  }
`;
