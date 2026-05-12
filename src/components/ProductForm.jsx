import React from 'react'

const ProductForm = () => {
    const [formData, setFormData] = React.useState({
        title: "",
        price: "",
        category: "",
        image: "",
        description: "",
    });

    function handleChange(e) {
        e.preventDefault();

        setFormData({ ...formData, [e.target.name] : e.target.value});
    }

    async function handleSubmit (e) {
        e.preventDefault();

        await fetch ("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
    }


  return (
    <div>
        <h1 className="text-3xl font-bold mb-5">Add New Product</h1>

        <form onSubmit={handleSubmit} className="max-w-md">
            <input
                type="text"
                name="title"
                placeholder="Product Title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 mb-4 outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
                type="number"
                name="price"
                placeholder="Price"
                value={formData.price}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 mb-4 outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
                type="text"
                name="category"
                placeholder="Category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 mb-4 outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={formData.image}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 mb-4 outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 mb-4 outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl"
            >
                Add Product to Inventory
            </button>
        </form>
    </div>
  )
}

export default ProductForm;