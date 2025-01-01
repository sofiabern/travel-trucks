import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrucks } from "../../store/trucks/operations";
import {
  selectTrucks,
  selectLoading,
  selectHasMore,
  selectCurrentPage,
  selectFetchError,
} from "../../store/trucks/selectors";
import { selectFilters } from "../../store/filters/selectors";
import { Section, List } from "./Trucks.styles";
import TruckCard from "../TruckCard/TruckCard";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import { ErrorText } from "../../styles/Text.styles";
import { scrollTo } from "../../utils/scrollTo";
import { AppDispatch } from "../../store/store";

const Trucks = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isInitialLoad = useRef(true);

  const trucks = useSelector(selectTrucks);
  const loading = useSelector(selectLoading);
  const hasMore = useSelector(selectHasMore);
  const page = useSelector(selectCurrentPage);
  const filters = useSelector(selectFilters);
  const error = useSelector(selectFetchError);

  useEffect(() => {
    if (isInitialLoad.current && page === 1) {
      dispatch(fetchTrucks({ page, filters: {} }));
      isInitialLoad.current = false;
    }
  }, [dispatch, page]);

  const handleLoadMore = () => {
    if (!loading && hasMore) {
      dispatch(fetchTrucks({ page, filters }))
        .unwrap()
        .then(() => {
          scrollTo(400);
        })
        .catch((error) => {
          console.error("Error loading trucks: ", error);
        });
    }
  };
  return (
    <Section>
      {loading && <Loader />}
      {error && <ErrorText>{error}</ErrorText>}
      <List>
        {trucks.map((truck) => (
          <TruckCard key={truck.id} truck={truck} />
        ))}
      </List>
      {hasMore && !loading && trucks.length > 0 && (
        <Button
          onClick={handleLoadMore}
          type="button"
          $appearance="transparent"
          $customStyles={{ padding: "16px 32px", alignSelf: "center" }}
        >
          Load more
        </Button>
      )}
    </Section>
  );
};
export default Trucks;
