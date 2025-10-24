import { useState } from "react";
import "./UserReports.css";

export default function Reports({ user }) {
  const [reportType, setReportType] = useState("summary");
  const [dateRange, setDateRange] = useState("month");

  const reportData = {
    totalIncome: 200000,
    totalExpense: 125000,
    balance: 75000,
    categoryWise: [
      { category: "Travel", amount: 45000, percentage: 36 },
      { category: "Food", amount: 30000, percentage: 24 },
      { category: "Stay", amount: 25000, percentage: 20 },
      { category: "Purchase", amount: 25000, percentage: 20 },
    ],
    projectWise: [
      { project: "Website Redesign", income: 100000, expense: 65000 },
      { project: "Marketing Campaign", income: 100000, expense: 60000 },
    ],
    monthlyData: [
      { month: "Jan", income: 50000, expense: 30000 },
      { month: "Feb", income: 55000, expense: 32000 },
      { month: "Mar", income: 60000, expense: 35000 },
      { month: "Apr", income: 65000, expense: 38000 },
    ],
  };

  const handleExportPDF = () => {
    alert("Exporting to PDF...");
  };

  const handleExportExcel = () => {
    alert("Exporting to Excel...");
  };

  return (
    <div className="user-reports">
      <div className="user-section-header">
        <h1>Reports & Analytics</h1>
        <div className="user-report-controls">
          <select
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
          >
            <option value="summary">Summary</option>
            <option value="category">Category-wise</option>
            <option value="project">Project-wise</option>
            <option value="monthly">Monthly</option>
          </select>

          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
            <option value="year">This Year</option>
          </select>

          <button className="user-btn-secondary" onClick={handleExportPDF}>
            Export PDF
          </button>
          <button className="user-btn-secondary" onClick={handleExportExcel}>
            Export Excel
          </button>
        </div>
      </div>

      {reportType === "summary" && (
        <div className="user-report-section">
          <div className="user-summary-cards">
            <div className="user-summary-card user-income">
              <h3>Total Income</h3>
              <p className="user-amount">₹{reportData.totalIncome}</p>
            </div>
            <div className="user-summary-card user-expense">
              <h3>Total Expense</h3>
              <p className="user-amount">₹{reportData.totalExpense}</p>
            </div>
            <div className="user-summary-card user-balance">
              <h3>Balance</h3>
              <p className="user-amount">₹{reportData.balance}</p>
            </div>
          </div>
        </div>
      )}

      {reportType === "category" && (
        <div className="user-report-section">
          <h2>Category-wise Expense Distribution</h2>
          <table className="user-report-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Amount</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tbody>
              {reportData.categoryWise.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.category}</td>
                  <td>₹{item.amount}</td>
                  <td>
                    <div className="user-progress-bar">
                      <div
                        className="user-progress-fill"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    {item.percentage}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {reportType === "project" && (
        <div className="user-report-section">
          <h2>Project-wise Income & Expense Summary</h2>
          <table className="user-report-table">
            <thead>
              <tr>
                <th>Project</th>
                <th>Income</th>
                <th>Expense</th>
                <th>Net</th>
              </tr>
            </thead>
            <tbody>
              {reportData.projectWise.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.project}</td>
                  <td>₹{item.income}</td>
                  <td>₹{item.expense}</td>
                  <td>₹{item.income - item.expense}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {reportType === "monthly" && (
        <div className="user-report-section">
          <h2>Monthly Statistics</h2>
          <table className="user-report-table">
            <thead>
              <tr>
                <th>Month</th>
                <th>Income</th>
                <th>Expense</th>
                <th>Net</th>
              </tr>
            </thead>
            <tbody>
              {reportData.monthlyData.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.month}</td>
                  <td>₹{item.income}</td>
                  <td>₹{item.expense}</td>
                  <td>₹{item.income - item.expense}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
