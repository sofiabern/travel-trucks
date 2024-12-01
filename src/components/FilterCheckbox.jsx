import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../redux/filters/selectors";
import { setFilter } from "../redux/filters/slice";
import { HiddenInput, Icon, StyledLabel, LabelText } from "./Filter.styles";
import icons from "../assets/images/icons.svg";

const FilterCheckbox = ({ filter: { id, label, icon, name } }) => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const handleChange = (event) => {
    const { name, checked } = event.target;
    dispatch(setFilter({ name, value: checked }));
  };
  return (
    <li>
      <HiddenInput
        id={id}
        type="checkbox"
        checked={filters[name] || false}
        name={name}
        onChange={handleChange}
      />
      <StyledLabel htmlFor={id}>
        <Icon width="32px" height="32px">
          <use href={`${icons}#${icon}`} />
        </Icon>
        <LabelText>{label}</LabelText>
      </StyledLabel>
    </li>
  );
};

export default FilterCheckbox;
