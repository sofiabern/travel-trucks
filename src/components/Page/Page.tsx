import { ReactElement } from "react";

const Page = ({ children }: { children: ReactElement }) => {
  return <main>{children}</main>;
};

export default Page;
