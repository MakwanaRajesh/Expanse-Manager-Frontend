import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaProjectDiagram,
  FaUsers,
  FaTags,
  FaMoneyBillWave,
  FaChartBar,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";
import "./AdminLayout.css";

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const adminMenuItems = [
    { label: "Dashboard", href: "/admin", icon: <FaTachometerAlt /> },
    { label: "Project", href: "/admin/project", icon: <FaProjectDiagram /> },
    { label: "Users", href: "/admin/users", icon: <FaUsers /> },
    { label: "Categories", href: "/admin/categories", icon: <FaTags /> },
    { label: "Expenses", href: "/admin/expenses", icon: <FaMoneyBillWave /> },
    { label: "Reports", href: "/admin/reports", icon: <FaChartBar /> },
  ];

  const userName = JSON.parse(localStorage.getItem("user"))?.name || "Admin";

  return (
    <div className="ad-layout">
      <aside className="ad-sidebar">
        <div className="ad-sidebar-header">
          <h2>Expense Manager</h2>
        </div>

        <nav className="ad-sidebar-nav">
          {adminMenuItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === "/admin"}
              className={({ isActive }) =>
                isActive ? "ad-nav-item active" : "ad-nav-item"
              }
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="ad-sidebar-footer">
          <div className="ad-user-info">
            <FaUserCircle className="ad-user-avatar" />
            <span>{userName}</span>
          </div>
          <button onClick={handleLogout} className="ad-btn-logout">
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      <main className="ad-main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
