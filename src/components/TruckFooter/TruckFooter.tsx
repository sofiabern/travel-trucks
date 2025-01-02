import { useLocation } from "react-router-dom";
import TruckLinks from "./TruckLinks/TruckLinks";
import { Wrapper, TabsContent } from "./TruckFooter.styles";
import FeatureTab from "./FeaturesTab/FeaturesTab";
import FeedbackTab from "./FeedbacksTab/FeedbacksTab";
import BookForm from "./BookForm/BookForm";
import { isActiveTab } from "../../utils/isActiveTab";
import { Truck } from "../../types/truck";

interface TruckFooterProps {
  truck: Truck;
}

const TruckFooter = ({ truck }: TruckFooterProps) => {
  const location = useLocation();

  return (
    <>
      <TruckLinks />
      <Wrapper>
        <TabsContent>
          {isActiveTab(location.hash, "#features") && (
            <FeatureTab truck={truck} />
          )}
          {isActiveTab(location.hash, "#feedbacks") && (
            <FeedbackTab reviews={truck.reviews} />
          )}
        </TabsContent>
        <BookForm />
      </Wrapper>
    </>
  );
};

export default TruckFooter;
