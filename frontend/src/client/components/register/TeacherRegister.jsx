import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import api from "../api/axios";
// import "../styles.css";

const TeacherRegister = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    qualification: "",
    age: "",
    gender: "",
    teacher_image: "",
    password: "",
    confirmPassword: "",
  });

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (Number(formData.age) < 20 || Number(formData.age) > 70) {
      alert("Age must be between 20 and 70.");
      return;
    }

    try {
      const {
        name,
        email,
        qualification,
        age,
        gender,
        teacher_image,
        password,
      } = formData;

      const payload = {
        name,
        email,
        qualification,
        age: Number(age),
        gender,
        teacher_image,
        password,
        role: "TEACHER", // backend defaults to this, but explicit here for clarity
      };

      await api.post("/auth/register-teacher", payload); // Make sure your backend has this route
      alert("Teacher registered successfully! Please login.");
      navigate("/login");
    } catch (err) {
      const msg = err.response?.data?.message || "Registration failed";
      alert(msg);
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2>Teacher Registration</h2>
        <form onSubmit={handleSubmit} className="form">
          {/* Name */}
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Qualification */}
          <div className="form-group">
            <label>Qualification</label>
            <input
              type="text"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              required
            />
          </div>

          {/* Age */}
          <div className="form-group">
            <label>Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>

          {/* Gender */}
          <div className="form-group">
            <label>Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Teacher Image (URL or file path) */}
          <div className="form-group">
            <label>Profile Image (URL)</label>
            <input
              type="text"
              name="teacher_image"
              value={formData.teacher_image}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn">Register</button>
        </form>

        <p className="redirect-text">
          Already have an account?{" "}
          <span className="link" onClick={() => navigate("/login")}>
            Login here
          </span>
        </p>

        <p className="redirect-text">
          Register as{" "}
          <span className="link" onClick={() => navigate("/register-student")}>
            Student
          </span>
        </p>
      </div>
    </div>
  );
};

export default TeacherRegister;