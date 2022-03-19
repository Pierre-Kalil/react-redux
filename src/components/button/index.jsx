import { ButtonStyle } from "./style";

export const Button = ({ callback, name }) => {
  return (
    <>
      <ButtonStyle onClick={callback}>{name}</ButtonStyle>
    </>
  );
};
