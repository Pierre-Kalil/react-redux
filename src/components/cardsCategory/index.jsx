import { useDispatch } from "react-redux";
import { Button } from "../button";
import { CardsContainer } from "./style";
import { filterId } from "../../store/statesModel/thunks";

export const CardCategory = ({ category, update, brand }) => {
  const dispatch = useDispatch();
  const handleUpdate = (id) => {
    update();
    dispatch(filterId(id));
  };
  return (
    <>
      <CardsContainer>
        <h2> {category.name}</h2>
        <span> {category.description}</span>
        <Button
          callback={() => handleUpdate(category.id)}
          name="Editar"
        ></Button>
      </CardsContainer>
    </>
  );
};
