import React, { useState, useRef } from "react";
import { useFormik } from "formik";
// import { registerSchema } from "../../../yupSchema/registerSchema";
import axios from "axios";
import MessageSnackbar from "../../../basic utility components/snackbar/MessageSnackbar";

export default function StudentRegister() {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const fileInputRef = useRef(null);

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");
  const handleMessageClose = () => setMessage("");

  const addImage = (e) => {
    const selected = e.target.files[0];
    setImageUrl(selected ? URL.createObjectURL(selected) : null);
    setFile(selected);
  };

  const handleClearFile = () => {
    if (fileInputRef.current) fileInputRef.current.value = "";
    setFile(null);
    setImageUrl(null);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      student_class: "",
      age: "",
      gender: "",
      guardian: "",
      guardian_phone: "",
      schoolId: "", // This is crucial for linking student to school
    },
    // validationSchema: registerSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const fd = new FormData();
        if (file) fd.append("image", file, file.name);
        Object.keys(values).forEach(key => {
            if (key !== "confirm_password") {
                fd.append(key, values[key]);
            }
        });

        const resp = await axios.post("http://localhost:5000/api/student/register", fd);
        setMessage(resp.data.message);
        setMessageType("success");
        resetForm();
        handleClearFile();
      } catch (e) {
        console.error("Error", e);
        setMessage(e.response?.data?.message || "Registration failed. Please try again.");
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
                <h2 className="mb-4 text-center">Student Register</h2>

                {/* Image upload */}
                <div className="form-group text-left mb-3">
                  <label className="mb-2">Add Picture</label>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={addImage}
                    className="form-control"
                  />
                  {imageUrl && (
                    <div className="mt-3">
                      <img
                        src={imageUrl}
                        alt="Preview"
                        style={{ maxHeight: "200px", borderRadius: "8px" }}
                      />
                    </div>
                  )}
                </div>

                {/* Name */}
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Student Name"
                    className="common-input mb-20 form-control"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>

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

                {/* Confirm Password */}
                <div className="form-group">
                  <input
                    type="password"
                    name="confirm_password"
                    placeholder="Confirm Password"
                    className="common-input mb-20 form-control"
                    value={formik.values.confirm_password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>

                {/* Class */}
                <div className="form-group">
                  <input
                    type="text"
                    name="student_class"
                    placeholder="Class"
                    className="common-input mb-20 form-control"
                    value={formik.values.student_class}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>

                {/* Age */}
                <div className="form-group">
                  <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    className="common-input mb-20 form-control"
                    value={formik.values.age}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                
                {/* Gender */}
                <div className="form-group">
                  <select
                    name="gender"
                    className="common-input mb-20 form-control"
                    value={formik.values.gender}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Guardian Name */}
                <div className="form-group">
                  <input
                    type="text"
                    name="guardian"
                    placeholder="Guardian Name"
                    className="common-input mb-20 form-control"
                    value={formik.values.guardian}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>

                {/* Guardian Phone */}
                <div className="form-group">
                  <input
                    type="text"
                    name="guardian_phone"
                    placeholder="Guardian Phone"
                    className="common-input mb-20 form-control"
                    value={formik.values.guardian_phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>

                {/* School ID (Hidden or filled from context) */}
                <div className="form-group">
                  <input
                    type="text"
                    name="schoolId"
                    placeholder="School ID"
                    className="common-input mb-20 form-control"
                    value={formik.values.schoolId}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>

                <button type="submit" className="btn primary-btn" style={{ float: "right" }}>
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}