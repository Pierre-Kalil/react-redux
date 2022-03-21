import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { BrandContainer, BrandsBox, SearchBox } from "./style";
import { Header } from "../../components/header";
import { allBrandsThunks } from "../../store/brand/thunks";
import { CardBrand } from "../../components/cardsBrand";
import { Button } from "../../components/button";
import { BrandUdateForm } from "../../components/formBrandUpdate";
import { BrandForm } from "../../components/formBrand";

export const BrandPage = () => {
  const dispatch = useDispatch();
  const brandsList = useSelector((state) => state.brand);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [modelCreate, setModalCreate] = useState(false);
  const [modelUpdate, setModalUpdate] = useState(false);

  const hadleModal = () => {
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
    dispatch(allBrandsThunks());

    setFiltered(
      brandsList.filter((item) => {
        const regex = new RegExp(search.toLowerCase(), "g");
        return item.name?.toLowerCase().match(regex);
      })
    );
  }, [search]);
  return (
    <>
      <Header />
      <BrandContainer>
        <h1>Marcas</h1>
        {modelUpdate ? <BrandUdateForm setState={setModalUpdate} /> : <></>}
        {modelCreate ? <BrandForm state={setModalCreate} /> : <></>}
        <Button onClick={hadleModal} name="Adicionar Marca">
          Adicionar Marca
        </Button>
        <SearchBox>
          <input
            type="text"
            placeholder="Pesquise por marca"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </SearchBox>
        <BrandsBox>
          <ul className="display-list">
            {filtered && filtered.length > 0
              ? filtered.map((brand, index) => (
                  <CardBrand update={handleUpdate} brand={brand} />
                ))
              : brandsList &&
                brandsList.map((brand) => (
                  <CardBrand update={handleUpdate} brand={brand} />
                ))}
          </ul>
        </BrandsBox>
      </BrandContainer>
    </>
  );
};
