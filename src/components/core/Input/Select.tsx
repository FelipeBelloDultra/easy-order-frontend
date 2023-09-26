import { ComponentProps, ReactNode } from "react";

import { ContainerSelect } from "./styles";

type SelectProps = ComponentProps<"select"> & {
  onChangeSelect: (id: string) => void;
  children: ReactNode;
};

export function Select({ onChangeSelect, children, ...rest }: SelectProps) {
  return (
    <ContainerSelect
      onChange={(event) => onChangeSelect(event.target.value)}
      {...rest}
    >
      {children}
    </ContainerSelect>
  );
}
