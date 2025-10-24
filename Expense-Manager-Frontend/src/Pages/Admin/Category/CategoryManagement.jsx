import React, { useState } from "react";
import "./CategoryManagement.css";

export default function CategoryManagement() {
  const [categories, setCategories] = useState([
    { id: 1, name: "Travel", type: "expense", subcategories: ["Taxi", "Train", "Bus", "Flight"] },
    { id: 2, name: "Food", type: "expense", subcategories: ["Lunch", "Dinner", "Snacks"] },
    { id: 3, name: "Salary", type: "income", subcategories: ["Monthly", "Bonus"] },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", type: "expense", subcategory: "" });

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

  return (
    <div className="admin-category-management">
      <div className="admin-section-header">
        <h1>Category Management</h1>
        <button className="admin-btn-primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? "Cancel" : "Add Category"}
        </button>
      </div>

      {showForm && (
        <form className="admin-category-form" onSubmit={handleAddCategory}>
          <div className="admin-form-group">
            <label>Category Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter category name"
              required
            />
          </div>

          <div className="admin-form-group">
            <label>Type</label>
            <select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
          </div>

          <div className="admin-form-group">
            <label>First Subcategory (Optional)</label>
            <input
              type="text"
              value={formData.subcategory}
              onChange={(e) => setFormData({ ...formData, subcategory: e.target.value })}
              placeholder="Enter subcategory"
            />
          </div>

          <button type="submit" className="admin-btn-primary">
            Save Category
          </button>
        </form>
      )}

      <div className="admin-categories-grid">
        {categories.map((category) => (
          <div key={category.id} className="admin-category-card">
            <div className="admin-category-header">
              <h3>{category.name}</h3>
              <span className={`admin-type-badge ${category.type}`}>{category.type}</span>
            </div>
            <div className="admin-subcategories">
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
