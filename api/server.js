const dotenv = require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const path = require('path');

// ROUTER IMPORT
const schoolRouter = require("./routers/school.router")
const studentRouter = require("./routers/student.router");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(cookieParser());

//mongodb connection
mongoose.connect(process.env.MONGO_URI).then(db => {
    console.log("MongoDb is connected successfully")
}).catch(e => {
    console.log("MongoDb error", e)
})

//ROUTER
app.use("/api/school", schoolRouter);
app.use("/api/student", studentRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running at PORT=> ${PORT}`)
})

// Correctly serving static files
app.use('/uploads/student-images', express.static(path.join(__dirname, '..', 'frontend', 'public', 'images', 'uploaded', 'student')));
app.use('/uploads/school-images', express.static(path.join(__dirname, '..', 'frontend', 'public', 'images', 'uploaded', 'school')));