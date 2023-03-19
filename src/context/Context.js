import { createContext, useState, useEffect } from "react";

const myContext = createContext();
const MyProvider = ({ children }) => {
  const [cate, setCate] = useState([]);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [load, setLoad] = useState(true);

  //fetching categories
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCate(data);
      });
  }, []);

  //fetching default electronics category
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
        setLoad(false);
      });
  }, []);
  return (
    <myContext.Provider
      value={{ cate, product, load, loading, setLoad, setProduct }}
    >
      {children}
    </myContext.Provider>
  );
};
export { myContext, MyProvider };
