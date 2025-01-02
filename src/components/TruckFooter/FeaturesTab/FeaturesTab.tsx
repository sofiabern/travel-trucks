import { Wrapper } from "./FeaturesTab.styles";
import TruckFeatures from "../../TruckFeatures/TruckFeatures";
import FeaturesTable from "./FeaturesTable/FeaturesTable";
import { fullTruckFeatures } from "../../../data/truckFeatures";
import { Truck } from "../../../types/truck";

interface FeaturesTabProps {
  truck: Truck;
}

const FeaturesTab = ({ truck }: FeaturesTabProps) => {
  return (
    <Wrapper>
      <TruckFeatures truck={truck} features={fullTruckFeatures} $customStyles={{ marginBottom: "100px" }} />
      <FeaturesTable truck={truck}/>
    </Wrapper>
  );
};

export default FeaturesTab;