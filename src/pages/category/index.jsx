import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { CategoryBox, CategoryContainer, SearchBox } from "./style";
import { Header } from "../../components/header";
import { CategoryForm } from "../../components/formCategory";
import {
  allCategoriesThunks,
  updateCategoryThunks,
} from "../../store/category/thunks";
import { CardCategory } from "../../components/cardsCategory";
import { CategoryUdateForm } from "../../components/formCategoryUpdate";
import { Button } from "../../components/button";

export const CategoryPage = () => {
  const dispatch = useDispatch();
  const categorysList = useSelector((state) => state.category);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [modelCreate, setModalCreate] = useState(false);
  const [modelUpdate, setModalUpdate] = useState(false);

  const hadleModalCategory = () => {
    if (modelCreate) {
      setModalCreate(false);
    }
    setModalCreate(true);
  };

  const handleUpdate = () => {
    if (modelUpdate) {
      setModalUpdate(false);
    }
    setModalUpdate(true);
  };

  useEffect(() => {
    dispatch(allCategoriesThunks());

    setFiltered(
      categorysList.filter((item) => {
        const regex = new RegExp(search.toLowerCase(), "g");
        return (
          item.name?.toLowerCase().match(regex) ||
          item.description?.toLowerCase().match(regex)
        );
      })
    );
  }, [search]);
  return (
    <>
      <Header />
      <CategoryContainer>
        <h1>Categorias</h1>
        {modelUpdate ? <CategoryUdateForm setState={setModalUpdate} /> : <></>}
        {modelCreate ? <CategoryForm state={setModalCreate} /> : <></>}
        <Button onClick={hadleModalCategory} name="Adicionar Categoria">
          Adicionar Categoria
        </Button>
        <SearchBox>
          <input
            type="text"
            placeholder="Pesquise por categoria, descrição"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </SearchBox>
        <CategoryBox>
          <ul className="display-list">
            {filtered && filtered.length > 0
              ? filtered.map((category) => (
                  <CardCategory
                    key={category.id}
                    update={handleUpdate}
                    category={category}
                  />
                ))
              : categorysList &&
                categorysList.map((category) => (
                  <CardCategory
                    key={category.id}
                    update={handleUpdate}
                    category={category}
                  />
                ))}
          </ul>
        </CategoryBox>
      </CategoryContainer>
    </>
  );
};
