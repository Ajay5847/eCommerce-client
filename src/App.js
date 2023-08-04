import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Category from "./components/category/Category";
import Footer from "./components/footer/Footer";
import ProductDetail from "./pages/products/ProductDetail";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategories } from "./redux/categorySlice";
import Collection from "./pages/collection/Collection";
import Payments from "./components/payments/Payments";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className="conatiner">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId?" element={<Collection />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/payments/:status" element={<Payments />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
