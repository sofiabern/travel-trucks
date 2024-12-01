import Icon from "../Icon";
import SmallText from "../SmallText";
import { Feature, defaultIconStyles } from "./TruckFeature.styles";
import icons from "../../assets/images/icons.svg";

const TruckFeature = ({ iconId, label }) => {
  return (
    <Feature>
      <Icon {...defaultIconStyles}>
        <use href={`${icons}#${iconId}`} />
      </Icon>
      <SmallText fontWeight="500">{label}</SmallText>
    </Feature>
  );
};

export default TruckFeature;
