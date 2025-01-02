import { useLocation } from "react-router-dom";
import { Wrapper, StyledLink } from "./TruckLinks.styles";
import { isActiveTab } from "../../../utils/isActiveTab";
const TruckLinks = () => {
  const location = useLocation();

  return (
    <Wrapper>
      <StyledLink
        to="#features"
        $isActive={isActiveTab(location.hash, "#features")}
      >
        Features
      </StyledLink>
      <StyledLink
        to="#feedbacks"
        $isActive={isActiveTab(location.hash, "#feedbacks")}
      >
        Feedbacks
      </StyledLink>
    </Wrapper>
  );
};

export default TruckLinks;
