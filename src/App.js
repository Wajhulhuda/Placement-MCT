import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import Product from "./components/Product";
import User from "./components/User";
import Login from "./components/Login";
import ProductDetails from "./components/ProductDetails";
import { MyProvider } from "./context/Context";

function App() {
  return (
    <div>
      <MyProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/users" element={<User />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/productdetail/" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </MyProvider>
    </div>
  );
}

export default App;
