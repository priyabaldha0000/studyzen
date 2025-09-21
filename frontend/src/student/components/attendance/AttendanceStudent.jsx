import React from "react";

export default function Attendance() {
  // Example: Attendance data for a single student
  const attendanceRecords = [
    { month: "January", totalClasses: 20, attended: 18 },
    { month: "February", totalClasses: 18, attended: 15 },
    { month: "March", totalClasses: 22, attended: 20 },
    { month: "April", totalClasses: 20, attended: 19 },
    { month: "May", totalClasses: 15, attended: 14 },
  ];

  const calculatePercentage = (attended, total) => ((attended / total) * 100).toFixed(1);
  const getStatus = (percentage) => {
    if (percentage >= 75) return "Good";
    if (percentage >= 50) return "Warning";
    return "Poor";
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">📊 Your Attendance</h2>
      <div className="table-responsive">
        <table className="table table-bordered custom-table">
          <thead className="thead-dark">
            <tr>
              <th>Month</th>
              <th>Total Classes</th>
              <th>Attended</th>
              <th>Attendance %</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceRecords.map((record, index) => {
              const percentage = calculatePercentage(record.attended, record.totalClasses);
              const status = getStatus(percentage);
              return (
                <tr key={index}>
                  <td>{record.month}</td>
                  <td>{record.totalClasses}</td>
                  <td>{record.attended}</td>
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
