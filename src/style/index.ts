import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    font-family: Arial;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
    outline: none;

    > body {
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;

      > img {
        max-width: 100%;
      }
    }
  }
`;