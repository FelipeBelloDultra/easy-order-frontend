import styled from "styled-components";

type ProductViewProps = {
  name: string;
  description: string;
  price: number;
};

const S = {
  ProductViewContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.secondary[20]};
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }

    > span {
      padding: 0.5rem;
      background-color: ${({ theme }) => theme.colors.background};
      border-radius: 4px;
      border: 1px solid ${({ theme }) => theme.colors.secondary[20]};

      img {
        object-fit: contain;
        width: 100%;
        height: auto;
        border-radius: 4px;
      }
    }

    section {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 1rem;

      * {
        word-break: break-all;
        ${({ theme }) => theme.text.xs};
      }

      h3 {
        font-weight: 500;
        color: ${({ theme }) => theme.colors.secondary[70]};
      }

      span {
        font-weight: 700;
        color: ${({ theme }) => theme.colors.info[100]};
      }
    }

    div {
      word-break: break-all;
      flex: 1;
    }
  `,
};

export function ProductView({ name, description, price }: ProductViewProps) {
  return (
    <S.ProductViewContainer>
      <span>
        <img
          src="https://i0.wp.com/mineral8.com.br/wp-content/uploads/2023/04/placeholder-5.png"
          alt="Image placeholder"
        />
      </span>

      <section>
        <h3>{name}</h3>

        <span>{price}</span>
      </section>

      <div>
        <p>{description}</p>
      </div>
    </S.ProductViewContainer>
  );
}
