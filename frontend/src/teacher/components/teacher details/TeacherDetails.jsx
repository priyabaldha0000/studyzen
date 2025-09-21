import React from "react";
// import teacherPic from "../img/teacher1.jpg"; // make sure this file exists

export default function TeacherDetails() {
  const teacher = {
    id: 1,
    name: "Prof. Alice Johnson",
    email: "alice@school.com",
    contact: "+1234567890",
    subjects: "Physics, Chemistry",
    classes: "10th - 12th Grade",
    joiningDate: "2020-06-01",
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">👤 Teacher Details</h2>
      <div className="row">
        <div className="col-md-4 text-center mb-3">
          <img
            src={teacherPic}
            alt={teacher.name}
            className="img-fluid rounded-circle"
            style={{ maxWidth: "200px" }}
          />
        </div>
        <div className="col-md-8">
          <table className="table table-bordered custom-table">
            <tbody>
              <tr><th>ID</th><td>{teacher.id}</td></tr>
              <tr><th>Name</th><td>{teacher.name}</td></tr>
              <tr><th>Email</th><td>{teacher.email}</td></tr>
              <tr><th>Contact</th><td>{teacher.contact}</td></tr>
              <tr><th>Subjects</th><td>{teacher.subjects}</td></tr>
              <tr><th>Classes</th><td>{teacher.classes}</td></tr>
              <tr><th>Joining Date</th><td>{teacher.joiningDate}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
