// import React from "react";
import {BrowserRouter as Route, Routes} from "react-router-dom";
// import {Home} from "./pages/Home";
import {About} from "./pages/About";
// import {Landing} from "./pages/Landing";
import {ProductProvider} from "./context/ProductContext";
import {AdminPortal} from "./pages/AdminPortal";
import './App.css';

function App() {
  return (
    <ProductProvider>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<Landing />} /> */}
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<AdminPortal />} />
        </Routes>
      </div>
    </ProductProvider>
  );
}
export default App;

// import ProductPage from "./pages/ProductPage";
// function App({ products }) {
//   return (
//     <div>
//       <ProductPage products={products} />
//     </div>
//   );
// }

// export default App;
