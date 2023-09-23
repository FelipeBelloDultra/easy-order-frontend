import { ComponentProps } from "react";

import * as S from "./styles";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "success" | "danger";
  size?: "small" | "medium" | "large";
  full?: boolean;
  disabled?: boolean;
};

function Button({
  variant = "primary",
  type = "button",
  size = "large",
  full = false,
  disabled = false,
  children,
  ...rest
}: ButtonProps) {
  return (
    <S.Container
      variant={variant}
      size={size}
      disabled={disabled}
      full={+full}
      type={type}
      {...rest}
    >
      {children}
    </S.Container>
  );
}

export default Button;
