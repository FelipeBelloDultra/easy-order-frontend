import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";

import { Http } from "~/infra/http-client";

import {
  authenticateUserService,
  showAuthenticatedUserService,
} from "~/services/auth/";

import { sessionStorePrefix } from "~/config/env";
import { useNavigate } from "react-router-dom";

interface AuthenticatedUserData {
  id: string;
  name: string;
  email: string;
}

interface AuthenticateUserData {
  email: string;
  password: string;
}

interface AuthContextProps {
  authenticatedAccessToken: string;
  authenticatedUser: AuthenticatedUserData;
  authenticateUser: (data: AuthenticateUserData) => Promise<void>;
  showAuthenticatedUser: () => Promise<void>;
  logout: () => void;
}

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [authenticatedUser, setAuthenticatedUser] = useState(
    {} as AuthenticatedUserData
  );
  const [authenticatedAccessToken, setAuthenticatedAccessToken] = useState(
    () => {
      const token = localStorage.getItem(`${sessionStorePrefix}:access-token`);

      if (token) {
        Http.setHeader("x-access-token", token);

        return token;
      }

      return "";
    }
  );

  const navigate = useNavigate();

  const authenticateUser = useCallback(
    async ({ email, password }: AuthenticateUserData) => {
      const { token } = await authenticateUserService({ email, password });

      Http.setHeader("x-access-token", token);
      setAuthenticatedAccessToken(token);
      localStorage.setItem(`${sessionStorePrefix}:access-token`, token);
    },
    []
  );

  const logout = useCallback(() => {
    localStorage.removeItem(`${sessionStorePrefix}:access-token`);
    setAuthenticatedAccessToken("");
  }, []);

  const showAuthenticatedUser = useCallback(async () => {
    const result = await showAuthenticatedUserService();

    setAuthenticatedUser(result);
  }, []);

  useEffect(() => {
    addEventListener("unauthorized", () => {
      logout();
      navigate("/");
    });

    return () => {
      removeEventListener("unauthorized", () => {
        logout();
        navigate("/");
      });
    };
  }, [logout, navigate]);

  return (
    <AuthContext.Provider
      value={{
        authenticatedAccessToken,
        authenticatedUser,
        showAuthenticatedUser,
        authenticateUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
