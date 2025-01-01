import { StyledCity } from "./City.styles";
import { SmallText } from "../../styles/Text.styles";
import { Icon } from "../../styles/Icon.styles";
import icons from '../../assets/images/icons.svg'

const City = ({location}) => {
 return <StyledCity>
    <Icon width="16px" height="16px" color="var(--dark-blue)">
      <use href={`${icons}#map`} />
    </Icon>
    <SmallText color="var(--dark-blue)">{location}</SmallText>
  </StyledCity>;
};

export default City;
