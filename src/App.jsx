// import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import ContactUs from "./pages/Contact-Us";
import Landing from "./pages/Landing";
// import ProductProvider from "./context/Products/ProductContext";
// import AdminPortal from "./pages/AdminPortal";
import './App.css';

// function App() {
//   return (
//     <ProductProvider>
//       <div className="App">
//         <Routes>
//            <Route path="/" element={<Landing />} /> 
//            <Route path="/Home" element={<ProductPage />} /> 
//            <Route path="/About" element={<ContactUs/>} /> 
//           {/* <Route path="/Admin" element={<AdminPortal />} /> */}
//         </Routes>
//       </div>
//     </ProductProvider>
//   );
// } 
// App.jsx

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      
      <div className="app-shell">
       
        <div
          className={`splash-screen ${showSplash ? 'is-visible' : 'is-hidden'}`}
          aria-hidden={!showSplash}
        >
          <div className="splash-copy">
            <span>MESSAGE</span>
            <span>HERE</span>
          </div>
        </div>

        <header className="topbar">
          <div className="brand">COMPANY/TITLE</div>
          <nav className="main-nav">
            <NavLink className="nav-link" to="/" end>Home</NavLink>
            <NavLink className="nav-link" to="/products">Products</NavLink>
            <NavLink className="nav-link" to="/about">About</NavLink>
          </nav>
        </header>

        <main className="page-container">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/about" element={<ContactUs />} />
          </Routes>
        </main>

        <footer className="app-footer">
         FOOTER MESSAGE HERE
        </footer>
      </div>
    </>
  );
}

export default App;



