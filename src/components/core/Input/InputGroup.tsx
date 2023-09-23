import { ReactNode } from "react";

type InputGroupProps = {
  children: ReactNode;
};

export function InputGroup({ children }: InputGroupProps) {
  return <span className="flex flex-col gap-1 w-full">{children}</span>;
}
