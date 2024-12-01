import Icon from "../Icon";
import CardText from "../CardText";
import { Feature, defaultIconStyles } from "./TruckFeature.styles";
import icons from "../../assets/images/icons.svg";

const TruckFeature = ({ iconId, label }) => {
  return (
    <Feature>
      <Icon {...defaultIconStyles}>
        <use href={`${icons}#${iconId}`} />
      </Icon>
      <CardText fontWeight="500">{label}</CardText>
    </Feature>
  );
};

export default TruckFeature;
