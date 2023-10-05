import { useEffect } from "react";
import { CheckFat, Warning, XCircle } from "@phosphor-icons/react";
import { ToastContent } from "~/contexts/toast-context";

import { useToast } from "~/hooks/use-toast";

import * as S from "./styles";

import { RenderIf } from "..";

type ToastProps = {
  toast: ToastContent;
};

const icons = {
  success: <CheckFat size={26} weight="duotone" />,
  error: <Warning size={26} weight="duotone" />,
};

export function Toast({ toast }: ToastProps) {
  const { removeToast } = useToast();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      removeToast(toast.id);
    }, toast.timeToClose);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [removeToast, toast.id, toast.timeToClose]);

  return (
    <S.ToastContent $type={toast.type || "success"}>
      {icons[toast.type || "success"]}

      <div>
        <strong>{toast.title}</strong>

        <RenderIf condition={!!toast.description}>
          <p>{toast.description}</p>
        </RenderIf>
      </div>

      <button onClick={() => removeToast(toast.id)}>
        <XCircle size={26} />
      </button>
    </S.ToastContent>
  );
}
