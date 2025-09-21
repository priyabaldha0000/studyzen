import React from "react";

export default function Teacher() {
  // Example teacher data (replace with data from MongoDB later)
  const teachers = [
    { id: 1, name: "Prof. Alice Johnson", email: "alice@school.com", subject: "Physics", classAssigned: "10" },
    { id: 2, name: "Dr. Michael Brown", email: "michael@school.com", subject: "Chemistry", classAssigned: "12" },
    { id: 3, name: "Mrs. Sarah Wilson", email: "sarah@school.com", subject: "English", classAssigned: "7" },
  ];

  return (
    <div className="container my-5">
      <h2 className="mb-4">Teacher List</h2>

      <table className="table table-bordered custom-table">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Class Assigned</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.id}>
              <td>{teacher.id}</td>
              <td>{teacher.name}</td>
              <td>{teacher.email}</td>
              <td>{teacher.subject}</td>
              <td>{teacher.classAssigned}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
