import { CardsContainer } from "./style";

export const Cards = ({ product }) => {
  return (
    <>
      <CardsContainer>
        <h2> {product.name}</h2>
        <span> {product.description}</span>
        <span> {product.brand.name}</span>
        <span> {product.category.name}</span>
        <span> R$ {product.price}</span>
        <span>Disponivel {product.inventory}</span>
      </CardsContainer>
    </>
  );
};
