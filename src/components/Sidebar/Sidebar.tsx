import { useDispatch } from "react-redux";
import { fetchTrucks } from "../../store/trucks/operations";
import { resetTrucks } from "../../store/trucks/slice";
import { setFilter } from "../../store/filters/slice";
import { Formik } from "formik";
import Location from "../Location/Location";
import Filters from "../Filters/Filters";
import Button from "../Button/Button";
import { StyledForm, ButtonWrapper } from "./Sidebar.styles";
import { AppDispatch } from "../../store/store";
import { Filters as SidebarFormValues } from "../../types/filters";

const Sidebar = () => {

  const dispatch = useDispatch<AppDispatch>();

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
    dispatch(setFilter(values));

    dispatch(resetTrucks());
    dispatch(fetchTrucks({ page: 1, filters: values }));

  };

  const handleReset = () => {
    dispatch(resetTrucks());
    dispatch(fetchTrucks({ page: 1, filters: {} }));
    dispatch(setFilter(initialValues));

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
