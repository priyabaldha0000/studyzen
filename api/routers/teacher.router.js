const express = require('express');
const router = express.Router();
const authMiddleware = require('../auth/auth');
const teacherController = require('../controllers/teacher.controller');

// 🔑 Login (public route)
router.post('/login', teacherController.loginTeacher);

// Management (create/view/delete) → SCHOOL + ADMIN
router.get('/', authMiddleware(['SCHOOL', 'ADMIN']), teacherController.getAllTeachers);
router.post('/', authMiddleware(['SCHOOL', 'ADMIN']), teacherController.createTeacher);
router.delete('/:id', authMiddleware(['SCHOOL', 'ADMIN']), teacherController.deleteTeacher);

// Management + self access/update (TEACHER ownership check inside controller)
router.get('/:id', authMiddleware(['SCHOOL', 'ADMIN', 'TEACHER']), teacherController.getTeacherById);
router.put('/:id', authMiddleware(['SCHOOL', 'ADMIN', 'TEACHER']), teacherController.updateTeacher);

module.exports = router;
