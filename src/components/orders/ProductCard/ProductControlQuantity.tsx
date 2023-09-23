import { Minus, Plus } from "react-feather";

type ProductControlQuantityProps = {
  onDecrease: () => void;
  onIncrease: () => void;
  quantity: number;
};

export function ProductControlQuantity({
  onDecrease,
  onIncrease,
  quantity,
}: ProductControlQuantityProps) {
  return (
    <div className="flex w-24 justify-between items-center h-8">
      <button onClick={onDecrease} className="border rounded bg-red-100">
        <Minus className="text-red-600" />
      </button>

      {quantity}

      <button onClick={onIncrease} className="border rounded bg-indigo-100">
        <Plus className="text-indigo-600" />
      </button>
    </div>
  );
}
