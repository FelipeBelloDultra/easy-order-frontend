import { ComponentProps, forwardRef } from "react";

import S from "./styles.module.css";

type InputProps = ComponentProps<"input"> & {
  hasError?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ hasError = false, ...rest }, ref) => {
    return (
      <input {...rest} data-error={hasError} ref={ref} className={S.Input} />
    );
  }
);
