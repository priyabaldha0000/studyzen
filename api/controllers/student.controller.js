const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Student = require('../models/student.model');

exports.loginStudent = async (req, res) => {
  try {
    const { email, password } = req.body;
    const student = await Student.findOne({ email });
    if (!student) return res.status(401).json({ success: false, message: 'Email is not registered.' });

    const isAuth = bcrypt.compareSync(password, student.password);
    if (!isAuth) return res.status(401).json({ success: false, message: 'Password is Incorrect.' });

    const token = jwt.sign({ id: student._id, email: student.email, role: 'STUDENT' }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.status(200).json({
      success: true,
      message: 'Student Login Successful.',
      user: {
        id: student._id,
        email: student.email,
        role: 'STUDENT',
        token,
        redirect: '/student'
      }
    });
  } catch (error) {
    console.error("Student login error:", error);
    res.status(500).json({ success: false, message: 'Internal Server Error [STUDENT LOGIN].' });
  }
};


exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.find({});

        return res.status(200).json({
            success: true,
            students: students, 
            message: 'Successfully fetched all student records'
        });
    } catch (error) {
        console.error("Error fetching students:", error);
        return res.status(500).json({
            success: false,
            message: 'Failed to fetch student records',
            error: error.message
        });
    }
};
 
exports.deleteStudent = async (req, res) => {
    try {
        const { id } = req.params; 

        const deletedStudent = await Student.findByIdAndDelete(id);

        if (!deletedStudent) {
            return res.status(404).json({
                success: false,
                message: 'Student not found with the given ID'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Student record successfully deleted',
            studentId: id
        });
    } catch (error) {
        console.error("Error deleting student:", error);
        return res.status(500).json({
            success: false,
            message: 'Failed to delete student record',
            error: error.message
        });
    }
};

exports.updateStudent = async (req, res) => {
    try {
        const { id } = req.params; 
        const { role, id: userId } = req.user;
        const updateData = req.body; 

        if (role === 'STUDENT' && id !== userId) {
            return res.status(403).json({
                success: false,
                message: 'Access Denied: Students can only update their own profile.'
            });
        }
        
        const updatedStudent = await Student.findByIdAndUpdate(
            id,
            updateData,
            { new: true, runValidators: true }
        );

        if (!updatedStudent) {
            return res.status(404).json({
                success: false,
                message: 'Student not found with the given ID'
            });
        }

        return res.status(200).json({
            success: true,
            student: updatedStudent,
            message: 'Student record successfully updated'
        });
    } catch (error) {
        console.error("Error updating student:", error);
        return res.status(500).json({
            success: false,
            message: 'Failed to update student record',
            error: error.message
        });
    }
};