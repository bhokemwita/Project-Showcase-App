import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Landing from './pages/Landing';
import ProductProvider from './context/ProductContext';  
import AdminPortal from './pages/AdminPortal'; 
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <ProductProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<AdminPortal />} />
        </Routes>
        <Footer />
      </div>
    </ProductProvider>
  );
}
export default App;
