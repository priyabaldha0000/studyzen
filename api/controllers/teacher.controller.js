const Teacher = require('../models/teacher.model');

exports.loginTeacher = async (req, res) => {
  try {
    const { email, password } = req.body;
    const teacher = await Teacher.findOne({ email });

    if (!teacher) {
      return res.status(404).json({ success: false, message: "Teacher not found." });
    }

    const isMatch = await bcrypt.compare(password, teacher.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid password." });
    }

    const token = jwt.sign(
      { id: teacher._id, email: teacher.email, role: "TEACHER" },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      success: true,
      message: "Teacher login successful",
      user: {
        id: teacher._id,
        name: teacher.name,
        email: teacher.email,
        role: "TEACHER",
        token,
        redirect: "/teacher/dashboard"
      }
    });
  } catch (error) {
    console.error("Teacher login error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error [TEACHER LOGIN]." });
  }
};

exports.getAllTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find({}).populate('school'); 
        return res.status(200).json({
            success: true,
            teachers: teachers,
            message: 'Successfully fetched all teacher records'
        });
    } catch (error) {
        console.error("Error fetching teachers:", error);
        return res.status(500).json({
            success: false,
            message: 'Failed to fetch teacher records',
            error: error.message
        });
    }
};

exports.createTeacher = async (req, res) => {
    try {
        const teacherData = req.body;

        const newTeacher = new Teacher(teacherData);
        await newTeacher.save();

        return res.status(201).json({
            success: true,
            teacher: newTeacher,
            message: 'Teacher record successfully created'
        });
    } catch (error) {
        console.error("Error creating teacher:", error);
        return res.status(500).json({
            success: false,
            message: 'Failed to create teacher record',
            error: error.message
        });
    }
};

exports.updateTeacher = async (req, res) => {
    try {
        const { id } = req.params;
        const { role, id: userId } = req.user;
        const updateData = req.body;

        if (role === 'TEACHER' && id !== userId) {
            return res.status(403).json({
                success: false,
                message: 'Access Denied: Teachers can only update their own profile.'
            });
        }
        
        const updatedTeacher = await Teacher.findByIdAndUpdate(
            id,
            updateData,
            { new: true, runValidators: true }
        );

        if (!updatedTeacher) {
            return res.status(404).json({
                success: false,
                message: 'Teacher not found with the given ID'
            });
        }

        return res.status(200).json({
            success: true,
            teacher: updatedTeacher,
            message: 'Teacher record successfully updated'
        });
    } catch (error) {
        console.error("Error updating teacher:", error);
        return res.status(500).json({
            success: false,
            message: 'Failed to update teacher record',
            error: error.message
        });
    }
};

exports.deleteTeacher = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedTeacher = await Teacher.findByIdAndDelete(id);

        if (!deletedTeacher) {
            return res.status(404).json({
                success: false,
                message: 'Teacher not found with the given ID'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Teacher record successfully deleted',
            teacherId: id
        });
    } catch (error) {
        console.error("Error deleting teacher:", error);
        return res.status(500).json({
            success: false,
            message: 'Failed to delete teacher record',
            error: error.message
        });
    }
};

exports.getTeacherById = async (req, res) => {
    try {
        const { id } = req.params;
        const { role, id: userId } = req.user;

        if (role === 'TEACHER' && id !== userId) {
            return res.status(403).json({
                success: false,
                message: 'Access Denied: Teachers can only view their own profile.'
            });
        }

        const teacher = await Teacher.findById(id).populate('school');

        if (!teacher) {
            return res.status(404).json({
                success: false,
                message: 'Teacher not found with the given ID'
            });
        }

        return res.status(200).json({
            success: true,
            teacher: teacher,
            message: 'Teacher record successfully fetched'
        });
    } catch (error) {
        console.error("Error fetching teacher:", error);
        return res.status(500).json({
            success: false,
            message: 'Failed to fetch teacher record',
            error: error.message
        });
    }
};