import { useState } from "react";

function ProductCard({
  product,
  onDelete,
  onUpdatePrice,
}) {
  const [price, setPrice] = useState(product.price);

  // Stock Status
  function stockStatus() {
    if (product.stock === 0) {
      return "Out of Stock";
    }

    if (product.stock <= 10) {
      return "Low Stock";
    }

    return "In Stock";
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
      
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-60 object-cover"
      />

      {/* Content */}
      <div className="p-5">

        {/* Product Title */}
        <h2 className="text-2xl font-bold mb-2">
          {product.title}
        </h2>

        {/* Category */}
        <p className="text-gray-500 mb-3">
          {product.category}
        </p>

        {/* Description */}
        <p className="text-gray-600 mb-4">
          {product.description}
        </p>

        {/* Stock */}
        <div className="flex justify-between items-center mb-4">
          <span className="font-semibold">
            Stock:
          </span>

          <span>{product.stock}</span>
        </div>

        {/* Stock Badge */}
        <div className="mb-5">
          <span
            className={`px-3 py-1 rounded-full text-white text-sm ${
              product.stock === 0
                ? "bg-red-500"
                : product.stock <= 10
                ? "bg-yellow-500"
                : "bg-green-500"
            }`}
          >
            {stockStatus()}
          </span>
        </div>

        {/* Price Update */}
        <div className="flex gap-2 mb-5">
          <input
            type="number"
            value={price}
            onChange={(e) =>
              setPrice(e.target.value)
            }
            className="border border-gray-300 rounded-lg px-3 py-2 w-full outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            onClick={() =>
              onUpdatePrice(product.id, price)
            }
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 rounded-lg transition"
          >
            Update
          </button>
        </div>

        {/* Product Price */}
        <h3 className="text-3xl font-bold text-indigo-600 mb-6">
          ${product.price}
        </h3>

        {/* Action Buttons */}
        <div className="flex gap-3">

          <button className="w-full bg-gray-200 hover:bg-gray-300 py-3 rounded-xl font-medium transition">
            Edit
          </button>

          <button
            onClick={() =>
              onDelete(product.id)
            }
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-medium transition"
          >
            Delete
          </button>

        </div>
      </div>
    </div>
  );
}

export default ProductCard;