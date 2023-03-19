import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";

const ProductDetails = () => {
  //accessing store state
  const state = useSelector((state) => state.reducer);
  return (
    <>
      <Navbar />
      <div className="container  product-detail mt-3">
        <div className="row py-1 bg-success text-light text-center">
          <h1>
            {/* first letter capitalization */}
            {state.category.slice(0, 1).toUpperCase() +
              state.category.slice(1)}{" "}
            Category
          </h1>
        </div>
        <div className="row mt-3">
          <div className="col-12 col-md-3 col-sm-12">
            <img src={state.image} alt={state.title} className="img-fluid" />
          </div>
          <div className="col-12 col-md-9 col-sm-12">
            <h6>Product Name</h6>
            <p>{state.title}</p>
            <h6>Product Price</h6>
            <p>${state.price}</p>
            <h6>Product Description</h6>
            <p>{state.description}</p>
            <h6>Product Rating</h6>
            <p>{state.rating.rate}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
