import { ComponentProps, forwardRef } from "react";

import { ContainerInput } from "./styles";

type InputProps = ComponentProps<"input"> & {
  hasError?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ hasError = false, ...rest }, ref) => {
    return <ContainerInput {...rest} $hasError={hasError} ref={ref} />;
  }
);
