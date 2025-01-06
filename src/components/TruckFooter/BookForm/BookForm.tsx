import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Input from "../../Input/Input";
import { Wrapper, ErrorText, StyledTextArea } from "./BookForm.styles";
import { BoldText, SmallText } from "../../../styles/Text.styles";
import Button from "../../Button/Button";
import DatePicker from "./DatePicker/DatePicker";
import { toast } from "react-toastify";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
    bookingDates: Yup.array()
    .of(Yup.date().nullable())
    .test(
      "both-dates-required",
      "Both start and end dates are required",
      (value) => value && value.length === 2 && value.every((date) => !!date)
    )
    .required("Please specify your booking dates"),
  comment: Yup.string().max(200, "Maximum 200 characters"),
});

const BookForm = () => {
  return (
    <Wrapper>
      <BoldText
        as="h3"
        $customStyles={{ marginBottom: "8px", fontSize: "20px" }}
      >
        Book your campervan now
      </BoldText>
      <SmallText
        $customStyles={{ marginBottom: "24px", color: "var(--dark-gray)" }}
      >
        Stay connected! We are always ready to help you.
      </SmallText>
      <Formik
        initialValues={{
          name: "",
          email: "",
          bookingDates: [null, null],
          comment: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Form submitted:", values);
          toast.success("Form submitted successfully!");
        }}
      >
        <Form>
          <Field
            name="name"
            as={Input}
            placeholder="Name*"
            $customInputStyles={{ marginBottom: "14px" }}
          />
          <ErrorMessage name="name" component={ErrorText} />
          <Field
            name="email"
            as={Input}
            placeholder="Email*"
            type="email"
            $customInputStyles={{ marginBottom: "14px" }}
          />
          <ErrorMessage name="email" component={ErrorText} />
          <Field
            name="bookingDates"
            component={DatePicker}
            options={{ mode: "range",  minDate: "today", dateFormat: "d-m-Y" }}
          />
          <ErrorMessage name="bookingDates" component={ErrorText} />
          <Field
            name="comment"
            as={StyledTextArea}
            placeholder="Comment"
            $customStyles={{ marginBottom: "24px", height: "118px" }}
          />
          <ErrorMessage name="comment" component={ErrorText} />

          <Button
            type="submit"
            $customStyles={{
              padding: "16px 63px",
              display: "block",
              margin: "0 auto",
            }}
          >
            Send
          </Button>
        </Form>
      </Formik>
    </Wrapper>
  );
};

export default BookForm;
