type ProductAddButtonProps = {
  onAdd: () => void;
};

export function ProductAddButton({ onAdd }: ProductAddButtonProps) {
  return <button onClick={onAdd}>ADICIONAR PRODUTO</button>;
}
