import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../store/favorite/slice";
import { selectFav } from "../../store/favorite/selectors";
import {
  StyledItem,
  CardContent,
  NameAndPrice,
  PriceAndFav,
  FavIcon,
  FavButton,
} from "./TruckCard.styles";
import { Image } from "../../styles/Image.styles";
import { BoldText } from "../../styles/Text.styles";
import { RatingCity } from "../../styles/Common.styles";
import Rating from "../Rating/Rating";
import City from "../City/City";
import { SmallText } from "../../styles/Text.styles";
import TruckFeatures from "../TruckFeatures/TruckFeatures";
import Button from "../Button/Button";
import { formatPrice } from "../../utils/formatPrice";
import { truncateText } from "../../utils/truncateText";
import icons from "../../assets/images/icons.svg";
import { Truck } from "../../types/truck";
import { AppDispatch } from "../../store/store";

interface TruckCardProps {
  truck: Truck;
}

const TruckCard = ({ truck }: TruckCardProps) => {
  const { gallery, name, rating, reviews, location, price, description, id } =
    truck;
  const dispatch = useDispatch<AppDispatch>();
  const favIds = useSelector(selectFav);

  const isFavorite = favIds.includes(id);

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(id));
  };
  return (
    <StyledItem>
      <Image
        src={gallery[0].thumb}
        alt={`${name} preview`}
        $customStyles={{ objectPosition: "80% 50%" }}
        width="292px"
        height="320px"
      />
      <CardContent>
        <NameAndPrice>
          <BoldText as="h2">{name}</BoldText>

          <PriceAndFav>
            <BoldText>{formatPrice(price)}</BoldText>

            <FavButton onClick={handleFavoriteClick}>
              <FavIcon width="26px" height="24px" $isFavorite={isFavorite}>
                <use href={`${icons}#heart`} />
              </FavIcon>
            </FavButton>
          </PriceAndFav>
        </NameAndPrice>
        <RatingCity $customStyles={{ marginBottom: "24px" }}>
          <Rating rating={rating} reviews={reviews} />
          <City location={location} />
        </RatingCity>
        <SmallText $customStyles={{ marginBottom: "24px" }}>
          {truncateText(description, 62)}
        </SmallText>
        <TruckFeatures truck={truck} $customStyles={{ marginBottom: "24px" }} />
        <Button
          to={`/catalog/${id}`}
          type="link"
          $customStyles={{ padding: "16px 40px" }}
        >
          Show more
        </Button>
      </CardContent>
    </StyledItem>
  );
};

export default TruckCard;
