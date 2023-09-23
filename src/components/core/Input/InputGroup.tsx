import { ReactNode } from "react";

import { ContainerGroup } from "./styles";

type InputGroupProps = {
  children: ReactNode;
};

export function InputGroup({ children }: InputGroupProps) {
  return <ContainerGroup>{children}</ContainerGroup>;
}
