import { useDispatch } from "react-redux";
import { Button } from "../button";
import { CardBrandContainer } from "./style";
import { filterId } from "../../store/statesModel/thunks";

export const CardBrand = ({ update, brand }) => {
  const dispatch = useDispatch();
  const handleUpdate = (id) => {
    dispatch(filterId(id))
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
