import { ReactNode } from "react";

type ProductCardProps = {
  name: string;
  price: string;
  children: ReactNode;
};

export function ProductRoot({ name, price, children }: ProductCardProps) {
  return (
    <div className="flex flex-col bg-gray-50 p-4 rounded-[4px] h-24 justify-between">
      <span>
        {name} - {price}
      </span>

      {children}
    </div>
  );
}
