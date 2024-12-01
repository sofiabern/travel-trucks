import BoldText from "../BoldText";
import Rating from "../Rating";
import City from "../City";
import RatingCityWrapper from "../RatingCityWrapper";
import { formatCurrency } from "../../utils/formatCurrency";
import s from "./TruckHead.module.css";

const TruckHead = ({ truck }) => {
  return (
    <div className={s.head}>
      <BoldText as="h1" $customStyles={{ marginBottom: "8px" }}>
        {truck.name}
      </BoldText>
      <RatingCityWrapper $customStyles={{ marginBottom: "16px" }}>
        <Rating reviews={truck.reviews} rating={truck.rating} />
        <City location={truck.location} />
      </RatingCityWrapper>
      <BoldText as="h2">{formatCurrency(truck.price)}</BoldText>
    </div>
  );
};

export default TruckHead;
