import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Input from "../../Input/Input";
import { Wrapper, ErrorText, StyledTextArea } from "./BookForm.styles";
import { BoldText, SmallText } from "../../../styles/Text.styles";
import Button from "../../Button/Button";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
    bookingDate: Yup.date()
    .required("Booking date is required")
    .min(new Date(), "Booking date cannot be in the past"),
  comment: Yup.string(),
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
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Form submitted:", values);
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
            name="bookingDate"
            as={Input}
            placeholder="Booking date*"
            type="date"
            $customInputStyles={{ marginBottom: "14px" }}
          />
          <ErrorMessage name="bookingDate" component={ErrorText} />
          <Field
            name="comment"
            as={StyledTextArea}
            placeholder="Comment"
            $customStyles={{ marginBottom: "24px", height: "118px" }}
          />
          <ErrorMessage name="comment" component={ErrorText} />
          <Button
             
              type="submit"
              $customStyles={{padding: '16px 63px', display: 'block', margin: '0 auto'}}
            >
              Send
            </Button>
        </Form>
      </Formik>
    </Wrapper>
  );
};

export default BookForm;
