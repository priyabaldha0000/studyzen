import React from "react";
import { useNavigate } from "react-router-dom";
// import "../styles.css";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="register-container">
      <h2 className="register-title">Create Your Account</h2>
      <p className="register-subtitle">Choose your role to continue</p>

      <div className="register-cards">
        {/* Student Card */}
        <div className="register-card" onClick={() => navigate("/register-student")}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
            alt="Student"
            className="register-icon"
          />
          <h3>Student</h3>
          <p>Access courses, materials, and track your progress</p>
          <button className="register-btn">Register as Student</button>
        </div>

        {/* Teacher Card */}
        <div className="register-card" onClick={() => navigate("/register-teacher")}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/921/921347.png"
            alt="Teacher"
            className="register-icon"
          />
          <h3>Teacher</h3>
          <p>Create content, manage classes and interact with students</p>
          <button className="register-btn">Register as Teacher</button>
        </div>
      </div>
    </div>
  );
};

export default Register;