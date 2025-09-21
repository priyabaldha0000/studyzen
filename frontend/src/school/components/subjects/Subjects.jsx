import React from "react";

export default function Subject() {
  // Example subject data (replace with data from MongoDB later)
  const subjects = [
    { id: 1, name: "Mathematics", code: "MATH101", classAssigned: "10", teacher: "Prof. Alice Johnson" },
    { id: 2, name: "Physics", code: "PHY201", classAssigned: "12", teacher: "Dr. Michael Brown" },
    { id: 3, name: "English Literature", code: "ENG301", classAssigned: "7", teacher: "Mrs. Sarah Wilson" },
    { id: 4, name: "History", code: "HIS401", classAssigned: "8", teacher: "Mr. David Lee" },
  ];

  return (
    <div className="container my-5">
      <h2 className="mb-4">Subject List</h2>

      <table className="table table-bordered custom-table">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Subject Name</th>
            <th>Code</th>
            <th>Class Assigned</th>
            <th>Teacher</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject) => (
            <tr key={subject.id}>
              <td>{subject.id}</td>
              <td>{subject.name}</td>
              <td>{subject.code}</td>
              <td>{subject.classAssigned}</td>
              <td>{subject.teacher}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
