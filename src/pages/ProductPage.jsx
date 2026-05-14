import { useContext } from "react";
import ProductContext from "../context/Products/ProductContext";
// import AdminPortal from "./AdminPortal"
import ProductCard from "../components/ProductCard"


function ProductPage() {
  const [products, setProducts] = useContext(ProductContext);


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
            {/* <AdminPortal
              key={product.id}
              product={product}
              length={product.length}
              onDelete={handleDelete} /> */}
          </>
        ))}

      </div>
    </div>
  );
}

export default ProductPage;