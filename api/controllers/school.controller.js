require("dotenv").config();
const formidable = require("formidable");
const path = require("path");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const School = require("../models/school.model");

module.exports = {
  registerSchool: async (req, res) => {
    try {
      const form = new formidable.IncomingForm();
      form.parse(req, async (err, fields, files) => {
        if (err) {
          return res.status(400).json({ success: false, message: "Form parse error" });
        }

        const existing = await School.findOne({ email: fields.email[0] });
        if (existing) {
          return res.status(409).json({ success: false, message: "Email is already registered." });
        }

        if (!files.image || files.image.length === 0) {
          return res.status(400).json({ success: false, message: "Image is required" });
        }

        const photo = files.image[0];
        let filepath = photo.filepath;
        let originalFilename = photo.originalFilename.replace(" ", "_");
        let newPath = path.join(__dirname, process.env.SCHOOL_IMAGE_PATH, originalFilename);

        let photoData = fs.readFileSync(filepath);
        fs.writeFileSync(newPath, photoData);

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(fields.password[0], salt);

        const newSchool = new School({
          school_name: fields.school_name[0],
          email: fields.email[0],
          owner_name: fields.owner_name[0],
          school_image: originalFilename,
          password: hashPassword
        });

        const savedSchool = await newSchool.save();
        res.status(201).json({ success: true, data: savedSchool, message: "School Registered Successfully.", redirect: "/student" });
        
        
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "School Registration Failed.!" });
    }
  },

  loginSchool: async (req, res) => {
    try {
      // === Admin login check ===
      if (req.body.email === "admin123@gmail.com" && req.body.password === "admin") {
        const jwtSecret = process.env.JWT_SECRET;
        const token = jwt.sign({
          id: "admin123",
          email: "admin123@gmail.com",
          role: "ADMIN"
        }, jwtSecret, { expiresIn: "1d" });

        return res.status(200).json({
          success: true,
          message: "Admin Login Success.",
          user: {
            id: "admin123",
            email: "admin123@gmail.com",
            role: "ADMIN",
            token,
            redirect: "/school/dashboard"
          }
        });
      }

      // === School login ===
      const school = await School.findOne({ email: req.body.email });
      if (school) {
        const isAuth = bcrypt.compareSync(req.body.password, school.password);
        if (isAuth) {
          const jwtSecret = process.env.JWT_SECRET;
          const token = jwt.sign({
            id: school._id,
            school_name: school.school_name,
            email: school.email,
            owner_name: school.owner_name,
            image_url: school.school_image,
            role: "SCHOOL"
          }, jwtSecret, { expiresIn: "1d" });

          return res.status(200).json({
            success: true,
            message: "School Login Successful.",
            user: {
              id: school._id,
              school_name: school.school_name,
              owner_name: school.owner_name,
              email: school.email,
              image_url: school.school_image,
              role: "SCHOOL",
              token,
              redirect: "/student"
            }
          });
        } else {
          return res.status(401).json({ success: false, message: "Password is Incorrect." });
        }
      } else {
        return res.status(401).json({ success: false, message: "Email is not registered." });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Internal Server Error [SCHOOL LOGIN]." });
    }
  },

  // READ (Admin Only)
  getAllSchools: async (req, res) => {
    try {
      const schools = await School.find().select([
        "school_name", "owner_name", "email", "school_image", "createdAt"
      ]);

      res.status(200).json({
        success: true,
        message: "Fetched all registered schools successfully.",
        schools
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Internal Server Error [ALL SCHOOL DATA]." });
    }
  },

  // (School - Own Profile)
  getSchoolOwnData: async (req, res) => {
    try {
      const id = req.user.id;
      const school = await School.findById(id).select(["-password"]);
      if (school) {
        res.status(200).json({ success: true, message: "Fetched own school data.", school });
      } else {
        res.status(404).json({ success: false, message: "School not found." });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Internal Server Error [OWN SCHOOL DATA]." });
    }
  },

  // UPDATE (updates own profile)
  updateSchool: async (req, res) => {
    try {
      const id = req.user.id;
      const form = new formidable.IncomingForm();
      form.parse(req, async (err, fields, files) => {
        const school = await School.findById(id);
        if (!school) {
          return res.status(404).json({ success: false, message: "School not found." });
        }

        if (files.image) {
          const photo = files.image[0];
          let filepath = photo.filepath;
          let originalFilename = photo.originalFilename.replace(" ", "_");

          if (school.school_image) {
            let oldImagePath = path.join(__dirname, process.env.SCHOOL_IMAGE_PATH, school.school_image);
            if (fs.existsSync(oldImagePath)) {
              fs.unlinkSync(oldImagePath);
            }
          }

          let newPath = path.join(__dirname, process.env.SCHOOL_IMAGE_PATH, originalFilename);
          let photoData = fs.readFileSync(filepath);
          fs.writeFileSync(newPath, photoData);
          school.school_image = originalFilename;
        }

        Object.keys(fields).forEach((field) => {
          school[field] = fields[field][0];
        });

        await school.save();
        res.status(200).json({ success: true, message: "School updated Successfully.", school });
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "School Update Failed." });
    }
  },

  //  (Admin can update any school)
  updateSchoolByAdmin: async (req, res) => {
    try {
      const { id } = req.params;
      const updates = req.body;

      const school = await School.findById(id);
      if (!school) {
        return res.status(404).json({ success: false, message: "School not found." });
      }

      Object.keys(updates).forEach((key) => {
        school[key] = updates[key];
      });

      await school.save();
      res.status(200).json({ success: true, message: "School updated successfully by Admin.", school });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Internal Server Error [ADMIN UPDATE SCHOOL]." });
    }
  },

  deleteSchool: async (req, res) => {
    try {
      const { id } = req.params;
      const school = await School.findById(id);

      if (!school) {
        return res.status(404).json({ success: false, message: "School not found." });
      }

      if (school.school_image) {
        let imagePath = path.join(__dirname, process.env.SCHOOL_IMAGE_PATH, school.school_image);
        if (fs.existsSync(imagePath)) {
          fs.unlinkSync(imagePath);
        }
      }

      await School.deleteOne({ _id: id });
      res.status(200).json({ success: true, message: "School deleted successfully." });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Internal Server Error [DELETE SCHOOL]." });
    }
  }
};
