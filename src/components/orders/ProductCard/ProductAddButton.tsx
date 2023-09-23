import { PlusCircle } from "react-feather";

type ProductAddButtonProps = {
  onAdd: () => void;
};

export function ProductAddButton({ onAdd }: ProductAddButtonProps) {
  return (
    <div className="flex justify-start justify-self-end">
      <button
        onClick={onAdd}
        className="flex items-center gap-2 text-indigo-600"
      >
        Adicionar produto <PlusCircle className="text-indigo-600" />
      </button>
    </div>
  );
}
