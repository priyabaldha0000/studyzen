const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentSchema = new Schema({
  school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'School',
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  student_class: {
    type: Number,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
  guardian: {
    type: String,
  },
  guardian_phone: {
    type: String,
  },
  student_image: {
    type: String,
  },
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;