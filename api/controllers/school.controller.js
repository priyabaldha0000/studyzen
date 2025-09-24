// CRUD applications - CREATE,READ, UPDATE and DELETE
// AUTHENTICATION - SCHOOL, STUDENT AND TEACHER

require("dotenv").config();
const formidable = require("formidable");
const path = require("path");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const School = require("../models/school.model");
const { count } = require("console");

module.exports = {
    registerSchool: async (req, res) => {
        try {
            const form = new formidable.IncomingForm();
            form.parse(req, async (err, fields, files) => {
                const existing = await School.findOne({ email: fields.email[0] });
                if (existing) {
                    return res.status(409).json({ success:false, message:"Email is already registered." });
                }
                else{

                console.log("Fields received:", fields);  
                console.log("Files received:", files); 
                if (err) {
                    return res.status(400).json({ success: false, message: "Form parse error" });
                }

                if (!files.image || files.image.length === 0) {
                    return res.status(400).json({ success: false, message: "Image is required" });
                }
                const school  = await School.findOne({email:fields.email[0]});
                if(school){
                    return res.status(409).json({success:false, message:"Email is already registered."})
                }else{

                const photo = files.image[0];
                let filepath = photo.filepath;
                let originalFilename = photo.originalFilename.replace(" ", "_"); // photo one
                let newPath = path.join(__dirname, process.env.SCHOOL_IMAGE_PATH, originalFilename);

                let photoData = fs.readFileSync(filepath);
                fs.writeFileSync(newPath, photoData);

                const salt = bcrypt.genSaltSync(10);
                const hashPassword = bcrypt.hashSync(fields.password[0], salt)
                const newSchool = new School({
                    school_name: fields.school_name[0],
                    email: fields.email[0],
                    owner_name: fields.owner_name[0],
                    school_image: originalFilename,
                    password: hashPassword
                })

                const savedSchool = await newSchool.save();
                res.status(200).json({ success: true, data: savedSchool, message: "School is Registered Successfully." })
            }
        }
            })
        } catch (error) {
            res.status(500).json({ success: false, message: "School Registration Failed.!" })
        }
    },
    loginSchool: async (req, res) => {
    try {
        // === Admin login check ===
        if(req.body.email === "admin123@gmail.com" && req.body.password === "admin") {
            const jwtSecret = process.env.JWT_SECRET;
            const token = jwt.sign({
                id: "admin123", // arbitrary ID for admin
                email: "admin123@gmail.com",
                role: "ADMIN"
            }, jwtSecret);
            return res.status(200).json({
                success: true,
                message: "Admin Login Success.",
                user: {
                    id: "admin123",
                    email: "admin123@gmail.com",
                    role: "ADMIN",
                    token: token,
                    redirect: "/school" // redirect to home page
                }
            });
        }

        // === Existing School login code ===
        const school = await School.findOne({ email: req.body.email });
        if (school) {
            const isAuth = bcrypt.compareSync(req.body.password, school.password);
            if (isAuth) {
                const jwtSecret = process.env.JWT_SECRET;
                const token = jwt.sign({
                    id: school._id,
                    schoolId: school._id,
                    owner_name: school.owner_name,
                    school_name: school.school_name,
                    image_url: school.school_image,
                    role: "SCHOOL"
                }, jwtSecret);
                res.header("Authorization", token)
                res.status(200).json({
                    success: true, message: "Success Login.",
                    user: {
                        id: school._id,
                        owner_name: school.owner_name,
                        school_name: school.school_name,
                        image_url: school.school_image,
                        role: "SCHOOL",
                        token: token
                    }
                });
            } else {
                res.status(401).json({ success: false, message: "Password is Incorrect." })
            }
        } else {
            res.status(401).json({ success: false, message: "Email is not registered." })
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error[SCHOOL LOGIN]." })
    }
},


    getAllSchools: async (req, res) => {
        try {
            const schools = await School.find().select(['-password', '-_id', '-email', '-owner_name', '-createdAt']);
            res.status(200).json({ success: true, message: "Success in fetching all schools.", schools })
        } catch (error) {
            res.status(500).json({ success: false, message: "Internal Server Error [ ALL SCHOOL DATA ]." })
        }
    },

    getSchoolOwnData: async (req, res) => {
        try {
            const id = req.user.id;
            const school = await School.findOne({ _id: id });
            if (school) {
                res.status(200).json({ success: true, message: "Success in fetching own school data.", school })
            } else {
                res.status(404).json({ success: true, message: "School not found." })
            }
        } catch (error) {
            res.status(500).json({ success: false, message: "Internal Server Error [ OWN SCHOOL DATA ]." })
        }
    },

    updateSchool: async (req, res) => {
        try {
            const id = req.user.id;
            const form = new formidable.IncomingForm();
            form.parse(req, async (err, fields, files) => {
                const school = await School.findOne({ _id: id });
                if (files.image) {
                    const photo = files.image[0];
                    let filepath = photo.filepath;
                    let originalFilename = photo.originalFilename.replace(" ", "_"); // photo one

                    if (school.school_image) {
                        let oldImagePath = path.join(__dirname, process.env.SCHOOL_IMAGE_PATH, school.school_image);
                        if (fs.existsSync(oldImagePath)) {
                            fs.unlink(oldImagePath, (err) => {
                                if (err) console.log(err);
                            });
                        }
                    }
                    let newPath = path.join(__dirname, process.env.SCHOOL_IMAGE_PATH, originalFilename);
                    let photoData = fs.readFileSync(filepath);
                    fs.writeFileSync(newPath, photoData);

                    Object.keys(fields).forEach((field) => {
                        school[field] = fields[field][0]
                    })
                    await school.save();
                    res.status(200).json({ success: true, message: "School updated Successfully.", school })
                }
            })
        } catch (error) {
            res.status(500).json({ success: false, message: "School Registration Failed ." })
        }
    }

}