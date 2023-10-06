import styled from "styled-components";

export const SelectProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    ${({ theme }) => theme.text.lg};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondary[80]};
  }
`;

export const SelectProductsOnOrder = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height: 25rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.secondary[20]};
`;
