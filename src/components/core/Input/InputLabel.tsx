import { ComponentProps, ReactNode } from "react";

import { ContainerLabel } from "./styles";

type InputLabelProps = ComponentProps<"label"> & {
  htmlFor: string;
  children: ReactNode;
};

export function InputLabel({ htmlFor, children, ...rest }: InputLabelProps) {
  return (
    <ContainerLabel {...rest} htmlFor={htmlFor}>
      {children}
    </ContainerLabel>
  );
}
