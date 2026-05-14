// import React from "react";
import {Route, Routes} from "react-router-dom";
// import {Home} from "./pages/Home";
// import {About} from "./pages/About";
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
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/admin" element={<AdminPortal />} />
        </Routes>
      </div>
    </ProductProvider>
  );
} 

export default App

// function App() {
//   const [showSplash, setShowSplash] = useState(true);

//   useEffect(() => {
//     if 
//     // will add code here
  
    

//   return (
//     <BrowserRouter>
      
//         <div className="app-shell">
//           <div className={`splash-screen ${showSplash ? 'is-visible' : 'is-hidden'}`} aria-hidden={!showSplash}>
//             <div className="splash-copy">
//               <span>Commerce</span>
//               <span>Admin</span>
//             </div>
//           </div>
     
//     </BrowserRouter>
//   );
// }

// export default App;

