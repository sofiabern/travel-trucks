import FilterTitle from "./FilterTitle";
import FilterCheckbox from "./FilterCheckbox";
import FilterList from "./FilterList";
import equipOptions from "../data/equipOptions";

const FilterEquip = () => {
  return (
    <div>
      <FilterTitle>Vehicle equipment</FilterTitle>
      <FilterList>
        {equipOptions.map((filter) => (
          <FilterCheckbox key={filter.id} filter={filter} />
        ))}
      </FilterList>
    </div>
  );
};

export default FilterEquip;
