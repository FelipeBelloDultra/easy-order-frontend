import styled from "styled-components";

const S = {
  HeaderContainer: styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary[10]};
    padding: 0 2rem;
    display: flex;
    align-items: center;
    height: 6.25rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary[20]};
    z-index: 10;

    h1 {
      ${({ theme }) => theme.text["4xl"]}
    }
  `,
};

export function Header() {
  return (
    <S.HeaderContainer>
      <h1>Header</h1>
    </S.HeaderContainer>
  );
}
