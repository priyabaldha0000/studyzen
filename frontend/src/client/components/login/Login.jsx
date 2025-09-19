import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MessageSnackbar from "../../../basic utility components/snackbar/MessageSnackbar";

// (optional) you can create a yupSchema/loginSchema.js like registerSchema
// For now, I'll keep validation minimal

export default function Login() {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: ""
  };

  const [message, setMessage] = React.useState('');
  const [messageType, setMessageType] = React.useState('success');
  const handleMessageClose = () => {
    setMessage('');
  };

  const Formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      try {
        const resp = await axios.post("http://localhost:5000/api/school/login", values);

        if (resp.data.success) {
          setMessage(resp.data.message);
          setMessageType("success");

          // Save token + user info to localStorage
          localStorage.setItem("token", resp.data.user.token);
          localStorage.setItem("user", JSON.stringify(resp.data.user));

          // Redirect after short delay
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      } catch (error) {
        console.error("Login error:", error);
        setMessage(
          error.response?.data?.message || "Login failed. Please try again."
        );
        setMessageType("error");
      }
    },
  });

  return (
    <>
      {message &&
        <MessageSnackbar
          message={message}
          type={messageType}
          handleClose={handleMessageClose}
        />
      }

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
          display: "flex",
          flexDirection: "column",
          width: "60vw",
          minWidth: "230px",
          margin: "auto"
        }}
        noValidate
        autoComplete="off"
        onSubmit={Formik.handleSubmit}
      >
        <Typography variant="h5" align="center">Login</Typography>

        <TextField
          name="email"
          label="Email"
          value={Formik.values.email}
          onChange={Formik.handleChange}
          onBlur={Formik.handleBlur}
        />
        {Formik.touched.email && Formik.errors.email && (
          <p style={{ color: "red" }}>{Formik.errors.email}</p>
        )}

        <TextField
          type="password"
          name="password"
          label="Password"
          value={Formik.values.password}
          onChange={Formik.handleChange}
          onBlur={Formik.handleBlur}
        />
        {Formik.touched.password && Formik.errors.password && (
          <p style={{ color: "red" }}>{Formik.errors.password}</p>
        )}

        <Button type="submit" variant="contained">Login</Button>
      </Box>
    </>
  );
}
