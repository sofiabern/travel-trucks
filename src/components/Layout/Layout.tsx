import { ReactElement } from "react";
import Header from "../Header/Header";
const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
