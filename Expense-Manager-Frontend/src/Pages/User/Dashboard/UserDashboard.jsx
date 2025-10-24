import { useState, useEffect } from "react";
import "./UserDashboard.css";

export default function UserDashboard({ user }) {
  const [stats, setStats] = useState({
    totalExpenses: 0,
    totalIncome: 0,
    balance: 0,
    monthlyExpenses: 0,
  });

  useEffect(() => {
    setStats({
      totalExpenses: 5420,
      totalIncome: 8000,
      balance: 2580,
      monthlyExpenses: 1200,
    });
  }, []);

  return (
    <div className="user-dashboard">
      <div className="user-dashboard-header">
        <h1>Welcome, {user?.email}</h1>
        <p>Your expense summary</p>
      </div>

      <div className="user-stats-grid">
        <div className="user-stat-card user-income">
          <h3>Total Income</h3>
          <p className="user-stat-value">₹{stats.totalIncome}</p>
        </div>

        <div className="user-stat-card user-expense">
          <h3>Total Expenses</h3>
          <p className="user-stat-value">₹{stats.totalExpenses}</p>
        </div>

        <div className="user-stat-card user-balance">
          <h3>Balance</h3>
          <p className="user-stat-value">₹{stats.balance}</p>
        </div>

        <div className="user-stat-card user-monthly">
          <h3>This Month</h3>
          <p className="user-stat-value">₹{stats.monthlyExpenses}</p>
        </div>
      </div>

      <div className="user-dashboard-section">
        <h2>Recent Expenses</h2>
        <table className="user-expenses-table">
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
                <span className="user-badge user-approved">Approved</span>
              </td>
            </tr>
            <tr>
              <td>2024-01-14</td>
              <td>Food</td>
              <td>₹300</td>
              <td>
                <span className="user-badge user-pending">Pending</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
