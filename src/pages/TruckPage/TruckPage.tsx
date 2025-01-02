import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectLoading, selectTruck } from "../../store/trucks/selectors";
import { fetchTruck } from "../../store/trucks/operations";
import Page from "../../components/Page/Page";
import TruckHead from "../../components/TruckHead/TruckHead";
import TruckImages from "../../components/TruckImages/TruckImages";
import TruckFooter from "../../components/TruckFooter/TruckFooter";
import { SmallText } from "../../styles/Text.styles";
import Loader from "../../components/Loader/Loader";
import { AppDispatch } from "../../store/store";

const TruckPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const selectedTruck = useSelector(selectTruck);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    if (id) dispatch(fetchTruck(id));
  }, [dispatch, id]);

  return (
    <Page $customStyles={{ padding: "48px 0px 80px" }}>
      <div className="container">
        {isLoading && <Loader />}
        {selectedTruck && !isLoading && (
          <>
            <TruckHead truck={selectedTruck} />
            <TruckImages truck={selectedTruck} />
            <SmallText
              $customStyles={{
                marginBottom: "60px",
                color: "var(--dark-gray)",
              }}
            >
              {selectedTruck.description}
            </SmallText>
            <TruckFooter truck={selectedTruck}/>
          </>
        )}
      </div>
    </Page>
  );
};

export default TruckPage;
