import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaWallet,
  FaListAlt,
  FaChartLine,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";
import "./UserLayout.css";

const UserLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const userMenuItems = [
    { label: "Dashboard", href: "/user", icon: <FaTachometerAlt /> },
    { label: "My Expenses", href: "/user/expense", icon: <FaWallet /> },
    { label: "My Categories", href: "/user/categories", icon: <FaListAlt /> },
    { label: "Reports", href: "/user/reports", icon: <FaChartLine /> },
  ];

  const userName = JSON.parse(localStorage.getItem("user"))?.name || "User";

  return (
    <div className="user-layout">
      <aside className="user-sidebar">
        <div className="user-sidebar-header">
          <h2>Expense Tracker</h2>
        </div>

        <nav className="user-sidebar-nav">
          {userMenuItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === "/user"}
              className={({ isActive }) =>
                isActive ? "user-nav-item user-active" : "user-nav-item"
              }
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="user-sidebar-footer">
          <div className="user-info">
            <FaUserCircle className="user-avatar" />
            <span>{userName}</span>
          </div>
          <button onClick={handleLogout} className="user-btn-logout">
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      <main className="user-main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;
