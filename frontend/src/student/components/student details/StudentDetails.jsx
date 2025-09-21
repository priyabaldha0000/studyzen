import React from "react";
// import studentPic from "../img/student1.jpg"; // adjust path as needed

export default function StudentDetails() {
  // Example student details (replace with MongoDB data later)
  const student = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    class: "10th Grade",
    rollNumber: "23",
    course: "Science",
    attendance: "92%",
    exams: "Midterm: 85, Final: 88",
    guardian: "Mr. Robert Doe",
    contact: "+1234567890",
    profilePic: "https://via.placeholder.com/150",
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">👤 Student Details</h2>
      <div className="row">
        <div className="col-md-4 text-center mb-3">
          <img
            src={student.profilePic}
            alt={student.name}
            className="img-fluid rounded-circle"
            style={{ maxWidth: "200px" }}
          />
        </div>
        <div className="col-md-8">
          <table className="table table-bordered custom-table">
            <tbody>
              <tr>
                <th>ID</th>
                <td>{student.id}</td>
              </tr>
              <tr>
                <th>Name</th>
                <td>{student.name}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{student.email}</td>
              </tr>
              <tr>
                <th>Class</th>
                <td>{student.class}</td>
              </tr>
              <tr>
                <th>Roll Number</th>
                <td>{student.rollNumber}</td>
              </tr>
              <tr>
                <th>Course</th>
                <td>{student.course}</td>
              </tr>
              <tr>
                <th>Attendance</th>
                <td>{student.attendance}</td>
              </tr>
              <tr>
                <th>Exams</th>
                <td>{student.exams}</td>
              </tr>
              <tr>
                <th>Guardian</th>
                <td>{student.guardian}</td>
              </tr>
              <tr>
                <th>Contact</th>
                <td>{student.contact}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
