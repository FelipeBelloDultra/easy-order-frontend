import { ReactNode } from "react";

import { ContainerSelect } from "./styles";

type SelectProps = {
  onSelect: (id: string) => void;
  children: ReactNode;
};

export function Select({ onSelect, children }: SelectProps) {
  return (
    <ContainerSelect onChange={(event) => onSelect(event.target.value)}>
      {children}
    </ContainerSelect>
  );
}
