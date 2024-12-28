import { Formik } from "formik";
import Location from "../Location/Location";
import Filters from "../Filters/Filters";
import Button from "../Button/Button";
import { StyledForm, ButtonWrapper } from "./Sidebar.styled";

interface SidebarFormValues {
  location: string;
  automatic: boolean;
  AC: boolean;
  kitchen: boolean;
  TV: boolean;
  bathroom: boolean;
  truckType: string;
}

const Sidebar = () => {
  const initialValues: SidebarFormValues = {
    location: "",
    automatic: false,
    AC: false,
    kitchen: false,
    TV: false,
    bathroom: false,
    truckType: "",
  };

  const handleSubmit = (values: SidebarFormValues) => {
    console.log(values);

  };

  const handleReset = () => {
    console.log("reset");

  };

  return (
    <aside>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values }) => (
          <StyledForm>
            <Location />
            <Filters />
            <ButtonWrapper>
              <Button
                type="reset"
                $customStyles={{ padding: "16px 57px" }}
                $appearance="transparent"
                onClick={handleReset}
              >
                Reset
              </Button>
              <Button type="submit" $customStyles={{ padding: "16px 57px" }}>
                Submit
              </Button>
            </ButtonWrapper>

            <pre>{JSON.stringify(values, null, 2)}</pre>
          </StyledForm>
        )}
      </Formik>
    </aside>
  );
};

export default Sidebar;
