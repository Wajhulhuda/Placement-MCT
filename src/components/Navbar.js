import React from "react";
import { Link } from "react-router-dom";

//Navbar component
const Navbar = () => {
  return (
    <div className="container-fluid col-12 bg-dark  py-3">
      <div className="col-md-12 col-sm-8 col-12 d-flex justify-content-between nav">
        <div className="col-9 col-md-4 d-flex justify-content-around">
          {/* providing link for navigation */}
          <Link to="/home">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/users">Users</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="col-2">
          <Link to="/login">Logout</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
