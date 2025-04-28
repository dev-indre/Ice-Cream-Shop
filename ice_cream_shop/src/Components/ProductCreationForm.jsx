import Button from "../UI/Button";
import { useState } from "react";
import "../pages/pages-styles/ProductsCreation.css";

export default function ProductCreationForm({ categories, onProductCreated }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    category_id: "",
    image_url: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  //produkto sukurimui
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          price: Number(formData.price),
          description: formData.description,
          category_id: Number(formData.category_id),
          image_url: formData.image_url,
        }),
      });

      if (response.ok) {
        setFormData({
          name: "",
          price: "",
          description: "",
          category_id: "",
          image_url: "",
        });
        if (onProductCreated) {
          onProductCreated();
        }
      } else {
        console.error("Failed to create product");
      }
    } catch (error) {
      console.error("Error creating product", error);
    }
  }
  return (
    <form onSubmit={handleSubmit} className="product-form">
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Product Description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        required
        min="0"
        step="0.01"
      />
      <select
        name="category_id"
        value={formData.category_id}
        onChange={handleChange}
        required
      >
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        name="image_url"
        placeholder="Image URL"
        value={formData.image_url}
        onChange={handleChange}
      />
      <Button background="#f83d8e" type="submit">
        Add Product
      </Button>
    </form>
  );
}
