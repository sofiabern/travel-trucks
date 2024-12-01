import { useLocation, Link } from "react-router-dom";
import FeaturesTab from "../FeaturesTab/FeaturesTab";
import FeedbacksTab from "../FeedbacksTab/FeedbacksTab";
import BoldText from "../BoldText";
import BookForm from "../BookForm/BookForm";
import s from "./TruckFooter.module.css";
const TruckTabs = ({ truck }) => {
  const location = useLocation();

  const isActiveTab = (hash) => location.hash === hash;

  return (
    <>
      <div className={s["links-wrapper"]}>
        <Link
          to="#features"
          className={`${s.link} ${isActiveTab("#features") ? s.active : ""}`}
        >
          <BoldText $fontSize="20px" as="h3">
            Features
          </BoldText>
        </Link>
        <Link
          to="#feedbacks"
          className={`${s.link} ${isActiveTab("#feedbacks") ? s.active : ""}`}
        >
          <BoldText $fontSize="20px" as="h3">
            Feedbacks
          </BoldText>
        </Link>
      </div>
      <div className={s.content}>
  
        <div className={s["tabs-content"]}>
          {(isActiveTab("#features") || location.hash === "") && (
            <FeaturesTab truck={truck} />
          )}
          {isActiveTab("#feedbacks") && (
            <FeedbacksTab reviews={truck.reviews} />
          )}
        </div>
        <BookForm />
      </div>
    </>
  );
};

export default TruckTabs;
