import { useField } from "formik";
import {
  HiddenInput,
  StyledLabel,
  Icon,
  LabelText,
} from "./FilterOption.styles";
import icons from "../../assets/images/icons.svg";

interface FilterOptionProps {
  filterType: "radio" | "checkbox";
  filter: {
    id: string;
    name: string;
    value?: string;
    label: string;
    icon: string;
  };
}

const FilterOption = ({
  filterType,
  filter: { id, icon, label, name, value },
}: FilterOptionProps) => {
  const [field] = useField({
    name,
  });

  const inputProps =
    filterType === "checkbox"
      ? { checked: field.value }
      : value !== undefined
      ? { value, checked: field.value === value }
      : { checked: field.value };

  return (
    <li>
      <HiddenInput id={id} type={filterType} {...field} {...inputProps} />
      <StyledLabel htmlFor={id}>
        <Icon width="32px" height="32px">
          <use href={`${icons}#${icon}`} />
        </Icon>
        <LabelText>{label}</LabelText>
      </StyledLabel>
    </li>
  );
};

export default FilterOption;
