import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTrucks,
  selectLoading,
  selectHasMore,
  selectCurrentPage,
  selectFetchError,
} from "../../redux/trucks/selectors";
import { selectFilters } from "../../redux/filters/selectors";
import { fetchTrucks } from "../../redux/trucks/operations";
import { scrollTo } from "../../utils/scrollTo";
import Card from "../Card/Card";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import s from "../Cards/Cards.module.css";

const Cards = () => {
  const dispatch = useDispatch();

  const trucks = useSelector(selectTrucks);
  const loading = useSelector(selectLoading);
  const hasMore = useSelector(selectHasMore);
  const page = useSelector(selectCurrentPage);
  const filters = useSelector(selectFilters);
  const error = useSelector(selectFetchError);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      dispatch(fetchTrucks({ page, filters: {} }));
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

  const getErrorMessage = () => {
    if (!error) return null;

    return error === "Items matching your filter not found"
      ? "No trucks found matching your filters."
      : "Oops! Something went wrong. Please try again later.";
  };

  const errorMessage = getErrorMessage();
  return (
    <section className={s.cards}>
      {loading && <Loader />}

      {errorMessage && <p className={s.error}>{errorMessage}</p>}

      <ul className={s["cards-list"]}>
        {trucks.map((truck) => (
          <Card key={truck.id} truck={truck} />
        ))}
      </ul>

      {hasMore && !loading && trucks.length > 0 && (
        <Button
          type="button"
          onClick={handleLoadMore}
          $padding="32px"
          $appearance="transparent"
          $customStyles="align-self: center;"
        >
          Load More
        </Button>
      )}
    </section>
  );
};

export default Cards;
