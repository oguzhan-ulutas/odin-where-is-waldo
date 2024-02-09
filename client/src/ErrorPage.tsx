import { Link } from "react-router-dom";
import { FC } from "react";

interface ErrorPageProps {
    errorMsg:string
}

const ErrorPage:FC = ({errorMsg}) => {
  return (
    <div className="error">
        {errorMsg?
        <h1>{errorMsg}</h1>
        :<h1>Oh no, something went wrong!</h1>}
      
      <Link to="/">
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  );
};

export default ErrorPage;