import { useDispatch, useSelector } from "react-redux";
import { selectFav } from "../../redux/favorite/selectors";
import { toggleFavorite } from "../../redux/favorite/slice";
import { truncateText } from "../../utils/trunkateText";
import { formatCurrency } from "../../utils/formatCurrency";
import CardText from "../CardText";
import Icon from "../Icon";
import TruckFeatures from "../TruckFeatures/TruckFeatures";
import Button from "../Button/Button";
import { Item, Image, BoldText, FavButton, FavIcon } from "./Card.styles";
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
        <Image src={gallery[0].thumb} alt={`${name} preview`} />
      )}
      <div className={s["left-side"]}>
        <div className={s["name-price"]}>
          <BoldText>{name}</BoldText>
          <div className={s["price-fav"]}>
            <BoldText>{formatCurrency(price)}</BoldText>
            <FavButton onClick={handleFavoriteClick}>
              <FavIcon width="26px" height="24px" $isFavorite={isFavorite}>
                <use href={`${icons}#heart`} />
              </FavIcon>
            </FavButton>
          </div>
        </div>

        <div className={s["rating-location"]}>
          <div className={s.rating}>
            <Icon width="16px" height="16px" color="var(--yellow)">
              <use href={`${icons}#star`} />
            </Icon>
            <CardText $underlined color="var(--dark-blue)">
              {reviews.length === 0
                ? "No reviews"
                : `${rating}(${reviews.length} Review${reviews.length > 1 ? "s" : ""})`}{" "}
            </CardText>
          </div>
          <div className={s.location}>
            <Icon width="16px" height="16px" color="var(--dark-blue)">
              <use href={`${icons}#map`} />
            </Icon>
            <CardText color="var(--dark-blue)">{location}</CardText>
          </div>
        </div>

        <CardText color="var(--dark-gray)" className={s.descr}>
          {truncateText(description, 62)}
        </CardText>

        <TruckFeatures truck={truck} className={s.features} />

        <Button type="link" $padding="40px">
          Show more
        </Button>
      </div>
    </Item>
  );
};

export default Card;
