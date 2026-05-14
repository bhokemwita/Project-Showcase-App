import { useState, useEffect, useContext } from "react";
import ProductContext from "../context/Products/ProductContext";
import ProductCard from "../components/ProductCard"
import Navbar from "../components/Navbar"

function ProductPage() {
  const [products, setProducts] = useContext(ProductContext);

  const [showSplash, setShowSplash] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  // Get unique categories
  const categories = [...new Set(products.map(product => product.category))];

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
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
    <div className="p-6">
      <div
        className={`splash-screen ${showSplash ? 'is-visible' : 'is-hidden'}`}
        aria-hidden={!showSplash}
      >
        <div className="splash-copy">
          <span>Products Page</span>
        </div>
      </div>

      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-8">
        Product Dashboard
      </h1>

      {/* Filters */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Filter by Category</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Search Products</label>
          <input
            id="search"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by title or description..."
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-6">

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