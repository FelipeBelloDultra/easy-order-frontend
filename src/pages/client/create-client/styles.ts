import styled from "styled-components";

export const ClientHeader = styled.span`
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

export const ClientFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  > span {
    display: flex;
    gap: 2.5rem;

    div:first-child {
      width: 990%;
    }
  }

  > button {
    margin-top: 3rem;
  }
`;
