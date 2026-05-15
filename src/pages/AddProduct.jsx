import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddProduct() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    category: '',
    brand: '',
    stock: '',
    rating: '',
    image: '',
    description: '',
  })

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      const response = await fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      await response.json()
      alert('Product added successfully!')
      setFormData({
        title: '',
        price: '',
        category: '',
        brand: '',
        stock: '',
        rating: '',
        image: '',
        description: '',
        status: '',
        sku: '',
        discount: ''
      })
      navigate('/Admin')
    } catch (error) {
      console.error('Add product failed:', error)
      alert('Could not add product. Please try again.')
    }
  }

  return (
    <div className="add-product-page min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-[28px] shadow-2xl p-10 w-full max-w-xl border border-gray-200">
        <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">Add New Product</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-700 mb-2">Title</label>
            <input name="title" placeholder="e.g. Nike Air Max" value={formData.title} onChange={handleChange} className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-700 mb-2">Price</label>
            <input name="price" placeholder="e.g. 120" value={formData.price} onChange={handleChange} className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-700 mb-2">Category</label>
            <input name="category" placeholder="e.g. Shoes" value={formData.category} onChange={handleChange} className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-700 mb-2">Brand</label>
            <input name="brand" placeholder="e.g. Nike" value={formData.brand} onChange={handleChange} className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-700 mb-2">Stock</label>
            <input name="stock" placeholder="e.g. 14" value={formData.stock} onChange={handleChange} className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-700 mb-2">Rating</label>
            <input name="rating" placeholder="e.g. 4.8" value={formData.rating} onChange={handleChange} className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-700 mb-2">Image URL</label>
            <input name="image" placeholder="e.g. https://picsum.photos/500/300" value={formData.image} onChange={handleChange} className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
            <input name="description" placeholder="e.g. Premium running sneakers" value={formData.description} onChange={handleChange} className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-700 mb-2">Status</label>
            <input name="status" placeholder="e.g. active" value={formData.status} onChange={handleChange} className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-700 mb-2">SKU</label>
            <input name="sku" placeholder="e.g. NK-AM-001" value={formData.sku} onChange={handleChange} className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-700 mb-2">Discount</label>
            <input name="discount" placeholder="e.g. 10" value={formData.discount} onChange={handleChange} className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>

          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition duration-200">Add Product</button>
        </form>
      </div>
    </div>
  )
}

export default AddProduct