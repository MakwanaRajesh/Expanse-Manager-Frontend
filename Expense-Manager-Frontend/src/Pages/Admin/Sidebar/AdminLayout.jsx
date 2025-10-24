// Sidebar.jsx (Admin Sidebar Only)
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./AdminLayout.css";

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const adminMenuItems = [
    { label: "Dashboard", href: "/admin" },
    { label: "Projects", href: "/admin/projects" },
    { label: "Users", href: "/admin/users" },
    { label: "Categories", href: "/admin/categories" },
    { label: "Expenses", href: "/admin/expenses" },
    { label: "Reports", href: "/admin/reports" },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Expense Manager</h2>
      </div>

      <nav className="sidebar-nav">
        {adminMenuItems.map((item) => (
          <Link key={item.href} to={item.href} className="nav-item">
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button onClick={handleLogout} className="btn-logout">
          Logout
        </button>
        <Outlet />
      </div>
      
    </aside>
  );
};

export default AdminLayout;
