import styled from "styled-components";

export const SelectProductsOnOrder = styled.div`
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  max-height: 25rem;

  h2 {
    ${({ theme }) => theme.text.lg};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondary[80]};
  }
`;
