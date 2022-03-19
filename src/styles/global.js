import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
  }

  body{
    background: #bfcff7;
  }

  li{
    list-style: none;
  }

  button{
    cursor: pointer;
  }
  `;
