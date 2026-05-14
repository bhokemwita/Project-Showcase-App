import { useState } from "react"

function AddProduct() {

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    origin: "",
    price: ""
  })

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()

    fetch("http://localhost:3000/coffee", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        alert("Product added successfully!")
        setFormData({ name: "", description: "", origin: "", price: "" })
      })
  }

  return (
    <div className="form-container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <label>Product Name</label>
        <input
          name="name"
          placeholder="e.g. Vanilla Bean"
          value={formData.name}
          onChange={handleChange}
        />
        <label>Description</label>
        <input
          name="description"
          placeholder="e.g. Medium roast, nutty flavor"
          value={formData.description}
          onChange={handleChange}
        />
        <label>Origin</label>
        <input
          name="origin"
          placeholder="e.g. Colombia"
          value={formData.origin}
          onChange={handleChange}
        />
        <label>Price</label>
        <input
          name="price"
          placeholder="e.g. 10.00"
          value={formData.price}
          onChange={handleChange}
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  )
}

export default AddProduct