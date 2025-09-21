import React from "react";

export default function Attendance() {
  // Example attendance data (replace with MongoDB later)
  const students = [
    { id: 1, name: "John Doe", class: "10A", roll: "01", totalClasses: 22, attended: 20 },
    { id: 2, name: "Jane Smith", class: "10B", roll: "02", totalClasses: 22, attended: 16 },
    { id: 3, name: "David Lee", class: "10C", roll: "03", totalClasses: 22, attended: 10 },
    { id: 4, name: "Emma Clark", class: "11A", roll: "04", totalClasses: 20, attended: 20 },
    { id: 5, name: "Alice Johnson", class: "12B", roll: "05", totalClasses: 22, attended: 21 },
  ];

  // Function to calculate attendance %
  const calculatePercentage = (attended, total) => ((attended / total) * 100).toFixed(1);

  // Function to determine status
  const getStatus = (percentage) => {
    if (percentage >= 75) return "Good";
    if (percentage >= 50) return "Warning";
    return "Poor";
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">📊 Student Attendance</h2>
      <div className="table-responsive">
        <table className="table table-bordered custom-table">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Student Name</th>
              <th>Class</th>
              <th>Roll No</th>
              <th>Total Classes</th>
              <th>Attended Classes</th>
              <th>Attendance %</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => {
              const percentage = calculatePercentage(student.attended, student.totalClasses);
              const status = getStatus(percentage);
              return (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.class}</td>
                  <td>{student.roll}</td>
                  <td>{student.totalClasses}</td>
                  <td>{student.attended}</td>
                  <td>
                    <span
                      style={{
                        fontWeight: "600",
                        color:
                          percentage >= 75 ? "green" : percentage >= 50 ? "orange" : "red",
                      }}
                    >
                      {percentage}%
                    </span>
                  </td>
                  <td>{status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
