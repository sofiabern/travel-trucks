import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../redux/filters/selectors";
import { setFilter } from "../redux/filters/slice";
import Input from "./Input/Input";

const Location = () => {
  const dispatch = useDispatch();

  const location = useSelector(selectFilters).location;

  const handleLocationChange = (e) => {
    dispatch(setFilter({ name: "location", value: e.target.value }));
  };
  return (
    <Input
      placeholder="City"
      icon="map"
      value={location}
      onChange={handleLocationChange}
      $padding="18px 18px 14px 46px"
      height="56px"
      label="Location"
      $customWrapperStyles="margin-bottom: 40px"
    />
  );
};

export default Location;
