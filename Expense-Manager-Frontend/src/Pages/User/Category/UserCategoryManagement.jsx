import React, { useState } from "react";
import "./UserCategoryManagement.css";

export default function UserCategoryManagement() {
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
    <div className="user-category-management">
      <div className="user-section-header">
        <h1>Category Management</h1>
        <button className="user-btn-primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? "Cancel" : "Add Category"}
        </button>
      </div>

      {showForm && (
        <form className="user-category-form" onSubmit={handleAddCategory}>
          <div className="user-form-group">
            <label>Category Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter category name"
              required
            />
          </div>

          <div className="user-form-group">
            <label>Type</label>
            <select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
          </div>

          <div className="user-form-group">
            <label>First Subcategory (Optional)</label>
            <input
              type="text"
              value={formData.subcategory}
              onChange={(e) => setFormData({ ...formData, subcategory: e.target.value })}
              placeholder="Enter subcategory"
            />
          </div>

          <button type="submit" className="user-btn-primary">
            Save Category
          </button>
        </form>
      )}

      <div className="user-categories-grid">
        {categories.map((category) => (
          <div key={category.id} className="user-category-card">
            <div className="user-category-header">
              <h3>{category.name}</h3>
              <span className={`user-type-badge user-${category.type}`}>
                {category.type}
              </span>
            </div>

            <div className="user-subcategories">
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
