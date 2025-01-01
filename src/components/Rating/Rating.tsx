import { StyledRating } from './Rating.styles'
import { Icon } from '../../styles/Icon.styles'
import { SmallText } from '../../styles/Text.styles'
import icons from '../../assets/images/icons.svg'


interface Review {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

interface RatingProps {
  reviews: Review[];
  rating: number;
}

const Rating = ({ reviews, rating }: RatingProps) =>{
    return <StyledRating>
       <Icon width="16px" height="16px" color="var(--yellow)">
        <use href={`${icons}#star`} />
      </Icon>
      <SmallText $underlined>
        {reviews.length === 0
          ? "No reviews"
          : `${rating}(${reviews.length} Review${reviews.length > 1 ? "s" : ""})`}
      </SmallText>
    </StyledRating>
}

export default Rating;