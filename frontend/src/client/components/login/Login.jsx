import * as React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import MessageSnackbar from "../../../basic utility components/snackbar/MessageSnackbar";

// =========================================================
// Define the base URL map for each role
// This ensures the correct API endpoint is hit on submission
// =========================================================
const ROLE_API_MAP = {
  SCHOOL: "school",
  TEACHER: "teacher",
  STUDENT: "student",
};

export default function Login() {
  const navigate = useNavigate();

  const [message, setMessage] = React.useState("");
  const [messageType, setMessageType] = React.useState("success");
  const handleMessageClose = () => setMessage("");
  
  // State for the selected role to control the API endpoint
  const [selectedRole, setSelectedRole] = React.useState("SCHOOL"); // Default to School

  const Formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: async (values) => {
      // 1. Get the correct API path based on the selected role
      const apiPath = ROLE_API_MAP[selectedRole];
      if (!apiPath) {
        setMessage("Invalid role selected.");
        setMessageType("error");
        return;
      }
      
      const endpoint = `http://localhost:5000/api/${apiPath}/login`;

      try {
        // 2. Make the API call to the role-specific endpoint
        const resp = await axios.post(endpoint, values);
        
        if (resp.data.success) {
          setMessage(resp.data.message);
          setMessageType("success");
          
          // 3. Store the token and user data (including the 'role')
          localStorage.setItem("token", resp.data.user.token);
          localStorage.setItem("user", JSON.stringify(resp.data.user));
          
          // 4. Redirect based on the response (which should contain the role-specific redirect path)
          setTimeout(() => navigate(resp.data.user.redirect || "/"), 1000);
        }
      } catch (error) {
        // Check for common error structure from your Node.js backend
        setMessage(error.response?.data?.message || "Login failed. Please check credentials and role.");
        setMessageType("error");
      }
    },
  });

  return (
    <>
      {message && (
        <MessageSnackbar
          message={message}
          type={messageType}
          handleClose={handleMessageClose}
        />
      )}

      {/* ================ Start Banner Area (No Change) ================= */}
      <section className="banner-area">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 banner-right">
              <h1 className="text-white">Role-Based Login</h1>
              <p className="mx-auto text-white mt-20 mb-40">
                Access your account as a School, Teacher, or Student.
              </p>
              <div className="link-nav">
                <span className="box">
                  <Link to="/">Home </Link>
                  <i className="lnr lnr-arrow-right"></i>
                  <Link to="/login">Login</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================ End Banner Area ================= */}

      <section
        className="contact-page-area section-gap"
        style={{ paddingTop: "120px", minHeight: "10vh" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <form
                className="form-area contact-form"
                style={{ borderRadius: "8px" }}
                onSubmit={Formik.handleSubmit}
                noValidate
              >
                <h2 className="mb-4 text-center">Login to StudyZen</h2>

                {/* ======================================================== */}
                {/* 1. ROLE SELECTION FIELD (NEW) */}
                {/* ======================================================== */}
                <div className="form-group">
                  <select
                    id="role"
                    name="role"
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="common-input mb-20 form-control"
                    required
                  >
                    <option value="SCHOOL">School Administrator</option>
                    <option value="TEACHER">Teacher</option>
                    <option value="STUDENT">Student</option>
                  </select>
                </div>
                {/* ======================================================== */}

                {/* Email */}
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={Formik.values.email}
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur}
                    placeholder="Enter your email"
                    className={`common-input mb-20 form-control ${
                      Formik.touched.email && Formik.errors.email ? "is-invalid" : ""
                    }`}
                    required
                  />
                  {Formik.touched.email && Formik.errors.email && (
                    <div className="invalid-feedback">{Formik.errors.email}</div>
                  )}
                </div>

                {/* Password */}
                <div className="form-group">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={Formik.values.password}
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur}
                    placeholder="Enter your password"
                    className={`common-input mb-20 form-control ${
                      Formik.touched.password && Formik.errors.password
                        ? "is-invalid"
                        : ""
                    }`}
                    required
                  />
                  {Formik.touched.password && Formik.errors.password && (
                    <div className="invalid-feedback">{Formik.errors.password}</div>
                  )}
                </div>

                <button className="btn primary-btn" style={{ float: "right" }} type="submit">
                  Login as {selectedRole.charAt(0) + selectedRole.slice(1).toLowerCase()}
                </button>

                <p className="mt-3 text-center">
                  Don’t have a **School** account?{" "}
                  <Link to="/register" className="text-primary">
                    Register here
                  </Link>
                  <br/>
                  <small>Teachers/Students are added by the School.</small>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}