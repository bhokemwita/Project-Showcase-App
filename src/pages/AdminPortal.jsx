import { useRef, useState } from 'react'

export function AdminPortal({ product, onDelete, length }) {
    const [price, setPrice] = useState(product.price);
    const [array, setArray] = useState(newProductArray)
    const CatRef = useRef("");
    const NameRef = useRef("");
    const PriceRef = useRef("");
    const DesRef = useRef("");
    const ImageRef = useRef("");
    const StockRef = useRef("");

    // Example Product Object inside an Array
    let newProductArray = [
        {
            id: length + 1,
            title: "Classic Black Hoodie",
            price: 45.99,
            description: "Premium oversized hoodie for everyday wear.",
            category: "men's clothing",
            image: "https://i.pravatar.cc",
            stock: 15
        }
    ]

    // Stock Status
    function stockStatus() {

        if ((product.stock || 0) === 0) {
            return "Out of Stock";
        }

        if ((product.stock || 0) <= 10) {
            return "Low Stock";
        }

        return "In Stock";
    }

    //Edit Form 

    function handleEdit(){
        const handleSubmit = (event) => {
            console.log(event.target.value)
        }
        return(
            <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-3 mb-5"
                        >

                            <label>Category</label>
                            <input
                                type="text"
                                name="category"
                                className="border p-2 rounded"
                                placeholder={product.category}
                            />

                            <label>Name of Product</label>
                            <input
                                type="text"
                                name="title"
                                className="border p-2 rounded"
                                placeholder={product.title}
                            />

                            <label>Price of Product</label>
                            <input
                                type="number"
                                name="price"
                                className="border p-2 rounded"
                                placeholder={product.price}
                            />

                            <label>Description of Product</label>
                            <input
                                type="text"
                                name="description"
                                className="border p-2 rounded"
                                placeholder={product.description}
                            />

                            <label>Image URL</label>
                            <input
                                type="text"
                                name="image"
                                className="border p-2 rounded"
                                placeholder={product.image}
                            />

                            <label>Stock</label>
                            <input
                                type="number"
                                name="stock"
                                className="border p-2 rounded"
                                placeholder={product.stock}
                            />

                            <button
                                type="submit"
                                className="bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg"
                            >
                                Save Changes
                            </button>

                        </form>
        )
    }

    // Deletion from API
    async function handleDelete() {

        if (!window.confirm(`Are you sure you want to delete ${product.title}?`)) {
            return;
        }

        try {

            let response = await fetch(`https://fakestoreapi.com/products/${product.id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            let data = await response.json();

            console.log("Deleted from server:", data);

            onDelete(product.id);

        } catch (error) {

            console.error("Failed to delete product:", error);
            alert("Could not delete product. Please try again.");
        }
    }

    // Adding Product to API
    async function addProduct() {

        let newObject = {
            category : CatRef,
            title: NameRef,
            price: PriceRef,
            description: DesRef,
            image: ImageRef,
            stock: StockRef,
        }
            newProductArray.push({newObject})        

        let newProduct = array[0]

        try {

            let response = await fetch(`https://fakestoreapi.com/products/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newProduct)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            let data = await response.json();
            setArray([])
            

            console.log(data)

        } catch (error) {

            console.error(error);
        }

        return(
            <form
                            onSubmit={addProduct}
                            className="flex flex-col gap-3 mb-5"
                        >

                            <label>Category</label>
                            <input
                                type="text"
                                name="category"
                                ref={CatRef}
                                className="border p-2 rounded"
                            />

                            <label>Name of Product</label>
                            <input
                                type="text"
                                name="title"
                                ref={NameRef}
                                className="border p-2 rounded"
                            />

                            <label>Price of Product</label>
                            <input
                                type="number"
                                name="price"
                                ref={PriceRef}
                                className="border p-2 rounded"
                            />

                            <label>Description of Product</label>
                            <input
                                type="text"
                                name="description"
                                ref={DesRef}
                                className="border p-2 rounded"
                            />

                            <label>Image URL</label>
                            <input
                                type="text"
                                name="image"
                                ref={ImageRef}
                                className="border p-2 rounded"
                            />

                            <label>Stock</label>
                            <input
                                type="number"
                                name="stock"
                                ref={StockRef}
                                className="border p-2 rounded"
                            />

                            <button
                                type="submit"
                                className="bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg"
                            >
                                Save Changes
                            </button>

                        </form>
        )
    }

    // Edit Product
    async function editProduct() {

        try {

            let updatedProduct = {
                ...product,
                price: price
            }

            let response = await fetch(`https://fakestoreapi.com/products/${product.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedProduct)
            })

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }

            let data = await response.json()

            console.log("Updated Product:", data)

        } catch (error) {

            console.error(error)
        }
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

                    <span>{product.stock || 0}</span>
                </div>

                {/* Stock Badge */}
                <div className="mb-5">
                    <span
                        className={`px-3 py-1 rounded-full text-white text-sm ${(product.stock || 0) === 0
                            ? "bg-red-500"
                            : (product.stock || 0) <= 10
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
                        onClick={editProduct}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 rounded-lg transition"
                    >
                        Update
                    </button>
                </div>

                {/* Product Price */}
                <h3 className="text-3xl font-bold text-indigo-600 mb-6">
                    ${price}
                </h3>

                {/* Action Buttons */}
                <div className="flex gap-3">

                    <button 
                    onClick={handleEdit}
                    className="w-full bg-gray-200 hover:bg-gray-300 py-3 rounded-xl font-medium transition">
                        Edit
                    </button>

                    <button
                        onClick={handleDelete}
                        className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-medium transition"
                    >
                        Delete
                    </button>

                    <button
                        onClick={addProduct}
                        className="w-full bg-gray-200 hover:bg-gray-300 py-3 rounded-xl font-medium transition">
                        Add new Product
                    </button>

                </div>
            </div>
        </div>
    );
}


// Example fetch requests using useEffect

/*

DELETE

useEffect(() => {

    async function deleteProduct() {

        try {

            let response = await fetch(`https://fakestoreapi.com/products/${product.id}`, {
                method: 'DELETE'
            })

            let data = await response.json()

            console.log(data)

        } catch(error) {

            console.error(error)
        }
    }

    deleteProduct()

}, [])



POST

useEffect(() => {

    async function addProduct() {

        try {

            let response = await fetch(`https://fakestoreapi.com/products`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(sampleProducts[0])
            })

            let data = await response.json()

            console.log(data)

        } catch(error) {

            console.error(error)
        }
    }

    addProduct()

}, [])



PUT

useEffect(() => {

    async function updateProduct() {

        try {

            let response = await fetch(`https://fakestoreapi.com/products/${product.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...product,
                    price: price
                })
            })

            let data = await response.json()

            console.log(data)

        } catch(error) {

            console.error(error)
        }
    }

    updateProduct()

}, [])

*/