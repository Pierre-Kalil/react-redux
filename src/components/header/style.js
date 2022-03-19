import styled from "styled-components";

export const HeaderComponent = styled.div`
  background: #4fa4e0;
  padding: 15px;

  ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  ul li button {
    min-width: 80px;
    width: 100%;
    font-weight: normal;
  }

  ul li button:hover {
    font-weight: normal;
  }
`;
