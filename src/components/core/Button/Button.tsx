import { ComponentProps } from "react";

import S from "./style.module.css";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary";
  status?: "success" | "disabled";
  disabled?: boolean;
};

function Button({
  variant = "primary",
  status = "success",
  type = "button",
  disabled = false,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      data-disabled={disabled}
      data-status={status}
      data-variant={variant}
      type={type}
      {...rest}
      className={S.button}
    >
      {children}
    </button>
  );
}

export default Button;
