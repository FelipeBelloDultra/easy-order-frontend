import styled from "styled-components";

export const EmptyPdfDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h1 {
    ${({ theme }) => theme.text["3xl"]}
  }
`;
