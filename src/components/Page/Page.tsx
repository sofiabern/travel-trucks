import React, { ReactElement} from "react";
import StyledMain from "./Page.styles";

interface PageProps {
  children: ReactElement;
  $customStyles?: React.CSSProperties;
}

const Page = ({ children, $customStyles }: PageProps) => {
  return <StyledMain $customStyles={$customStyles}>{children}</StyledMain>;
};

export default Page;
