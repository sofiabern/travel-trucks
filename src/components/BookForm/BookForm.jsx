import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import BoldText from "../BoldText";
import SmallText from "../SmallText";
import Button from "../Button/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import s from "./BookForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  bookingDate: Yup.date().required("Booking date is required"),
  comment: Yup.string(),
});

const BookForm = () => {
  return (
    <div className={s["form-wrapper"]}>
      <BoldText
        $fontSize="20px"
        as="h3"
        $customStyles={{ marginBottom: "8px" }}
      >
        Book your campervan now
      </BoldText>
      <SmallText
        color="var(--dark-gray)"
        $customStyles={{ marginBottom: "24px" }}
      >
        Stay connected! We are always ready to help you.
      </SmallText>
      <Formik
        initialValues={{
          name: "",
          email: "",
          bookingDate: "",
          comment: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          toast.success("Booking successfully created!", {
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
          });
          resetForm();
        }}
      >
        {() => (
          <Form className={s.fields}>
            <div>
              <Field
                name="name"
                placeholder="Name*"
                type="text"
                className={s.field}
              />
              <ErrorMessage name="name" component="p" className={s.error} />
            </div>

            <div>
              <Field
                name="email"
                placeholder="Email*"
                type="email"
                className={s.field}
              />
              <ErrorMessage name="email" component="p" className={s.error} />
            </div>

            <div>
              <Field name="bookingDate" type="date" className={s.field} />
              <ErrorMessage
                name="bookingDate"
                component="p"
                className={s.error}
              />
            </div>

            <div>
              <Field
                name="comment"
                placeholder="Comment"
                as="textarea"
                className={`${s.field} ${s.comment}`}
              />
              <ErrorMessage name="comment" component="p" className={s.error} />
            </div>

            <Button
              $padding="63px"
              type="submit"
              $customStyles="align-self: center"
            >
              Send
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookForm;
