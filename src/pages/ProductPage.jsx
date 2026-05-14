import { useState, useEffect, useContext } from "react";
import ProductContext from "../context/Products/ProductContext";
import ProductCard from "../components/ProductCard"

function ProductPage() {
  const [products, setProducts] = useContext(ProductContext);

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);


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

      {/* Products Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onDelete={handleDelete}
              onUpdatePrice={handleUpdatePrice}
            />
        ))}

      </div>
    </div>
  );
}

export default ProductPage;