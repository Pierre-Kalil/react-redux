import styled from "styled-components";

export const FormComponentBrand = styled.form`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  background: #4f9ce0;
  text-align: center;

  position: absolute;
  top: 20px;

  span {
    text-align: center;
    font-size: 12px;
  }
`;

export const BoxSvg = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: -20px;
  color: #fff;
`;

export const BoxInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 120px;
  .category {
    width: 100%;
  }
`;

export const InputComponent = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 2px;
  border: 1px solid #4180ab;

  :focus {
    border: 2px solid #4180ab;
  }
`;
