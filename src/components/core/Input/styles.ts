import styled from "styled-components";

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
  color: ${({ theme }) => theme.colors.gray[500]};
  font-weight: 500;
`;

export const ContainerError = styled.span`
  font-weight: 500;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.danger[700]};
`;

export const ContainerInput = styled.input<ContainerInputProps>`
  height: 2.5rem;
  border-radius: 4px;
  padding: 0 1rem;
  font-size: 0.875rem;
  border: 1px solid
    ${({ $hasError, theme }) =>
      $hasError ? theme.colors.danger[600] : theme.colors.primary[200]};
  background-color: ${({ $hasError, theme }) =>
    $hasError ? theme.colors.danger[100] : theme.colors.gray[100]};
`;

export const ContainerTextarea = styled.textarea<ContainerInputProps>`
  height: 7rem;
  border-radius: 4px;
  padding: 1rem;
  resize: none;
  font-size: 0.875rem;
  border: 1px solid
    ${({ $hasError, theme }) =>
      $hasError ? theme.colors.danger[600] : theme.colors.primary[200]};
  background-color: ${({ $hasError, theme }) =>
    $hasError ? theme.colors.danger[100] : theme.colors.gray[100]};
`;
