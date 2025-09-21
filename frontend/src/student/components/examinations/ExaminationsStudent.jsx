import React from "react";

export default function Examination() {
  // Example exams for a single student
  const exams = [
    { id: 1, name: "Midterm Exam", subject: "Mathematics", date: "2025-10-10", startTime: "09:00", endTime: "11:00", maxMarks: 100, type: "Written", status: "Upcoming", remarks: "Bring calculator" },
    { id: 2, name: "Final Exam", subject: "Physics", date: "2025-10-12", startTime: "10:00", endTime: "12:00", maxMarks: 100, type: "Practical", status: "Upcoming", remarks: "Lab coat required" },
    { id: 3, name: "Quiz 1", subject: "English", date: "2025-09-25", startTime: "08:30", endTime: "09:00", maxMarks: 20, type: "Online", status: "Completed", remarks: "Submit online" },
    { id: 4, name: "Lab Exam", subject: "Chemistry", date: "2025-10-18", startTime: "13:00", endTime: "15:00", maxMarks: 50, type: "Practical", status: "Upcoming", remarks: "Safety goggles required" },
  ];

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">📝 Your Examination Schedule</h2>
      <div className="table-responsive">
        <table className="table table-bordered custom-table">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Exam Name</th>
              <th>Subject</th>
              <th>Date</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Max Marks</th>
              <th>Type</th>
              <th>Status</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {exams.map((exam) => (
              <tr key={exam.id}>
                <td>{exam.id}</td>
                <td>{exam.name}</td>
                <td>{exam.subject}</td>
                <td>{exam.date}</td>
                <td>{exam.startTime}</td>
                <td>{exam.endTime}</td>
                <td>{exam.maxMarks}</td>
                <td>{exam.type}</td>
                <td
                  style={{
                    fontWeight: "600",
                    color:
                      exam.status === "Upcoming"
                        ? "blue"
                        : exam.status === "Completed"
                        ? "green"
                        : "red",
                  }}
                >
                  {exam.status}
                </td>
                <td>{exam.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
