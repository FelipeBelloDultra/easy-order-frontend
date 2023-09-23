import { ComponentProps, forwardRef } from "react";

import S from "./styles.module.css";

type TextareaProps = ComponentProps<"textarea"> & {
  hasError?: boolean;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ hasError = false, ...rest }, ref) => {
    return (
      <textarea
        {...rest}
        data-error={hasError}
        ref={ref}
        className={S.Textarea}
      />
    );
  }
);
