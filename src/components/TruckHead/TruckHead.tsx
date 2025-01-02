import { BoldText } from "../../styles/Text.styles";
import Rating from "../Rating/Rating";
import City from "../City/City";
import { RatingCity } from "../../styles/Common.styles";
import { Wrapper } from "./TruckHead.styles";
import { formatPrice } from "../../utils/formatPrice";
import { Truck } from "../../types/truck";

interface TruckHeadProps {
  truck: Truck;
}

const TruckHead = ({ truck }: TruckHeadProps) => {
  return (
    <Wrapper>
      <BoldText as="h1" $customStyles={{ marginBottom: "8px" }}>
        {truck.name}
      </BoldText>
      <RatingCity $customStyles={{ marginBottom: "16px" }}>
        <Rating reviews={truck.reviews} rating={truck.rating} />
        <City location={truck.location} />
      </RatingCity>
      <BoldText as="h2">{formatPrice(truck.price)}</BoldText>
    </Wrapper>
  );
};
export default TruckHead;
