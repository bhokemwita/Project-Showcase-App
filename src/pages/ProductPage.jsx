import { useState, useEffect, useContext } from "react";
import ProductContext from "../context/Products/ProductContext";
import ProductCard from "../components/ProductCard"
import Navbar from "../components/Navbar"

function ProductPage() {
  const [products, setProducts] = useContext(ProductContext);

  const [showSplash, setShowSplash] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  // Delete product
  function handleDelete(id) {
    const updatedProducts = products.filter(
      (product) => product.id !== id
    );
    setProducts(updatedProducts);
  }

  // Update price
  function handleUpdatePrice(id, newPrice) {
    const updatedProducts = products.map((product) =>
      product.id === id
        ? { ...product, price: Number(newPrice) }
        : product
    );
    setProducts(updatedProducts);
  }

  return (
    <>
    <Navbar />
    <div className="p-6 page-panel">
      <div
        className={`splash-screen ${showSplash ? 'is-visible' : 'is-hidden'}`}
        aria-hidden={!showSplash}
      >
        <div className="splash-copy">
          <span>Products</span>
        </div>
      </div>

      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-8 text-center">
        Product Dashboard
      </h1>

      {/* Search Filter */}
      <div className="filter-bar mb-8">
        <div className="search-group">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">Search Products</label>
          <input
            id="search"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by title or description..."
            className="border border-gray-300 rounded-md px-2 py-1 mb-2.5 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-grid">

        {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onDelete={handleDelete}
              onUpdatePrice={handleUpdatePrice}
            />
        ))}

      </div>
    </div>
    </>
  );
}

export default ProductPage;