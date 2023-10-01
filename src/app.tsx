import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./styles/global-styles";
import { theme } from "./styles/theme/default";
import { AuthContextProvider } from "./contexts/auth-context";
import { Router } from "./routes/router";

export function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ThemeProvider theme={theme}>
          <Router />
          <GlobalStyles />
        </ThemeProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}
