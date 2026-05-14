// import React from "react";
import {Route, Routes} from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import ContactUs from "./pages/Contact-Us";
import Landing from "./pages/Landing";
import ProductProvider from "./context/Products/ProductContext";
// import AdminPortal from "./pages/AdminPortal";
import './App.css';

function App() {
  return (
    <ProductProvider>
      <div className="App">
        <Routes>
           <Route path="/" element={<Landing />} /> 
           <Route path="/Home" element={<ProductPage />} /> 
           <Route path="/About" element={<ContactUs/>} /> 
          {/* <Route path="/Admin" element={<AdminPortal />} /> */}
        </Routes>
      </div>
    </ProductProvider>
  );
} 

export default App

