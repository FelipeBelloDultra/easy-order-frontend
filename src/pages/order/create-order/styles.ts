import styled from "styled-components";

export const CreaetOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const OrderHeader = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;

  h1 {
    color: ${({ theme }) => theme.colors.secondary[100]};
    font-weight: 700;
    ${({ theme }) => theme.text["4xl"]};
  }
`;

export const CreateOrderContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  > div {
    flex: 1;
  }
`;
