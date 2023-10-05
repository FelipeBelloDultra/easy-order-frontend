import { ComponentProps } from "react";
import { RenderIf } from "..";

import * as S from "./styles";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "success" | "danger";
  size?: "small" | "medium" | "large";
  isFull?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
};

export function Button({
  variant = "primary",
  isFull = false,
  type = "button",
  size = "large",
  disabled = false,
  isLoading = false,
  children,
  ...rest
}: ButtonProps) {
  return (
    <S.Container
      disabled={disabled || isLoading}
      type={type}
      $variant={variant}
      $size={size}
      $isFull={isFull}
      {...rest}
    >
      <RenderIf condition={isLoading}>
        <div className="loader">
          <div className="dots">
            <div className="dot dot-1" />
            <div className="dot dot-2" />
            <div className="dot dot-3" />
          </div>
        </div>
      </RenderIf>

      <RenderIf condition={!isLoading}>{children}</RenderIf>
    </S.Container>
  );
}
