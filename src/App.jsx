import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Landing from "./pages/Landing";
import ProductPage from "./pages/ProductPage";
import AdminPortal from "./pages/AdminPortal";
import ProductProvider from "./context/Products/ProductProvider";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <ProductProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<AdminPortal />} />
        </Routes>
        <Footer />
      </div>
    </ProductProvider>
  );
}

export default App;

