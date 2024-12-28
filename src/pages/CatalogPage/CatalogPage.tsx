import Page from "../../components/Page/Page";
import { Wrapper } from "./CatalogPage.styles";
import Sidebar from "../../components/Sidebar/Sidebar";
import Trucks from "../../components/Trucks/Trucks";

const CatalogPage = () => {
  return (
    <Page $customStyles={{padding: '48px 0px 64px'}}>
      <div className="container">
        <Wrapper>
         <Sidebar/>
         <Trucks/>
        </Wrapper>
      </div>
    </Page>
  );
};

export default CatalogPage;
