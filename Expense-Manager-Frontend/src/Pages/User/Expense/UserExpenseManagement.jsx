import React, { useState } from "react";
import "./UserExpenseManagement.css";

export default function ExpenseManagement({ user }) {
  const [expenses, setExpenses] = useState([
    { id: 1, date: "2024-01-15", category: "Travel", amount: 500, project: "Website Redesign", status: "approved" },
    { id: 2, date: "2024-01-14", category: "Food", amount: 300, project: "Marketing Campaign", status: "pending" },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    date: "",
    category: "",
    subcategory: "",
    project: "",
    amount: "",
    remarks: "",
    attachment: null,
  });

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (formData.date && formData.category && formData.amount && formData.project) {
      setExpenses([
        ...expenses,
        {
          id: expenses.length + 1,
          date: formData.date,
          category: formData.category,
          amount: parseInt(formData.amount),
          project: formData.project,
          status: "pending",
        },
      ]);
      setFormData({
        date: "",
        category: "",
        subcategory: "",
        project: "",
        amount: "",
        remarks: "",
        attachment: null,
      });
      setShowForm(false);
    }
  };

  return (
    <div className="expense-management">
      <div className="section-header">
        <h1>Expense Management</h1>
        <button className="btn-primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? "Cancel" : "Add Expense"}
        </button>
      </div>

      {showForm && (
        <form className="expense-form" onSubmit={handleAddExpense}>
          <div className="form-row">
            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                required
              >
                <option value="">Select Category</option>
                <option value="Travel">Travel</option>
                <option value="Food">Food</option>
                <option value="Stay">Stay</option>
                <option value="Purchase">Purchase</option>
              </select>
            </div>

            <div className="form-group">
              <label>Subcategory</label>
              <input
                type="text"
                value={formData.subcategory}
                onChange={(e) => setFormData({ ...formData, subcategory: e.target.value })}
                placeholder="e.g., Taxi, Lunch"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Project</label>
              <select
                value={formData.project}
                onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                required
              >
                <option value="">Select Project</option>
                <option value="Website Redesign">Website Redesign</option>
                <option value="Marketing Campaign">Marketing Campaign</option>
              </select>
            </div>

            <div className="form-group">
              <label>Amount</label>
              <input
                type="number"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                placeholder="Enter amount"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Remarks</label>
            <textarea
              value={formData.remarks}
              onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
              placeholder="Add any remarks"
              rows="3"
            ></textarea>
          </div>

          <div className="form-group">
            <label>Attachment (Bill/Receipt)</label>
            <input
              type="file"
              onChange={(e) => setFormData({ ...formData, attachment: e.target.files?.[0] || null })}
              accept="image/*,.pdf"
            />
          </div>

          <button type="submit" className="btn-primary">
            Save Expense
          </button>
        </form>
      )}

      <table className="expenses-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Project</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.date}</td>
              <td>{expense.category}</td>
              <td>₹{expense.amount}</td>
              <td>{expense.project}</td>
              <td>
                <span className={`badge ${expense.status}`}>{expense.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
