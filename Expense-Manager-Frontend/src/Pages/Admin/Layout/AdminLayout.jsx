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
    <div className="admin-layout">
      {/* --- Sidebar --- */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar-header">
          <h2>Expense Manager</h2>
        </div>

        <nav className="admin-sidebar-nav">
          {adminMenuItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === "/admin"}
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="admin-sidebar-footer">
          <div className="admin-user-info">
            <FaUserCircle className="admin-user-avatar" />
            <span>{userName}</span>
          </div>
          <button onClick={handleLogout} className="admin-btn-logout">
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* --- Main Content Area --- */}
      <main className="admin-main-content">
        {/* The Outlet renders the matched child route's component here */}
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;