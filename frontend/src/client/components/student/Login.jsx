import * as React from "react";
import { useFormik } from "formik";
import axios from "axios";
import MessageSnackbar from "../../../basic utility components/snackbar/MessageSnackbar";

export default function StudentLogin() {
  const [message, setMessage] = React.useState("");
  const [messageType, setMessageType] = React.useState("success");
  const handleMessageClose = () => setMessage("");

  const Formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const resp = await axios.post("http://localhost:5000/api/student/login", values);

        setMessage(resp.data.message);
        setMessageType("success");

        // store token and user data in localStorage/sessionStorage if needed
        localStorage.setItem("studentToken", resp.data.user.token);
        localStorage.setItem("studentData", JSON.stringify(resp.data.user));

        // redirect or update UI after login
        console.log("Logged in student:", resp.data.user);

      } catch (e) {
        console.error("Login Error", e);
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

      <section style={{ paddingTop: "120px", minHeight: "100vh" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <form
                className="form-area contact-form"
                style={{ borderRadius: "8px" }}
                onSubmit={Formik.handleSubmit}
                noValidate
              >
                <h2 className="mb-4 text-center">Student Login</h2>

                {/* Email */}
                <div className="form-group mb-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    value={Formik.values.email}
                    onChange={Formik.handleChange}
                  />
                </div>

                {/* Password */}
                <div className="form-group mb-3">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                    value={Formik.values.password}
                    onChange={Formik.handleChange}
                  />
                </div>

                <button type="submit" className="btn primary-btn float-right">
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
