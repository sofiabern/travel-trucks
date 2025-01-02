import { List } from "./Feedbacks.styles";
import Feedback from "./Feedback/Feedback";
import { Review } from "../../../types/truck";

interface FeedbacksTabProps {
  reviews: Review[];
}

const FeedbacksTab = ({ reviews }: FeedbacksTabProps) => {
  return (
    <List>
      {reviews.map((review, index) => (
        <Feedback review={review} key={index} />
      ))}
    </List>
  );
};

export default FeedbacksTab;
