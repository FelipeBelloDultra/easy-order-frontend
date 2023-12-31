import { ReactNode } from "react";

type RenderIfProps = {
  condition: boolean;
  children: ReactNode;
};

export function RenderIf({ condition, children }: RenderIfProps) {
  if (condition) return children;
}
