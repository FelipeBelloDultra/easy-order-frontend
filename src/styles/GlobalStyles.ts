import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary[600]};
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: 'Inter', sans-serif;
    line-height: 1;
    background-color: ${({ theme }) => theme.colors.primary[100]};
    --webkit-font-smoothing: antialiased;
  }

  input, button, textarea {
    font-family: 'Inter', sans-serif;
  }
`;
