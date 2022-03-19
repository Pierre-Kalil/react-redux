import styled from "styled-components";

export const FormUser = styled.form`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;

  span {
    text-align: center;
    font-size: 12px;
  }
`;

export const InputComponent = styled.input`
  padding: 10px;
  border-radius: 2px;
  border: 1px solid #4180ab;

  :focus {
    border: 2px solid #4180ab;
  }
`;
