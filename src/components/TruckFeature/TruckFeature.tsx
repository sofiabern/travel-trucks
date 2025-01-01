import { Icon } from "../../styles/Icon.styles";
import { SmallText } from "../../styles/Text.styles";
import { Feature } from "./TruckFeature.styles";
import icons from "../../assets/images/icons.svg";


interface TruckFeatureProps {
  iconId: string; 
  label: string;
}


const TruckFeature = ({ iconId, label }: TruckFeatureProps) => {
  return (
    <Feature>
      <Icon width="20px" height="20px">
        <use href={`${icons}#${iconId}`} />
      </Icon>
      <SmallText $customStyles={{ fontWeight: "500" }}>{label}</SmallText>
    </Feature>
  );
};

export default TruckFeature;
