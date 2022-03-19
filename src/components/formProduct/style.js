import styled from "styled-components";

export const FormComponentProduct = styled.form`
  width: 340px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  background: #4f9ce0;

  position: absolute;
  top: 20px;

  button {
    width: 100%;
  }

  svg {
    z-index: 3;
  }
`;

export const BoxSvg = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: -10px;
  color: #fff;
`;

export const InputComponent = styled.input`
  padding: 10px;
  border-radius: 2px;
  border: 1px solid #4180ab;
  margin: 5px 0;

  :focus {
    border: 2px solid #4180ab;
  }
`;
