import Sidebar from "../../components/Sidebar/Sidebar";
import Cards from "../../components/Cards/Cards";
import s from "../CatalogPage/CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <main>
      <div className={`${s.wrapper} container padding-container`}>
        <Sidebar />
        <Cards />
      </div>
    </main>
  );
};

export default CatalogPage;
