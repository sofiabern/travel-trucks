import FilterTitle from "./FilterTitle.styles";
import FilterCheckbox from "./FilterCheckbox";
import FilterList from "./FilterList.styles";
import equipOptions from "../data/equipOptions";


const FilterEquip = () => {
  return (
    <div>
      <FilterTitle>Vehicle equipment</FilterTitle>
      <FilterList>
        {equipOptions.map((filter) => (
          <FilterCheckbox key={filter.id}
            filter={filter}
          />
        ))}
      </FilterList>
    </div>
  );
};

export default FilterEquip;
