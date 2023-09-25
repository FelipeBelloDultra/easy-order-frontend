type ProductDeleteButtonProps = {
  onDelete: () => void;
};

export function ProductDeleteButton({ onDelete }: ProductDeleteButtonProps) {
  return (
    <button onClick={onDelete} className="flex items-center gap-2 text-red-600">
      Remover produto (- CIRCLE)
    </button>
  );
}
