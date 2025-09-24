import * as React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import MessageSnackbar from "../../../basic utility components/snackbar/MessageSnackbar";

export default function Login() {
  const navigate = useNavigate();

  const [message, setMessage] = React.useState("");
  const [messageType, setMessageType] = React.useState("success");
  const handleMessageClose = () => setMessage("");

  const Formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: async (values) => {
      try {
        const resp = await axios.post("http://localhost:5000/api/school/login", values);
        if (resp.data.success) {
          setMessage(resp.data.message);
          setMessageType("success");
          localStorage.setItem("token", resp.data.user.token);
          localStorage.setItem("user", JSON.stringify(resp.data.user));
          setTimeout(() => navigate(resp.data.user.redirect || "/"), 1000);
        }
      } catch (error) {
        setMessage(error.response?.data?.message || "Login failed. Please try again.");
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

      {/* ================ Start Banner Area ================= */}
      <section className="banner-area">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 banner-right">
              <h1 className="text-white">Login</h1>
              <p className="mx-auto text-white mt-20 mb-40">
                Access your account to start learning.
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
                className="form-area contact-form" //text-right p-4 shadow bg-white
                style={{ borderRadius: "8px" }}
                onSubmit={Formik.handleSubmit}
                noValidate
              >
                <h2 className="mb-4 text-center">Login to StudyZen</h2>

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
                  Login
                </button>

                <p className="mt-3 text-center">
                  Don’t have an account?{" "}
                  <Link to="/register" className="text-primary">
                    Register here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}