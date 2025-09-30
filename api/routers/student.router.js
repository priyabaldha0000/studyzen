const express = require('express');
const router = express.Router();

const { 
    getAllStudents, 
    deleteStudent, 
    updateStudent // Imported the new functions
} = require('../controllers/student.controller'); 

router.get('/all', getAllStudents);

router.delete('/:id', deleteStudent); // Uses the ID parameter

router.put('/:id', updateStudent); // Uses the ID parameter

module.exports = router;
