const Student = require('../models/student.model');

exports.getAllStudents = async (req, res) => {
  try {
    // Find all students and exclude the password field for security
    const students = await Student.find().select('-password');
    res.status(200).json({ success: true, students });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error fetching students' });
  }
};