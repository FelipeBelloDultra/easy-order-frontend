import { useEffect } from "react";
import { ToastContent } from "~/contexts/toast-context";

import { useToast } from "~/hooks/use-toast";

type ToastProps = {
  toast: ToastContent;
};

export function Toast({ toast }: ToastProps) {
  const { removeToast } = useToast();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      removeToast(toast.id);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [removeToast, toast.id]);

  return (
    <div>
      <div>
        <strong>{toast.title}</strong>
        {toast.description}

        <button onClick={() => removeToast(toast.id)}>X</button>
      </div>
    </div>
  );
}
