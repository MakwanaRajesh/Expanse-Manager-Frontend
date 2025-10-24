import { Link, useNavigate } from "react-router-dom";
import "./UserLayout.css";

const Sidebar = ({ role }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const userMenuItems = [
    { label: "Dashboard", href: "/user-dashboard" },
    { label: "Expenses", href: "/expenses" },
    { label: "Categories", href: "/categories" },
    { label: "Reports", href: "/reports" },
  ];

  const adminMenuItems = [
    { label: "Dashboard", href: "/admin-dashboard" },
    { label: "Projects", href: "/projects" },
    { label: "Users", href: "/users" },
    { label: "Categories", href: "/categories" },
    { label: "Expenses", href: "/expenses" },
    { label: "Reports", href: "/reports" },
  ];

  const menuItems = role === "admin" ? adminMenuItems : userMenuItems;

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Expense Manager</h2>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <Link key={item.href} to={item.href} className="nav-item">
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button onClick={handleLogout} className="btn-logout">
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
