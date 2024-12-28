import FilterBlock from "../FilterBlock/FilterBlock";
import equipOptions from "../../data/equipOptions";
import typeOptions from "../../data/typeOptions";
import { Wrapper } from "./Filters.styles";
const Filters = () => {
  return (
    <Wrapper>
      <FilterBlock
        title="Vehicle equipment"
        filters={equipOptions}
        filterType="checkbox"
      />
      <FilterBlock
        title="Vehicle type"
        filters={typeOptions}
        filterType="radio"
      />
    </Wrapper>
  );
};

export default Filters;
