import { useField } from "formik";
import Input from "../Input/Input";

const Location = () => {
  const [field] = useField("location");
  return (
    <Input
      placeholder="City"
      icon="map"
      {...field}
      label="Location"
      $customInputStyles={{ height: "56px", padding: "18px 18px 14px 46px" }}
    />
  );
};

export default Location;
