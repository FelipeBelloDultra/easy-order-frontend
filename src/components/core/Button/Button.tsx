import { ComponentProps } from "react";

import S from "./style.module.css";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
};

function Button({
  variant = "primary",
  type = "button",
  size = "large",
  disabled = false,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      data-variant={variant}
      data-size={size}
      data-disabled={disabled}
      type={type}
      {...rest}
      className={S.button}
    >
      {children}
    </button>
  );
}

export default Button;
