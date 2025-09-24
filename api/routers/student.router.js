const express = require('express');
const router = express.Router();
const { getAllStudents } = require('../controllers/student.controller');
const authMiddleware = require('../auth/auth'); // Assuming you have this middleware

router.get('/all', authMiddleware(['ADMIN']), getAllStudents);

module.exports = router;