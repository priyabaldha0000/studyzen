const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student.controller");

// Get all students
router.get("/", studentController.getAllStudents);

// Add new student (optional)
router.post("/", studentController.addStudent);

module.exports = router;
