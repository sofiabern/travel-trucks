import { Avatar, Head } from "./Feedback.styles";
import { SmallText } from "../../../../styles/Text.styles";
import StarRating from "./StarRating/StarRating";
import { Review } from "../../../../types/truck";
interface FeedbackProps {
  review: Review;
}
const Feedback = ({ review }: FeedbackProps) => {
  const firstLetter = review.reviewer_name.charAt(0).toUpperCase();
  return (
    <li>
      <Head>
        <Avatar>{firstLetter}</Avatar>
        <div>
          <SmallText $customStyles={{ marginBottom: "4px", fontWeight: "500" }}>
            {review.reviewer_name}
          </SmallText>
          <StarRating rating={review.reviewer_rating} />
        </div>
      </Head>
      <SmallText $customStyles={{ color: "var(--dark-gray)" }}>
        {review.comment}
      </SmallText>
    </li>
  );
};
export default Feedback;
