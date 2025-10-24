import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./LoginPage/Login";
// Admin
import AdminDashboard from './Pages/Admin/Dashboard/AdminDashboard';
import AdminLayout from "./Pages/Admin/Layout/AdminLayout";
import ProjectManagement from "./Pages/Admin/Project/ProjectManagement";
import UserManagement from "./Pages/Admin/User/UserManagement";
import CategoryManagement from "./Pages/Admin/Category/CategoryManagement";
import ExpenseManagement from "./Pages/Admin/Expense/ExpenseManagement";
import Reports from "./Pages/Admin/Reports/Reports";


// User
import UserDashboard from './Pages/User/Dashboard/UserDashboard';
import UserLayout from "./Pages/User/Layout/UserLayout";
import UserExpenseManagement from "./Pages/User/Expense/UserExpenseManagement";
import UserCategoryManagement from "./Pages/User/Category/UserCategoryManagement";
import UserReports from "./Pages/User/Reports/UserReports";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />

      {/* Admin Pages */}
      <Route path="Admin" element={<AdminLayout />} >
        <Route index element={<AdminDashboard />} />
        <Route path="project" element={<ProjectManagement />} />
        <Route path="users" element={<UserManagement />} />
        <Route path="categories" element={<CategoryManagement />} />
        <Route path="expenses" element={<ExpenseManagement />} />
        <Route path="reports" element={<Reports />} />
      </Route>

      {/* 
        <Route path="/admin" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} /> */}


      {/* User Pages */}
      <Route path="user" element={<UserLayout />} >
        <Route index element={<UserDashboard />} />
        <Route path="expense" element={<UserExpenseManagement />} />
        <Route path="categories" element={<UserCategoryManagement />} />
        <Route path="reports" element={<UserReports />} />
      </Route>



    </Routes>
  );
}

export default App;
