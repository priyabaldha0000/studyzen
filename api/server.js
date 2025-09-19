const dotenv = require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

// ROUTER IMPORT
const schoolRouter = require("./routers/school.router")
// const teacherRouter = require("./routers/teacher.router");
// const studentRouter = require("./routers/student.router");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use(cookieParser());

//mongodb connection
mongoose.connect('mongodb://localhost:27017/studyzen2025').then(db=>{
    console.log("MongoDb is connected successfully")
}).catch(e=>{
    console.log("MongoDb error",e)
})


//ROUTER
app.use("/api/school", schoolRouter);
// app.use("/api/teacher", teacherRouter);
// app.use("/api/student", studentRouter);
const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log("Server is running at PORT=>",PORT)
})