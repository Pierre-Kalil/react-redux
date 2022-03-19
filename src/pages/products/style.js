import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f9ffff;
  position: relative;

  h1 {
    margin: 10px 0;
  }

  input {
    width: 50%;
    padding: 10px;
    margin: 15px 0;
  }

  @media (max-width: 500px) {
    input {
      width: 80%;
    }
  }
`;

export const SearchBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: space-around;
`;

export const ProductsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 85%;
  margin: 20px 0;
  padding-bottom: 20px;
  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }
`;
