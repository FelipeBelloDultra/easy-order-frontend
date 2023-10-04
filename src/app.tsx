import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./styles/global-styles";
import { theme } from "./styles/theme/default";
import { AuthContextProvider } from "./contexts/auth-context";
import { Router } from "./routes/router";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthContextProvider>
          <ThemeProvider theme={theme}>
            <Router />
            <GlobalStyles />
          </ThemeProvider>
        </AuthContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
