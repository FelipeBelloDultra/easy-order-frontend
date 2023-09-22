import { ReactNode } from "react";

type ProductCardProps = {
  name: string;
  price: string;
  children: ReactNode;
};

export function ProductRoot({ name, price, children }: ProductCardProps) {
  return (
    <div className="flex flex-col">
      <span>Nome: {name}</span>
      <span>Preco: {price}</span>
      {children}
    </div>
  );
}
