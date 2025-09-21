import React from "react";

export default function Student() {
  // Example student data (replace with MongoDB later)
  const students = [
    { id: 1, name: "John Doe", email: "john@example.com", course: "Math", status: "Active", attendance: 92 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", course: "Science", status: "Inactive", attendance: 65 },
    { id: 3, name: "David Lee", email: "david@example.com", course: "History", status: "Active", attendance: 78 },
  ];

  return (
    <div className="container my-5">
      <h2 className="mb-4">Student List</h2>

      <table className="table table-bordered custom-table">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Status</th>
            <th>Attendance (%)</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.course}</td>
              <td>{student.status}</td>
              <td>
                <span
                  style={{
                    fontWeight: "600",
                    color:
                      student.attendance >= 75
                        ? "green"
                        : student.attendance >= 50
                        ? "orange"
                        : "red",
                  }}
                >
                  {student.attendance}%
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
