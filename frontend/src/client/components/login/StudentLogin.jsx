import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import MessageSnackbar from "../../../basic utility components/snackbar/MessageSnackbar";

export default function StudentLogin() {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");
  const handleMessageClose = () => setMessage("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const resp = await axios.post("http://localhost:5000/api/student/login", values);
        setMessage(resp.data.message);
        setMessageType("success");
        // Handle successful login (e.g., store token, redirect)
        localStorage.setItem("token", resp.data.user.token);
        console.log("Logged in student:", resp.data.user);
        resetForm();
      } catch (e) {
        console.error("Error", e);
        setMessage(e.response?.data?.message || "Login failed. Please try again.");
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
      
      <section className="contact-page-area section-gap" style={{ paddingTop: "120px", minHeight: "100vh" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <form
                className="form-area contact-form"
                style={{ borderRadius: "8px" }}
                onSubmit={formik.handleSubmit}
                noValidate
              >
                <h2 className="mb-4 text-center">Student Login</h2>
                
                {/* Email */}
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="common-input mb-20 form-control"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>

                {/* Password */}
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="common-input mb-20 form-control"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>

                <button type="submit" className="btn primary-btn" style={{ float: "right" }}>
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}