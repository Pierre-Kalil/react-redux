import styled from "styled-components";

export const ButtonStyle = styled.button`
  padding: 10px;
  margin: 5px 0;

  border: none;
  border-radius: 2px;

  font-size: 16px;
  font-weight: bold;
  background: #bfcff7;
  box-shadow: 1px 5px 6px rgba(0, 0, 0, 0.2);

  :hover {
    background: #ffffff;
    font-weight: bold;
    transition: 0.2s all ease;
  }
  :active {
    background: #bfcff7;
    transition: 0.1s;
  }

  @media (min-width: 1441px) {
    padding: 20px;
    font-size: 24px;
  }
`;
