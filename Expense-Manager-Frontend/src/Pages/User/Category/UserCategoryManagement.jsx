import React, { useState } from "react";
import "./UserCategoryManagement.css";

export default function CategoryManagement() {
  const [categories, setCategories] = useState([
    { id: 1, name: "Travel", type: "expense", subcategories: ["Taxi", "Train", "Bus", "Flight"] },
    { id: 2, name: "Food", type: "expense", subcategories: ["Lunch", "Dinner", "Snacks"] },
    { id: 3, name: "Salary", type: "income", subcategories: ["Monthly", "Bonus"] },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", type: "expense", subcategory: "" });
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (formData.name && formData.type) {
      setCategories([
        ...categories,
        {
          id: categories.length + 1,
          name: formData.name,
          type: formData.type,
          subcategories: formData.subcategory ? [formData.subcategory] : [],
        },
      ]);
      setFormData({ name: "", type: "expense", subcategory: "" });
      setShowForm(false);
    }
  };

  const handleAddSubcategory = (categoryId, subcategoryName) => {
    setCategories(
      categories.map((cat) =>
        cat.id === categoryId ? { ...cat, subcategories: [...cat.subcategories, subcategoryName] } : cat
      )
    );
  };

  return (
    <div className="category-management">
      <div className="section-header">
        <h1>Category Management</h1>
        <button className="btn-primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? "Cancel" : "Add Category"}
        </button>
      </div>

      {showForm && (
        <form className="category-form" onSubmit={handleAddCategory}>
          <div className="form-group">
            <label>Category Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter category name"
              required
            />
          </div>

          <div className="form-group">
            <label>Type</label>
            <select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
          </div>

          <div className="form-group">
            <label>First Subcategory (Optional)</label>
            <input
              type="text"
              value={formData.subcategory}
              onChange={(e) => setFormData({ ...formData, subcategory: e.target.value })}
              placeholder="Enter subcategory"
            />
          </div>

          <button type="submit" className="btn-primary">
            Save Category
          </button>
        </form>
      )}

      <div className="categories-grid">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <div className="category-header">
              <h3>{category.name}</h3>
              <span className={`type-badge ${category.type}`}>{category.type}</span>
            </div>
            <div className="subcategories">
              <h4>Subcategories:</h4>
              <ul>
                {category.subcategories.map((sub, idx) => (
                  <li key={idx}>{sub}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
