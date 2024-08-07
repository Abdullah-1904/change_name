import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>
        This Link is not Valid, Please Click the Button to go back to Homepage
      </h1>
      <Link to={"/home"}>
        <button> Click Here</button>
      </Link>
    </div>
  );
};

export default Error;
