import { FilterList, FilterTitle } from "./FilterBlock.styles";
import FilterOption from "../FilterOption/FilterOption";
import { TypeOption } from "../../data/typeOptions";
import { EquipOption } from "../../data/equipOptions";

interface FilterBlockProps {
  title: string;
  filters: TypeOption[] | EquipOption[];
  filterType: "radio" | "checkbox";
}

const FilterBlock = ({ title, filters, filterType }: FilterBlockProps) => {
  return (
    <div>
      <FilterTitle>{title}</FilterTitle>
      <FilterList>
        {filters.map((filter) => (
          <FilterOption
            key={filter.id}
            filterType={filterType}
            filter={filter}
          />
        ))}
      </FilterList>
    </div>
  );
};

export default FilterBlock;
