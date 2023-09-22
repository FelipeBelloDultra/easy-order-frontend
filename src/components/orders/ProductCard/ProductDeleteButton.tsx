type ProductDeleteButtonProps = {
  onDelete: () => void;
};

export function ProductDeleteButton({ onDelete }: ProductDeleteButtonProps) {
  return <button onClick={onDelete}>REMOVER PRODUTO</button>;
}
