import { useDispatch, useSelector } from "react-redux";
import { allProductsThunks } from "../../store/product/thunks";
import { useEffect, useState } from "react";
import { FormProduct } from "../../components/formProduct";
import { ProductContainer, ProductsBox, SearchBox } from "./style";
import { Header } from "../../components/header";
import { Cards } from "../../components/cards";
import { CategoryForm } from "../../components/formCategory";
import { BrandForm } from "../../components/formBrand";
import { Button } from "../../components/button";

export const ProductPage = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.product);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [modelProduct, setModalProduct] = useState(false);

  const hadleModalProduct = () => {
    if (modelProduct) {
      setModalProduct(dispatch(false));
    }
    setModalProduct(true);
  };

  useEffect(() => {
    dispatch(allProductsThunks());
    setFiltered(
      productsList.filter((item) => {
        const regex = new RegExp(search.toLowerCase(), "d");
        return (
          item.name?.toLowerCase().match(regex) ||
          item.description?.toLowerCase().match(regex) ||
          item.category.name?.toLowerCase().match(regex) ||
          item.brand.name?.toLowerCase().match(regex)
        );
      })
    );
  }, [search]);

  return (
    <>
      <Header />
      <ProductContainer>
        <h1>Produtos</h1>
        {modelProduct ? <FormProduct stateModal={setModalProduct} /> : <></>}
        <Button onClick={hadleModalProduct} name="Adicionar Produto">
          Adicionar Produto
        </Button>
        <SearchBox>
          <input
            type="text"
            placeholder="Pesquise por produto, descrição, marca ou categoria"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </SearchBox>
        <ProductsBox>
          <ul className="display-list">
            {filtered && filtered.length > 0
              ? filtered.map((product, index) => (
                  <Cards product={product} key={index} />
                ))
              : productsList &&
                productsList.map((product, index) => (
                  <Cards product={product} key={index} />
                ))}
          </ul>
        </ProductsBox>
      </ProductContainer>
    </>
  );
};
