import React from "react";

export default function Attendance() {
  // Example attendance data for a teacher's class
  const attendanceRecords = [
    { id: 1, name: "John Doe", class: "10th Grade", subject: "Physics", date: "2025-09-21", status: "Present", remarks: "" },
    { id: 2, name: "Jane Smith", class: "10th Grade", subject: "Physics", date: "2025-09-21", status: "Absent", remarks: "Sick" },
    { id: 3, name: "David Lee", class: "10th Grade", subject: "Physics", date: "2025-09-21", status: "Late", remarks: "Traffic" },
    { id: 4, name: "Emily Blunt", class: "10th Grade", subject: "Physics", date: "2025-09-21", status: "Present", remarks: "" },
  ];

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">📝 Attendance Records</h2>
      <div className="table-responsive">
        <table className="table table-bordered custom-table">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Student Name</th>
              <th>Class</th>
              <th>Subject</th>
              <th>Date</th>
              <th>Status</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {attendanceRecords.map((record) => (
              <tr key={record.id}>
                <td>{record.id}</td>
                <td>{record.name}</td>
                <td>{record.class}</td>
                <td>{record.subject}</td>
                <td>{record.date}</td>
                <td>{record.status}</td>
                <td>{record.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
