import React from "react";

export default function Students() {
  // Example students data (replace with data from MongoDB later)
  const studentss = [
    { id: 1, name: "Prof. Alice Johnson", email: "alice@school.com", subject: "Physics", classAssigned: "10" },
    { id: 2, name: "Dr. Michael Brown", email: "michael@school.com", subject: "Chemistry", classAssigned: "12" },
    { id: 3, name: "Mrs. Sarah Wilson", email: "sarah@school.com", subject: "English", classAssigned: "7" },
  ];

  return (
    <div className="container my-5">
      <h2 className="mb-4">students List</h2>

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
          {studentss.map((students) => (
            <tr key={students.id}>
              <td>{students.id}</td>
              <td>{students.name}</td>
              <td>{students.email}</td>
              <td>{students.subject}</td>
              <td>{students.classAssigned}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
