// src/styles/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background-size: cover;
    margin: 0;
    font-family: Arial, sans-serif;
  }

  html, body, #root {
    height: 100%;
  }
`;

export default GlobalStyles;
