import styled from "styled-components";

export const SkeletonContainer = styled.div`
  @keyframes skeleton-loading {
    0% {
      background-color: ${({ theme }) => theme.colors.background};
    }
    100% {
      background-color: ${({ theme }) => theme.colors.secondary[20]};
    }
  }

  border-radius: 4px;
  overflow: hidden;
  height: auto;

  &,
  span {
    width: 100%;
  }

  span {
    display: block;
    height: 1rem;
    animation: skeleton-loading 1s linear infinite alternate;
  }
`;
