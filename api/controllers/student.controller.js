const Student = require("../models/student.model");

// Get all students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().populate("school"); // populate if you want school name
    res.status(200).json({ success: true, students });
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Add a student (optional)
exports.addStudent = async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.status(201).json({ success: true, student: newStudent });
  } catch (error) {
    console.error("Error adding student:", error);
    res.status(400).json({ success: false, message: error.message });
  }
};
