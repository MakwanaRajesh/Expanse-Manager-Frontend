import React, { useState } from "react";
import "./Login.css";
import Image from "../assets/Image.jpg";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "Rajesh@gmail.com" && password === "Rajesh@123") {
      alert("Login Successful");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-form-section">
          <h2 className="login-title">Expense Management</h2>

          {isLogin ? (
            <form className="login-form" onSubmit={handleSubmit}>
              <label className="login-label">Role :</label>
              <div className="login-role-selection">
                <label>
                  <input
                    type="radio"
                    name="role"
                    value="Admin"
                    onChange={(e) => setRole(e.target.value)}
                  />
                  Admin
                </label>
                <label>
                  <input
                    type="radio"
                    name="role"
                    value="User"
                    onChange={(e) => setRole(e.target.value)}
                  />
                  User
                </label>
              </div>

              <label className="login-label">Email :</label>
              <input type="email" required />

              <label className="login-label">Password :</label>
              <input type="password" required />

              <button type="submit">Login</button>
              <p>
                Don't Have Account{" "}
                <span
                  className="login-span"
                  onClick={() => setIsLogin(false)}
                >
                  CLICK HERE
                </span>
              </p>
            </form>
          ) : (
            <form className="login-form">
              <label className="login-label">User FullName :</label>
              <input type="text" required />

              <label className="login-label">Mobile No :</label>
              <input
                type="text"
                pattern="\d{10}"
                maxLength={10}
                minLength={10}
                required
              />

              <label className="login-label">Email :</label>
              <input type="email" required />

              <label className="login-label">Password :</label>
              <input type="password" required />

              <label className="login-label">Confirm Password :</label>
              <input type="password" required />

              <button>Confirm</button>

              <p>
                Already Have Account{" "}
                <span
                  className="login-span"
                  onClick={() => setIsLogin(true)}
                >
                  CLICK HERE
                </span>
              </p>
            </form>
          )}
        </div>

        {/* Image on Right Side */}
        <div className="login-image-section">
          <img src={Image} alt="Expense" />
        </div>
      </div>
    </div>
  );
}

export default Login;
