import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading, selectTruck } from "../../redux/trucks/selectors";
import { useParams } from "react-router-dom";
import { fetchTruck } from "../../redux/trucks/operations";
import Loader from "../../components/Loader/Loader";
import TruckHead from "../../components/TruckHead/TruckHead";
import TruckImages from "../../components/TruckImages/TruckImages";
import SmallText from "../../components/SmallText";
import TruckFooter from "../../components/TruckFooter/TruckFooter";

const TruckPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedTruck = useSelector(selectTruck);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchTruck(id));
  }, [dispatch, id]);
  return (
    <main>
      <div className="container padding-container">
        {isLoading && <Loader />}

        {selectedTruck && (
          <>
            <TruckHead truck={selectedTruck} />
            <TruckImages truck={selectedTruck} />
            <SmallText
              color="var(--dark-gray)"
              $customStyles={{ marginBottom: "60px" }}
            >
              {selectedTruck.description}
            </SmallText>
            <TruckFooter truck={selectedTruck} />
          </>
        )}
      </div>
    </main>
  );
};
export default TruckPage;
