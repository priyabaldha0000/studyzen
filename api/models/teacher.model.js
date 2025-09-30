const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  school: { 
    type: mongoose.Schema.Types.ObjectId, // Use Types.ObjectId
    ref: 'School',
    required: true // Making sure every teacher belongs to a school
  },
  email: { 
    type: String, 
    required: true,
    unique: true, // Ensures no duplicate emails
    trim: true,
    lowercase: true
  },
  name: { 
    type: String, 
    required: true,
    trim: true 
  },
  qualification: { 
    type: String, 
    required: true 
  },
  age: { 
    type: Number, // Changed from String to Number
    required: true,
    min: 20, // Example validation: minimum age for a teacher
    max: 70
  },
  gender: { 
    type: String, 
    required: true,
    enum: ['Male', 'Female', 'Other'] // Restrict gender input
  },
  teacher_image: { 
    type: String, // Stores the image file name/path
    required: true 
  },
  password: { 
    type: String, 
    required: true,
    select: false // Ensures password is not returned in queries by default
  },
  role: { 
    type: String, 
    enum: ['TEACHER'], 
    default: 'TEACHER' // Explicitly define role
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model("Teacher", teacherSchema);
