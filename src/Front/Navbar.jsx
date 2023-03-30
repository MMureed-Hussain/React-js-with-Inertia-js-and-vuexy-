import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="d-flex bg-primary flex-wrap justify-content-center">
        <Link
          to="/"
          className="m-3 text-light fs-4"
          style={{ textDecoration: "none" }}
        >
          Home
        </Link>
        <Link
          to="/email"
          className="m-3 text-light fs-4"
          style={{ textDecoration: "none" }}
        >
          Email
        </Link>
        <Link
          to="/profile"
          className="m-3 text-light fs-4"
          style={{ textDecoration: "none" }}
        >
          Profiles
        </Link>
        <Link
          to="/layout"
          className="m-3 text-light fs-4"
          style={{ textDecoration: "none" }}
        >
          Layout
        </Link>
        <Link
          to="/search"
          className="m-3 text-light fs-4"
          style={{ textDecoration: "none" }}
        >
          Search
        </Link>
      </div>
    </>
  );
};

export default Navbar;
