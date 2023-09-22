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
    <>
      <button onClick={onIncrease}>Mais</button>

      {quantity}

      <button onClick={onDecrease}>Menos</button>
    </>
  );
}
