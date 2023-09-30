import styled, { css } from "styled-components";

type ContainerInputProps = {
  $hasError: boolean;
};

export const ContainerGroup = styled.span`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 100%;
`;

export const ContainerLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  padding-left: 4px;
  color: ${({ theme }) => theme.colors.secondary[60]};
  font-weight: 500;
`;

export const ContainerError = styled.span`
  font-weight: 500;
  font-size: 0.75rem;
  padding-left: 4px;
  color: ${({ theme }) => theme.colors.danger[100]};
`;

export const ContainerInput = styled.input<ContainerInputProps>`
  height: 3rem;
  border-radius: 4px;
  padding: 0 1rem;
  font-size: 0.875rem;
  border: 1px solid transparent;

  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${({ $hasError, theme }) =>
    $hasError
      ? css`
          background-color: ${theme.colors.danger[20]};
          border-color: ${theme.colors.danger[100]};
        `
      : css`
          background-color: ${theme.colors.background};
          border-color: ${theme.colors.secondary[20]};
        `}
`;

export const ContainerTextarea = styled.textarea<ContainerInputProps>`
  height: 7rem;
  border-radius: 4px;
  padding: 1rem;
  resize: none;
  font-size: 0.875rem;
  border: 1px solid transparent;

  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${({ $hasError, theme }) =>
    $hasError
      ? css`
          background-color: ${theme.colors.danger[20]};
          border-color: ${theme.colors.danger[100]};
        `
      : css`
          background-color: ${theme.colors.background};
          border-color: ${theme.colors.secondary[20]};
        `}
`;

export const ContainerSelect = styled.select`
  background-color: ${({ theme }) => theme.colors.background};
  height: 3rem;
  border-radius: 4px;
  padding: 0 1rem;
  font-size: 0.875rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary[20]};

  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
