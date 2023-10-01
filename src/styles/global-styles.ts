import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.focus};
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.secondary[60]};
    ${({ theme }) => theme.text.base}
    --webkit-font-smoothing: antialiased;
  }

  input, button, textarea {
    font-family: 'Poppins', sans-serif;
  }
`;
