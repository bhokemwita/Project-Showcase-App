import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import AdminPortal from "./AdminPortal"

function ProductPage() {
  const [products, setProducts] = useState([]);

  const API_URL = " https://fakestoreapi.com/products";
  // Fetch products
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
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
      
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-8">
        Product Dashboard
      </h1>

      {/* Products Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {products.map((product) => (
          <>
          <ProductCard
            key={product.id}
            product={product}
            onDelete={handleDelete}
            onUpdatePrice={handleUpdatePrice}
          />
          <AdminPortal 
          key={product.id}
          product={product}
          length={product.length}
              onDelete={handleDelete} />
          </>
        ))}

      </div>
    </div>
  );
}

export default ProductPage;