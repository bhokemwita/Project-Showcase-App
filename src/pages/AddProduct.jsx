import { useState } from "react"

function AddProduct() {

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "",
    brand: "", //
    stock: "",
    rating: "",
    image: "",
    description: "",
    status: "", //
    sku: "", //
    discount: "" //
  })

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()

    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        alert("Product added successfully!")
        setFormData({ title: "", price: "", category: "", brand: "", stock: "", rating: "", image: "", description: "", status: "", sku: "", discount: "" })
      //**** */
      
        return data
      })

      // .catch(console.error)
  }

  return (
    <div className="form-container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>

        <label>Title</label>
        <input name="title" placeholder="e.g. Nike Air Max" value={formData.title} onChange={handleChange} />

        <label>Price</label>
        <input name="price" placeholder="e.g. 120" value={formData.price} onChange={handleChange} />

        <label>Category</label>
        <input name="category" placeholder="e.g. Shoes" value={formData.category} onChange={handleChange} />

        <label>Brand</label>
        <input name="brand" placeholder="e.g. Nike" value={formData.brand} onChange={handleChange} />

        <label>Stock</label>
        <input name="stock" placeholder="e.g. 14" value={formData.stock} onChange={handleChange} />

        <label>Rating</label>
        <input name="rating" placeholder="e.g. 4.8" value={formData.rating} onChange={handleChange} />

        <label>Image URL</label>
        <input name="image" placeholder="e.g. https://picsum.photos/500/300" value={formData.image} onChange={handleChange} />

        <label>Description</label>
        <input name="description" placeholder="e.g. Premium running sneakers" value={formData.description} onChange={handleChange} />

        <label>Status</label>
        <input name="status" placeholder="e.g. active" value={formData.status} onChange={handleChange} />

        <label>SKU</label>
        <input name="sku" placeholder="e.g. NK-AM-001" value={formData.sku} onChange={handleChange} />

        <label>Discount</label>
        <input name="discount" placeholder="e.g. 10" value={formData.discount} onChange={handleChange} />

        <button type="submit">Add Product</button>
      </form>
    </div>
  )
}

export default AddProduct