type InputErrorProps = {
  massage: string;
};

export function InputError({ massage }: InputErrorProps) {
  return <span className="font-medium text-xs text-red-800">{massage}</span>;
}
