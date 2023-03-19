import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { myContext } from "../context/Context";
import Loading from "./Loading";
import Navbar from "./Navbar";

const Product = () => {
  const dispatch = useDispatch();

  //extracting values from context api
  const { cate, product, load, loading, setLoad, setProduct } =
    useContext(myContext);

  //handling category when user will click on
  const handleClick = (category) => {
    setLoad(true);
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoad(false);
      });
  };

  return (
    <>
      <Navbar />
      {loading && <Loading />}
      <div className="container col-11 mt-2 px-2 product">
        <div className="row">
          <div className="col-md-2 col-4 col-sm-3 bg-dark text-light pb-5">
            {cate.length > 0 &&
              cate.map((item) => {
                return (
                  <div className="mt-5 text-center category" key={item}>
                    <Link onClick={() => handleClick(item)}>{item}</Link>
                  </div>
                );
              })}
          </div>
          <div className="col-md-9 col-8 col-sm-7  mx-sm-2 mx-md-4">
            {load ? (
              <Loading />
            ) : (
              product.map((item) => {
                return (
                  <li
                    className="pt-4 items"
                    key={item.id}
                    onClick={() => dispatch({ type: "CLICK", payload: item })}
                  >
                    <Link to={`/productdetail`}>{item.title}</Link>
                  </li>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
