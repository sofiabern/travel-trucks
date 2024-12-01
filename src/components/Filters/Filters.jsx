import FilterEquip from "../FilterEquip";
import FilterType from "../FilterType";
import { Text } from "./Filters.styles";
import s from "./Filters.module.css";



const Filters = () => {
  return (
    <>
      <Text>Filters</Text>
      <div className={s.filters}>
        <FilterEquip />
        <FilterType />
      </div>
    </>
  );
};

export default Filters;
