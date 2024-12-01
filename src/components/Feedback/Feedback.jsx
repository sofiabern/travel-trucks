import StarRating from "../StarRating/StarRating";
import { Avatar } from "./Feedback.styles";
import SmallText from "../SmallText";
import s from "./Feedback.module.css";
const Feedback = ({ review }) => {
  const firstLetter = review.reviewer_name.charAt(0).toUpperCase();

  return (
    <li>
      <div className={s["feedback-head"]}>
        <Avatar>{firstLetter}</Avatar>
        <div>
          <SmallText fontWeight="500" $customStyles={{ marginBottom: "4px" }}>
            {review.reviewer_name}
          </SmallText>
          <StarRating rating={review.reviewer_rating} />
        </div>
      </div>
      <SmallText color='var(--dark-gray)' >{review.comment}</SmallText>
    </li>
  );
};

export default Feedback;
