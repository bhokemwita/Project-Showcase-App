import { useState } from "react";

function ProductCard({
  product,
  onDelete,
  onUpdatePrice,
}) {
  const [price, setPrice] = useState(product.price);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="h-60 w-full object-cover"
      />

      {/* Content */}
      <div className="p-5">
        {/* Title */}
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


        {/* Price Update */}
        <div className="flex gap-2 mb-5">
          <input
            type="number"
            value={price}
            onChange={(e) =>
              setPrice(e.target.value)
            }
            className="border rounded-lg px-3 py-2 w-full"
          />

          <button
            onClick={() =>
              onUpdatePrice(product.id, price)
            }
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 rounded-lg"
          >
            Update
          </button>
        </div>

        {/* Price */}
        <h3 className="text-3xl font-bold text-indigo-600 mb-5">
          ${product.price}
        </h3>

        {/* Actions */}
        <div className="flex gap-3">
          <button className="w-full bg-gray-200 hover:bg-gray-300 py-3 rounded-xl">
            Edit
          </button>

          <button
            onClick={() =>
              onDelete(product.id)
            }
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;