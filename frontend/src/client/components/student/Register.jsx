import * as React from "react";
import { useFormik } from "formik";
import axios from "axios";
import MessageSnackbar from "../../../basic utility components/snackbar/MessageSnackbar";

export default function StudentRegister() {
  const [file, setFile] = React.useState(null);
  const [imageUrl, setImageUrl] = React.useState(null);
  const fileInputRef = React.useRef(null);

  const [message, setMessage] = React.useState("");
  const [messageType, setMessageType] = React.useState("success");
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

  const Formik = useFormik({
    initialValues: {
      school: "",
      name: "",
      email: "",
      student_class: "",
      age: "",
      gender: "",
      guardian: "",
      guardian_phone: "",
      password: "",
      confirm_password: "",
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const fd = new FormData();
        if (file) fd.append("student_image", file, file.name);

        // append all other form values
        Object.keys(values).forEach((key) => {
          if (key !== "confirm_password") fd.append(key, values[key]);
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

      <section style={{ paddingTop: "120px", minHeight: "100vh" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <form
                className="form-area contact-form"
                style={{ borderRadius: "8px" }}
                onSubmit={Formik.handleSubmit}
                noValidate
              >
                <h2 className="mb-4 text-center">Register Student</h2>

                {/* Image upload */}
                <div className="form-group mb-3">
                  <label className="mb-2">Add Student Picture</label>
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

                {/* School ID */}
                <div className="form-group mb-3">
                  <input
                    type="text"
                    name="school"
                    placeholder="School ID"
                    className="form-control"
                    value={Formik.values.school}
                    onChange={Formik.handleChange}
                  />
                </div>

                {/* Name */}
                <div className="form-group mb-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Student Name"
                    className="form-control"
                    value={Formik.values.name}
                    onChange={Formik.handleChange}
                  />
                </div>

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

                {/* Class */}
                <div className="form-group mb-3">
                  <input
                    type="text"
                    name="student_class"
                    placeholder="Class"
                    className="form-control"
                    value={Formik.values.student_class}
                    onChange={Formik.handleChange}
                  />
                </div>

                {/* Age */}
                <div className="form-group mb-3">
                  <input
                    type="text"
                    name="age"
                    placeholder="Age"
                    className="form-control"
                    value={Formik.values.age}
                    onChange={Formik.handleChange}
                  />
                </div>

                {/* Gender */}
                <div className="form-group mb-3">
                  <input
                    type="text"
                    name="gender"
                    placeholder="Gender"
                    className="form-control"
                    value={Formik.values.gender}
                    onChange={Formik.handleChange}
                  />
                </div>

                {/* Guardian */}
                <div className="form-group mb-3">
                  <input
                    type="text"
                    name="guardian"
                    placeholder="Guardian Name"
                    className="form-control"
                    value={Formik.values.guardian}
                    onChange={Formik.handleChange}
                  />
                </div>

                {/* Guardian Phone */}
                <div className="form-group mb-3">
                  <input
                    type="text"
                    name="guardian_phone"
                    placeholder="Guardian Phone"
                    className="form-control"
                    value={Formik.values.guardian_phone}
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

                {/* Confirm Password */}
                <div className="form-group mb-3">
                  <input
                    type="password"
                    name="confirm_password"
                    placeholder="Confirm Password"
                    className="form-control"
                    value={Formik.values.confirm_password}
                    onChange={Formik.handleChange}
                  />
                </div>

                <button type="submit" className="btn primary-btn float-right">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
