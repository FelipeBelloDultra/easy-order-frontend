import { ToastContent } from "~/contexts/toast-context";

import { ToastContainer } from "./styles";
import { Toast } from "./toast";

type ToastsProps = {
  toasts: Array<ToastContent>;
};

export function Toasts({ toasts }: ToastsProps) {
  return (
    <ToastContainer>
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </ToastContainer>
  );
}
