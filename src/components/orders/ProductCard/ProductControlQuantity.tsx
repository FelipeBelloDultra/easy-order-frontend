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
        -
      </button>

      {quantity}

      <button onClick={onIncrease} className="border rounded bg-indigo-100">
        +
      </button>
    </div>
  );
}
