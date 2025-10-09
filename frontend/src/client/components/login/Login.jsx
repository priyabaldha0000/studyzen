import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import api from "../api/axios";
// import "../styles.css";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "student", // default role
  });

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password, role } = formData;
      const res = await api.post("/auth/login", { email, password, role });

      // Save data to localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userRole", res.data.user.role);
      localStorage.setItem("email", res.data.user.email);

      alert("Login successful!");

      // Navigate to appropriate dashboard
      setTimeout(() => {
        if (res.data.user.role === "student") {
          navigate("/student/dashboard");
        } else if (res.data.user.role === "teacher") {
          navigate("/teacher/dashboard");
        } else {
          alert("Unknown user role");
        }
      }, 100);
    } catch (err) {
      const msg = err.response?.data?.message || "Login failed";
      alert(msg);
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="form-box">
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Login As:</label>
            <select name="role" value={formData.role} onChange={handleChange}>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button type="submit" className="btn">Login</button>
        </form>

        <p>
          Don’t have an account?{" "}
          <span className="link" onClick={() => navigate("/register")}>
            Register here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;