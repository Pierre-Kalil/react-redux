import { useDispatch } from "react-redux";
import { Button } from "../button";
import { CardBrandContainer } from "./style";

export const CardBrand = ({ update, brand }) => {
  const dispatch = useDispatch();
  const handleUpdate = (id) => {
    update();
  };
  return (
    <>
      <CardBrandContainer>
        <h2> {brand.name}</h2>
        <Button
          callback={() => handleUpdate(brand.id)}
          name="Editar"
        ></Button>
      </CardBrandContainer>
    </>
  );
};
