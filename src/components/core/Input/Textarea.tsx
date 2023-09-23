import { ComponentProps, forwardRef } from "react";

import { ContainerTextarea } from "./styles";

type TextareaProps = ComponentProps<"textarea"> & {
  hasError?: boolean;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ hasError = false, ...rest }, ref) => {
    return <ContainerTextarea {...rest} hasError={hasError} ref={ref} />;
  }
);
