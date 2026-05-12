import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch products
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  // Delete product
  async function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    await fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    });

    setProducts(products.filter((product) => product.id !== id));
  }

  // Update product price
  async function handlePriceUpdate(id, newPrice) {
    await fetch(`http://localhost:3000/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price: Number(newPrice),
      }),
    });

    const updatedProducts = products.map((product) =>
      product.id === id
        ? { ...product, price: Number(newPrice) }
        : product
    );

    setProducts(updatedProducts);
  }

  // Search filter
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <h1 className="text-center text-2xl mt-10">
        Loading Products...
      </h1>
    );
  }


  return (
  <div className="p-6">
    {/* Header */}
    <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
      <h1 className="text-4xl font-bold">
        Products Dashboard
      </h1>

      <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl">
        + Add Product
      </button>
    </div>

    {/* Search */}
    <SearchBar
      search={search}
      setSearch={setSearch}
    />
    {/* Products Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">    
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onDelete={handleDelete}
          onUpdatePrice={handlePriceUpdate}
        />
      ))}
    </div>

    {/* Empty state */}
    {filteredProducts.length === 0 && (
      <h2 className="text-center text-2xl mt-10 text-gray-500">
        No products found.
      </h2>
    )}
  </div>
);
}

export default Products;