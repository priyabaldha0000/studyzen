import * as React from "react";
import { useFormik } from "formik";
// import { registerSchema } from "../../../yupSchema/registerSchema";
import axios from "axios";
import MessageSnackbar from "../../../basic utility components/snackbar/MessageSnackbar";


export default function Register() {
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
      school_name: "",
      email: "",
      owner_name: "",
      password: "",
      confirm_password: "",
    },
    // validationSchema: registerSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const fd = new FormData();
        if (file) fd.append("image", file, file.name);
        fd.append("school_name", values.school_name);
        fd.append("email", values.email);
        fd.append("owner_name", values.owner_name);
        fd.append("password", values.password);

        const resp = await axios.post("http://localhost:5000/api/school/register", fd);
        setMessage(resp.data.message);
        setMessageType("success");
        resetForm();
        handleClearFile();
      } catch (e) {
        console.error("Error", e);
        setMessage("Registration failed. Please try again.");
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

      <section
        className="contact-page-area section-gap"
        style={{ paddingTop: "120px", minHeight: "100vh" }}
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
                <h2 className="mb-4 text-center">Register</h2>

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

                {/* School Name */}
                <div className="form-group">
                  <input
                    type="text"
                    name="school_name"
                    placeholder="Name"
                    className={`common-input mb-20 form-control ${
                      Formik.touched.school_name && Formik.errors.school_name
                        ? "is-invalid"
                        : ""
                    }`}
                    value={Formik.values.school_name}
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur}
                  />
                  {Formik.touched.school_name && Formik.errors.school_name && (
                    <div className="invalid-feedback">
                      {Formik.errors.school_name}
                    </div>
                  )}
                </div>

                {/* Email */}
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={`common-input mb-20 form-control ${
                      Formik.touched.email && Formik.errors.email ? "is-invalid" : ""
                    }`}
                    value={Formik.values.email}
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur}
                  />
                  {Formik.touched.email && Formik.errors.email && (
                    <div className="invalid-feedback">{Formik.errors.email}</div>
                  )}
                </div>

                {/* Owner Name */}
                <div className="form-group">
                  <input
                    type="text"
                    name="owner_name"
                    placeholder="Div"
                    className={`common-input mb-20 form-control ${
                      Formik.touched.owner_name && Formik.errors.owner_name
                        ? "is-invalid"
                        : ""
                    }`}
                    value={Formik.values.owner_name}
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur}
                  />
                  {Formik.touched.owner_name && Formik.errors.owner_name && (
                    <div className="invalid-feedback">{Formik.errors.owner_name}</div>
                  )}
                </div>

                {/* Password */}
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className={`common-input mb-20 form-control ${
                      Formik.touched.password && Formik.errors.password
                        ? "is-invalid"
                        : ""
                    }`}
                    value={Formik.values.password}
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur}
                  />
                  {Formik.touched.password && Formik.errors.password && (
                    <div className="invalid-feedback">{Formik.errors.password}</div>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="form-group">
                  <input
                    type="password"
                    name="confirm_password"
                    placeholder="Confirm Password"
                    className={`common-input mb-20 form-control ${
                      Formik.touched.confirm_password &&
                      Formik.errors.confirm_password
                        ? "is-invalid"
                        : ""
                    }`}
                    value={Formik.values.confirm_password}
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur}
                  />
                  {Formik.touched.confirm_password &&
                    Formik.errors.confirm_password && (
                      <div className="invalid-feedback">
                        {Formik.errors.confirm_password}
                      </div>
                    )}
                </div>

                <button type="submit" className="btn primary-btn" style={{ float: "right" }}>
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
