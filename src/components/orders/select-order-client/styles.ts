import styled from "styled-components";

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
