import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Image from "../assets/Image.jpg";
import { api } from "../api/auth";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!role) {
    alert("Please select a role");
    return;
  }

  try {
    const { data } = await api.post("/login", {
      emailAddress: email,
      password: password,
    });

    if (!data?.token) {
      setError("No authentication token received");
      return;
    }

    if (!data?.user || !data.user.role) {
      setError("User role not found in response");
      return;
    }

    if (data.user.role.toLowerCase() !== role.toLowerCase()) {
      setError(`Selected role (${role}) does not match your account role (${data.user.role})`);
      return;
    }

    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.user.role);
    localStorage.setItem("user", JSON.stringify(data.user));

    navigate(`/${data.user.role.toLowerCase()}`);
  } catch (err) {
    console.error("Login error:", err);
    setError(
      err.response?.data?.message ||
      err.response?.data ||
      "Login failed. Please check your credentials."
    );
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
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

              <label className="login-label">Password :</label>
              <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} required />

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



// import React, { useState } from "react";
// import "./Login.css";
// import { useNavigate } from "react-router-dom";
// import Image from "../assets/Image.jpg";
// import { api } from "../api/auth";

// function Login() {
//   const [isLogin, setIsLogin] = useState(true);
//   const [role, setRole] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Registration states
//   const [fullName, setFullName] = useState("");
//   const [mobileNo, setMobileNo] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!role) {
//       setError("Please select role");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       console.log("🔐 Sending login request...", { 
//         emailAddress: email, 
//         role: role 
//       });
      
//       const response = await api.post("/login", {
//         emailAddress: email,
//         password: password,
//       });
      
//       console.log("✅ Login response:", response.data);

//       // Extract data from the response
//       const { token, user } = response.data;

//       if (!token) {
//         setError("No authentication token received");
//         return;
//       }

//       if (!user || !user.role) {
//         setError("No user role received");
//         return;
//       }

//       const userRole = user.role;

//       // Check if selected role matches the user's role
//       if (userRole.toLowerCase() !== role.toLowerCase()) {
//         setError(`Selected role (${role}) does not match your account role (${userRole}).`);
//         return;
//       }

//       // Store authentication data
//       localStorage.setItem("token", token);
//       localStorage.setItem("role", userRole);
//       localStorage.setItem("user", JSON.stringify(user));

//       console.log("🎉 Login successful!");
//       console.log("📍 User:", user.userName);
//       console.log("📍 Role:", userRole);
//       console.log("📍 Navigating to:", `/${userRole.toLowerCase()}`);

//       // Navigate to the appropriate dashboard
//       navigate(`/${userRole.toLowerCase()}`);

//     } catch (err) {
//       console.error("❌ Login error:", err);
      
//       if (err.response) {
//         console.log("❌ Error response status:", err.response.status);
//         console.log("❌ Error response data:", err.response.data);
        
//         const errorData = err.response.data;
//         const errorMessage = 
//           errorData.message ||
//           errorData.error ||
//           (typeof errorData === 'string' ? errorData : "Login failed");
        
//         setError(errorMessage);
//       } else if (err.request) {
//         setError("Cannot connect to server. Please check if the backend is running.");
//       } else {
//         setError("Login failed: " + err.message);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     if (mobileNo.length !== 10) {
//       setError("Mobile number must be 10 digits");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       const response = await api.post("/register", {
//         userName: fullName,
//         mobileNo: mobileNo,
//         emailAddress: email,
//         password: password,
//         role: "User"
//       });

//       console.log("Registration response:", response.data);

//       if (response.data.token) {
//         localStorage.setItem("token", response.data.token);
//         localStorage.setItem("role", response.data.user.role);
//         localStorage.setItem("user", JSON.stringify(response.data.user));
        
//         alert("Registration successful! Redirecting to dashboard.");
//         navigate(`/${response.data.user.role.toLowerCase()}`);
//       } else {
//         setError("Registration completed. Please login with your credentials.");
//         setIsLogin(true);
//         setFullName("");
//         setMobileNo("");
//         setEmail("");
//         setPassword("");
//         setConfirmPassword("");
//       }

//     } catch (err) {
//       console.error("Registration error:", err);
      
//       if (err.response) {
//         setError(err.response.data?.message || err.response.data || "Registration failed");
//       } else if (err.request) {
//         setError("No response from server. Please check if backend is running.");
//       } else {
//         setError("Registration failed: " + err.message);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-content">
//         <div className="login-form-section">
//           <h2 className="login-title">Expense Management</h2>

//           {error && (
//             <div className="error-message">
//               {error}
//             </div>
//           )}

//           {isLogin ? (
//             <form className="login-form" onSubmit={handleLogin}>
//               <label className="login-label">Role :</label>
//               <div className="login-role-selection">
//                 <label>
//                   <input
//                     type="radio"
//                     name="role"
//                     value="Admin"
//                     checked={role === "Admin"}
//                     onChange={(e) => setRole(e.target.value)}
//                   />
//                   Admin
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="role"
//                     value="User"
//                     checked={role === "User"}
//                     onChange={(e) => setRole(e.target.value)}
//                   />
//                   User
//                 </label>
//               </div>

//               <label className="login-label">Email :</label>
//               <input 
//                 type="email" 
//                 value={email} 
//                 onChange={(e) => setEmail(e.target.value)} 
//                 required 
//                 disabled={loading}
//               />

//               <label className="login-label">Password :</label>
//               <input 
//                 type="password" 
//                 value={password} 
//                 onChange={(e) => setPassword(e.target.value)} 
//                 required 
//                 disabled={loading}
//               />

//               <button type="submit" disabled={loading}>
//                 {loading ? "Logging in..." : "Login"}
//               </button>
//               <p>
//                 Don't Have Account{" "}
//                 <span
//                   className="login-span"
//                   onClick={() => !loading && setIsLogin(false)}
//                 >
//                   CLICK HERE
//                 </span>
//               </p>
//             </form>
//           ) : (
//             <form className="login-form" onSubmit={handleRegister}>
//               <label className="login-label">User FullName :</label>
//               <input 
//                 type="text" 
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
//                 required 
//                 disabled={loading}
//               />

//               <label className="login-label">Mobile No :</label>
//               <input
//                 type="text"
//                 value={mobileNo}
//                 onChange={(e) => setMobileNo(e.target.value.replace(/\D/g, '').slice(0, 10))}
//                 pattern="\d{10}"
//                 maxLength={10}
//                 minLength={10}
//                 required
//                 disabled={loading}
//               />

//               <label className="login-label">Email :</label>
//               <input 
//                 type="email" 
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required 
//                 disabled={loading}
//               />

//               <label className="login-label">Password :</label>
//               <input 
//                 type="password" 
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required 
//                 disabled={loading}
//               />

//               <label className="login-label">Confirm Password :</label>
//               <input 
//                 type="password" 
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 required 
//                 disabled={loading}
//               />

//               <button type="submit" disabled={loading}>
//                 {loading ? "Registering..." : "Register"}
//               </button>

//               <p>
//                 Already Have Account{" "}
//                 <span
//                   className="login-span"
//                   onClick={() => !loading && setIsLogin(true)}
//                 >
//                   CLICK HERE
//                 </span>
//               </p>
//             </form>
//           )}
//         </div>

//         {/* Image on Right Side */}
//         <div className="login-image-section">
//           <img src={Image} alt="Expense" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;