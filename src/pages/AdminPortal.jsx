import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductContext from "../context/Products/ProductContext"
import Navbar from '../components/Navbar'

function AdminPortal() {
  const [products, setProducts] = useContext(ProductContext)
  const [editingProduct, setEditingProduct] = useState(null)
  const [formValues, setFormValues] = useState({
    title: '',
    price: '',
    category: '',
    description: '',
    stock: '',
    image: '',
  })

    async function handleDelete(product) {
      if (!window.confirm(`Are you sure you want to delete ${product.title}?`)) {
        return
      }

      try {
        const response = await fetch(`https://fakestoreapi.com/products/${product.id}`, {
          method: 'DELETE'
        })

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        await response.json()
        setProducts(products.filter((item) => item.id !== product.id))
        alert('Product deleted successfully!')
      } catch (error) {
        console.error('Failed to delete product:', error)
        alert('Could not delete product. Please try again.')
      }
    }

    function handleEdit(product) {
      setEditingProduct(product)
      setFormValues({
        title: product.title || '',
        price: product.price?.toString() || '',
        category: product.category || '',
        description: product.description || '',
        stock: product.stock?.toString() || '',
        image: product.image || ''
      })
    }

    function handleChange(e) {
      const { name, value } = e.target
      setFormValues((prev) => ({ ...prev, [name]: value }))
    }

    async function editProduct(e) {
      e.preventDefault()

      if (!editingProduct) {
        return
      }

      try {
        const updatedProduct = {
          ...editingProduct,
          title: formValues.title,
          price: parseFloat(formValues.price) || 0,
          category: formValues.category,
          description: formValues.description,
          stock: parseInt(formValues.stock, 10) || 0,
          image: formValues.image
        }

        const response = await fetch(`https://fakestoreapi.com/products/${editingProduct.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedProduct)
        })

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json()
        const finalProduct = {
          ...editingProduct,
          ...data,
          stock: updatedProduct.stock,
          category: updatedProduct.category,
          description: updatedProduct.description,
          image: updatedProduct.image
        }

        setProducts(products.map((product) =>
          product.id === editingProduct.id ? finalProduct : product
        ))
        setEditingProduct(null)
        alert('Product updated successfully!')
      } catch (error) {
        console.error('Failed to update product:', error)
        alert('Could not update product. Please try again.')
      }
    }

    function handleCancelEdit() {
      setEditingProduct(null)
    }

    return (
        <>
        <Navbar />
        <div className="p-6">
            <h1 className="text-4xl font-bold mb-8">Admin Portal</h1>

            {editingProduct && (
              <div className="mb-8 bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
                <form onSubmit={editProduct} className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                    <input
                      type="text"
                      name="title"
                      value={formValues.title}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                    <input
                      type="number"
                      name="price"
                      value={formValues.price}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <input
                      type="text"
                      name="category"
                      value={formValues.category}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Stock</label>
                    <input
                      type="number"
                      name="stock"
                      value={formValues.stock}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                      name="description"
                      value={formValues.description}
                      onChange={handleChange}
                      rows="3"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                    <input
                      type="text"
                      name="image"
                      value={formValues.image}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div className="md:col-span-2 flex gap-3">
                    <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-medium transition">
                      Save Changes
                    </button>
                    <button type="button" onClick={handleCancelEdit} className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-xl font-medium transition">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            <ul id='minList' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                <li key={product.id} className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300'>
            <img src={product?.image} alt={product?.title} className="w-full h-60 object-cover"/>
            

            {/* Content */}
            <div className="p-5">
                <h2 className="text-2xl font-bold mb-2">{product?.title}</h2>
                <p className="text-gray-500 mb-3">{product?.category}</p>
                <p className="text-gray-600 mb-4">{product?.description}</p>
                <div className="flex justify-between items-center mb-4">
                    <span className="font-semibold">Stock:</span>
                    <span>{product?.stock || 0}</span>
                </div>
                <div className="mb-5">
                    <span
                        className={`px-3 py-1 rounded-full text-white text-sm ${(product.stock || 0) === 0
                            ? "bg-red-500"
                            : (product.stock || 0) <= 10
                                ? "bg-yellow-500"
                                : "bg-green-500"
                            }`}>
                        {(product.stock || 0) === 0 ? "Out of Stock" : (product.stock || 0) <= 10 ? "Low Stock" : "In Stock"}
                    </span>
                </div>

                <h3 className="text-3xl font-bold text-indigo-600 mb-6">
                    Price: ${product?.price}
                </h3>

                <div className="flex gap-3">
                    <button
                        onClick={() => handleEdit(product)}
                        className="w-full bg-gray-200 hover:bg-gray-300 py-3 rounded-xl font-medium transition"
                    >
                        Edit
                    </button>

                    <button
                        onClick={() => handleDelete(product)}
                        className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-medium transition"
                    >
                        Delete
                    </button>

                    <Link
                        to='/AddProduct'
                        className="w-full bg-gray-200 hover:bg-gray-300 text-center py-3 rounded-xl font-medium transition"
                    >
                        Add new Product
                    </Link>
                </div>
            </div>
        </li>
            ))}
            </ul>
        </div>
        </>
        )
}

export default AdminPortal