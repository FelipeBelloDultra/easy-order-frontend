import { ComponentProps, ReactNode } from "react";

type InputLabelProps = ComponentProps<"label"> & {
  htmlFor: string;
  children: ReactNode;
};

export function InputLabel({ htmlFor, children, ...rest }: InputLabelProps) {
  return (
    <label
      {...rest}
      htmlFor={htmlFor}
      className="flex items-center text-sm text-gray-800 font-medium"
    >
      {children}
    </label>
  );
}
