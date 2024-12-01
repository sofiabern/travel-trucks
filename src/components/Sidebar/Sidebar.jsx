import { useDispatch, useSelector } from "react-redux";
import { selectFilters} from "../../redux/filters/selectors";
import { fetchTrucks } from "../../redux/trucks/operations";
import { resetTrucks } from "../../redux/trucks/slice";
import Location from "../Location";
import Filters from "../Filters/Filters";
import Button from "../Button/Button";
import s from "./Sidebar.module.css";

const Sidebar = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(resetTrucks());
    dispatch(fetchTrucks({ page: 1, filters }));
  };


  return (
    <section className={s.wrapper}>
      <form onSubmit={handleSubmit}>
        <Location />
        <Filters />
        <Button type="submit" $padding="57px" $customStyles="margin-top: 40px">
          Submit
        </Button>
      </form>
    </section>
  );
};

export default Sidebar;
