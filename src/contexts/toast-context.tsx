import { ReactNode, createContext, useCallback, useState } from "react";
import { Toasts } from "~/components/core";

export interface ToastContent {
  id: string;
  type?: "error" | "success";
  description?: string;
  title: string;
}

interface ToastContextProps {
  toasts: Array<ToastContent>;
  addToast: (data: Omit<ToastContent, "id">) => void;
  removeToast: (id: string) => void;
}

type ToastContextProviderProps = {
  children: ReactNode;
};

export const ToastContext = createContext({} as ToastContextProps);

export function ToastContextProvider({ children }: ToastContextProviderProps) {
  const [toasts, setToasts] = useState<Array<ToastContent>>([]);

  const addToast = useCallback(
    ({ type = "success", description, title }: Omit<ToastContent, "id">) => {
      setToasts((prevState) => [
        ...prevState,
        {
          id: `${Math.random().toString(36).substring(2)}-${+Date.now()}`,
          type,
          title,
          description,
        },
      ]);
    },
    []
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prevState) => prevState.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider
      value={{
        toasts,
        addToast,
        removeToast,
      }}
    >
      {children}
      <Toasts toasts={toasts} />
    </ToastContext.Provider>
  );
}
