import styled from "styled-components";

export const ProductHeader = styled.span`
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

export const CreateProductContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  gap: 2rem;

  > div {
    flex: 1;
  }
`;

export const ProductFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 70%;

  > div {
    display: flex;
    gap: 2.5rem;
    width: 100%;
    margin-bottom: 1.5rem;

    > span {
      &:first-child {
        width: 80%;
      }
    }
  }

  > button {
    margin-top: 3rem;
  }
`;
