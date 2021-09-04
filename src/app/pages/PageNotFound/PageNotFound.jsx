import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = (props) => {
  return (
    <div className="m-5 text-center">
      <p className="display-6">Sorry, page not found...</p>
      <Link to="/">Go to home page</Link>
    </div>
  );
};

export default PageNotFound;