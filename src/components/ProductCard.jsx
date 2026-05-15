function ProductCard({product}) {

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
    <div className="product-card bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
      
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-60 object-cover"
      />

      {/* Content */}
      <div className="product-card-content p-5">

        {/* Product Title */}
        <h2 className="text-2xl font-bold mb-2">
         {product.title}
        </h2>

        {/* Category */}
        <p className="text-gray-500 mb-3">
          Category: {product.category.toUpperCase()}
        </p>

        {/* Description */}
        <p className="text-gray-600 mb-4">
          Description: {product.description}
        </p>

        {/* Stock */}
        <div className="flex justify-between items-center mb-4">
          <span className="font-semibold">
            Stock:
          </span>

          <span> {product.stock}</span>
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

        {/* Product Price */}
        <h3 className="text-3xl font-bold text-indigo-600 mb-6">
          Price: ${product.price}
        </h3>
      </div>
    </div>
  )
}

export default ProductCard;