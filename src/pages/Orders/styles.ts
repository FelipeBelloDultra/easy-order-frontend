import styled from "styled-components";

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

export const OrderDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const OrderDetailHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75%;
  padding: 0.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    h2 {
      ${({ theme }) => theme.text.lg};
      font-weight: 700;
      color: ${({ theme }) => theme.colors.secondary[80]};
    }

    span {
      ${({ theme }) => theme.text.sm};
    }
  }

  p {
    ${({ theme }) => theme.text.lg};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.info[100]};
  }
`;

export const OrderDetailComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3,
  h4 {
    ${({ theme }) => theme.text.base};
    font-weight: 500;
  }

  .detail-action {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background-color: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      height: 1.875rem;
      width: 1.875rem;
      cursor: pointer;
      border: none;
      color: ${({ theme }) => theme.colors.primary[60]};
    }
  }

  .products-list {
    width: 100%;
  }

  h3 span {
    ${({ theme }) => theme.text.lg};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.info[100]};
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

export const CreateClientOnOrder = styled.div`
  padding-bottom: 1rem;

  h2 {
    ${({ theme }) => theme.text.lg};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondary[80]};
  }

  > div {
    margin-top: 1rem;
  }

  > span {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    label {
      ${({ theme }) => theme.text.xs};
    }
  }

  .create-client-input-groups {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

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
