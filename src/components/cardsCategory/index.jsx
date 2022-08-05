import { useDispatch } from "react-redux";
import { Button } from "../button";
import { CardsContainer } from "./style";
import { filterId } from "../../store/statesModel/thunks";

export const CardCategory = ({ category, update }) => {
  const dispatch = useDispatch();
  const handleUpdate = (id) => {
    dispatch(filterId(id));
    update();
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
