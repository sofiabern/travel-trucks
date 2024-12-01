import { MutatingDots } from "react-loader-spinner";
import { Backdrop } from "./Loader.styles";

const Loader = () => (
  <Backdrop>
    <MutatingDots
      visible={true}
      height="100"
      width="100"
      color="#ff0000"
      secondaryColor="#ff0000"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
    />
  </Backdrop>
);

export default Loader;
