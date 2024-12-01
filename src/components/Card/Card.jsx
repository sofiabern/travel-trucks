import { useDispatch, useSelector } from "react-redux";
import { selectFav } from "../../redux/favorite/selectors";
import { toggleFavorite } from "../../redux/favorite/slice";
import { truncateText } from "../../utils/trunkateText";
import { formatCurrency } from "../../utils/formatCurrency";
import SmallText from "../SmallText";
import TruckFeatures from "../TruckFeatures/TruckFeatures";
import Button from "../Button/Button";
import { Item, FavButton, FavIcon } from "./Card.styles";
import BoldText from "../BoldText";
import Image from "../Image";
import Rating from "../Rating";
import City from "../City";
import RatingCityWrapper from "../RatingLocationWrapper";
import s from "./Card.module.css";
import icons from "../../assets/images/icons.svg";

const Card = ({
  truck,
  truck: { gallery, name, rating, reviews, location, price, description },
}) => {
  const dispatch = useDispatch();
  const favIds = useSelector(selectFav);

  const isFavorite = favIds.includes(truck.id);

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(truck.id));
  };

  return (
    <Item>
      {gallery?.length > 0 && (
        <Image
          src={gallery[0].thumb}
          alt={`${name} preview`}
          $customStyles={{ objectPosition: "80% 50%" }}
          width="292px"
          height="375px"
        />
      )}
      <div className={s["left-side"]}>
        <div className={s["name-price"]}>
          <BoldText as="h2">{name}</BoldText>
          <div className={s["price-fav"]}>
            <BoldText as="h2">{formatCurrency(price)}</BoldText>
            <FavButton onClick={handleFavoriteClick}>
              <FavIcon width="26px" height="24px" $isFavorite={isFavorite}>
                <use href={`${icons}#heart`} />
              </FavIcon>
            </FavButton>
          </div>
        </div>

        <RatingCityWrapper $customStyles={{ marginBottom: "16px" }}>
          <Rating rating={rating} reviews={reviews} />
          <City location={location} />
        </RatingCityWrapper>

        <SmallText color="var(--dark-gray)" className={s.descr}>
          {truncateText(description, 62)}
        </SmallText>

        <TruckFeatures truck={truck} className={s.features} />

        <Button to={`/catalog/${truck.id}`} type="link" $padding="40px">
          Show more
        </Button>
      </div>
    </Item>
  );
};

export default Card;
