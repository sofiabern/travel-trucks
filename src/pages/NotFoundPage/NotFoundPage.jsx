import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <main className={s.main}>
      <h1 className={s.title}>Ouch... Wrong turn!</h1>
      <p className={s.text}>
        The path you're looking for seems to lead nowhere. But don't worry,
        we'll guide you back.
      </p>
      <p className={s.text}>
        <Link to="/" className={s.link}>Go back to the homepage</Link> and find what you need!
      </p>
    </main>
  );
};

export default NotFoundPage;
