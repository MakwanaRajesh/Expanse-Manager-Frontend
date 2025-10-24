import React, { useState, useEffect } from "react";
import "./AdminDashboard.css";

function AdminDashboard({ user }) {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalExpenses: 0,
    totalIncome: 0,
    pendingApprovals: 0,
  });

  useEffect(() => {
    // Mock data - replace with actual API call later
    setStats({
      totalUsers: 45,
      totalExpenses: 125000,
      totalIncome: 200000,
      pendingApprovals: 12,
    });
  }, []);

  return (
    <div className="admin-dashboard">
      <div className="admin-dashboard-header">
        <h1>Admin Dashboard</h1>
        <p>System overview and management</p>
      </div>

      <div className="admin-stats-grid">
        <div className="admin-stat-card users">
          <h3>Total Users</h3>
          <p className="admin-stat-value">{stats.totalUsers}</p>
        </div>

        <div className="admin-stat-card income">
          <h3>Total Income</h3>
          <p className="admin-stat-value">₹{stats.totalIncome}</p>
        </div>

        <div className="admin-stat-card expense">
          <h3>Total Expenses</h3>
          <p className="admin-stat-value">₹{stats.totalExpenses}</p>
        </div>

        <div className="admin-stat-card pending">
          <h3>Pending Approvals</h3>
          <p className="admin-stat-value">{stats.pendingApprovals}</p>
        </div>
      </div>

      <div className="admin-dashboard-section">
        <h2>Recent Transactions</h2>
        <table className="admin-transactions-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>₹1500</td>
              <td>Expense</td>
              <td>2024-01-15</td>
              <td>
                <span className="admin-badge approved">Approved</span>
              </td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>₹2000</td>
              <td>Expense</td>
              <td>2024-01-14</td>
              <td>
                <span className="admin-badge pending">Pending</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;
