import { ComponentProps } from "react";

import * as S from "./styles";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "success" | "danger";
  size?: "small" | "medium" | "large";
  isFull?: boolean;
  disabled?: boolean;
};

export function Button({
  variant = "primary",
  isFull = false,
  type = "button",
  size = "large",
  disabled = false,
  children,
  ...rest
}: ButtonProps) {
  return (
    <S.Container
      disabled={disabled}
      type={type}
      $variant={variant}
      $size={size}
      $isFull={isFull}
      {...rest}
    >
      {children}
    </S.Container>
  );
}
