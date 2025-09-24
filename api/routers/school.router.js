const express = require("express");
const authMiddleware = require('../auth/auth')
const { 
  registerSchool, 
  loginSchool, 
  getAllSchools, 
  getSchoolOwnData, 
  updateSchool, 
  updateSchoolByAdmin, 
  deleteSchool // ✅ This is the function you need to ensure is imported
} = require("../controllers/school.controller");

const router = express.Router();

router.post("/register", registerSchool);
router.get("/all", getAllSchools);
router.post("/login", loginSchool);
router.patch("/update", authMiddleware(['SCHOOL']),updateSchool);
router.get("/fetch-single", authMiddleware(['SCHOOL']), getSchoolOwnData);
router.delete("/:id", authMiddleware(["ADMIN"]), deleteSchool);

module.exports = router;

