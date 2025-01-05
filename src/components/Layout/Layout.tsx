import { ReactElement } from "react";
import Header from "../Header/Header";
import { ToastContainer } from "react-toastify";
const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Header />
      {children}
      <ToastContainer />
    </>
  );
};

export default Layout;
