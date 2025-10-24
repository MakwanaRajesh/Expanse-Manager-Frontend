import { useState, useEffect } from "react";
import "./UserDashboard.css"; // Adjust the path according to your Vite project structure

export default function UserDashboard({ user }) {
  const [stats, setStats] = useState({
    totalExpenses: 0,
    totalIncome: 0,
    balance: 0,
    monthlyExpenses: 0,
  });

  useEffect(() => {
    // Mock data - replace with actual API call
    setStats({
      totalExpenses: 5420,
      totalIncome: 8000,
      balance: 2580,
      monthlyExpenses: 1200,
    });
  }, []);

  return (
    <div className="user-dashboard">
      <div className="dashboard-header">
        <h1>Welcome, {user?.email}</h1>
        <p>Your expense summary</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card income">
          <h3>Total Income</h3>
          <p className="stat-value">₹{stats.totalIncome}</p>
        </div>

        <div className="stat-card expense">
          <h3>Total Expenses</h3>
          <p className="stat-value">₹{stats.totalExpenses}</p>
        </div>

        <div className="stat-card balance">
          <h3>Balance</h3>
          <p className="stat-value">₹{stats.balance}</p>
        </div>

        <div className="stat-card monthly">
          <h3>This Month</h3>
          <p className="stat-value">₹{stats.monthlyExpenses}</p>
        </div>
      </div>

      <div className="dashboard-section">
        <h2>Recent Expenses</h2>
        <table className="expenses-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024-01-15</td>
              <td>Travel</td>
              <td>₹500</td>
              <td>
                <span className="badge approved">Approved</span>
              </td>
            </tr>
            <tr>
              <td>2024-01-14</td>
              <td>Food</td>
              <td>₹300</td>
              <td>
                <span className="badge pending">Pending</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
