import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 1rem;

  h1 {
    ${({ theme }) => theme.text["2xl"]};
    margin-bottom: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    button {
      margin-top: 2rem;
    }
  }
`;
