import Feedback from "../Feedback/Feedback";
import s from './FeedbacksTab.module.css'
const FeedbacksTab = ({ reviews }) => {
  return (
    <ul className={s.feedbacks}>
      {reviews.map((review, index) => (
        <Feedback review={review} key={index} />
      ))}
    </ul>
  );
};

export default FeedbacksTab;
