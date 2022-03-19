import { useNavigate } from "react-router-dom";
import { Button } from "../button";
import { HeaderComponent } from "./style";

export const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <HeaderComponent>
        <ul>
          <li>
            <Button name="Produtos" callback={() => navigate("/products")}>
              Produtos
            </Button>
          </li>
          <li>
            <Button name="Categorias" callback={() => navigate("/category")}>
              Categorias
            </Button>
          </li>
          <li>
            <Button name="Marcas" callback={() => navigate("/brand")}>
              Marcas
            </Button>
          </li>
          <li>
            <Button name="Sair" callback={handleLogout}>
              Sair
            </Button>
          </li>
        </ul>
      </HeaderComponent>
    </>
  );
};
