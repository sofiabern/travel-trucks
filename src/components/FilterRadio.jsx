import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../redux/filters/selectors";
import { setFilter } from "../redux/filters/slice";
import { HiddenInput, Icon, StyledLabel, LabelText } from "./Filter.styles";
import icons from "../assets/images/icons.svg";

const FilterRadio = ({filter : {id, label, icon, name, value}}) => {
  const dispatch = useDispatch();
  const truckType = useSelector(selectFilters).truckType
  
  const handleChange = (e) => {
    dispatch(setFilter({name:'truckType', value: e.target.value}))
  }
    return (
        <li>
          <HiddenInput
            id={id}
            type='radio'
            checked={truckType === value}
            name={name}
            value={value}
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
    }

    export default FilterRadio;