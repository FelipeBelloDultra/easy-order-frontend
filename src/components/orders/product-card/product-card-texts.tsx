import { ProductCardTextsContainer } from "./styles";

type ProductCardTextsProps = {
  name: string;
  price: string;
  description: string;
};

export function ProductCardTexts({
  name,
  price,
  description,
}: ProductCardTextsProps) {
  return (
    <ProductCardTextsContainer>
      <h3>{name}</h3>

      <span>{price}</span>

      <p>{description}</p>
    </ProductCardTextsContainer>
  );
}
