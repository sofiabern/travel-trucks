import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (<><h1>Ouch... Wrong turn!</h1>
    <p>The path you're looking for seems to lead nowhere.
    But don't worry, we'll guide you back.
    <Link to="/">Go back to the homepage</Link> and find what you need!</p>
</>
  );
};

export default NotFoundPage;
