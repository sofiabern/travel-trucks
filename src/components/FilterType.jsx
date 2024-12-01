import FilterTitle from "./FilterTitle.styles";
import FilterList from "./FilterList.styles";
import FilterRadio from "./FilterRadio";
import typeOptions from "../data/typeOptions";


const FilterType = () => {
  return (
    <div>
      <FilterTitle>Vehicle type</FilterTitle>
      <FilterList>
        {typeOptions.map((filter) => (
          <FilterRadio key={filter.id} filter={filter} />
        ))}
      </FilterList>
    </div>
  );
};

export default FilterType;
