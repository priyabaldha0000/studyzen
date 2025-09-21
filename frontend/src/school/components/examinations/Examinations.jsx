import React from "react";

export default function Examination() {
  // Example examination data (replace with MongoDB later)
  const exams = [
    { id: 1, name: "Midterm Exam", class: "10A", subject: "Mathematics", date: "2025-10-10", startTime: "09:00", endTime: "11:00", totalMarks: 100, passingMarks: 40, type: "Written" },
    { id: 2, name: "Final Exam", class: "10B", subject: "Physics", date: "2025-10-12", startTime: "10:00", endTime: "12:00", totalMarks: 100, passingMarks: 35, type: "Written" },
    { id: 3, name: "Quiz 1", class: "11A", subject: "English", date: "2025-10-15", startTime: "08:30", endTime: "09:00", totalMarks: 20, passingMarks: 10, type: "Quiz" },
    { id: 4, name: "Lab Exam", class: "12C", subject: "Chemistry", date: "2025-10-18", startTime: "13:00", endTime: "15:00", totalMarks: 50, passingMarks: 25, type: "Practical" },
    { id: 5, name: "Midterm Exam", class: "10C", subject: "Biology", date: "2025-10-20", startTime: "09:00", endTime: "11:00", totalMarks: 100, passingMarks: 40, type: "Written" },
  ];

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">📝 Examination Schedule</h2>
      <div className="table-responsive">
        <table className="table table-bordered custom-table">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Exam Name</th>
              <th>Class</th>
              <th>Subject</th>
              <th>Date</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Total Marks</th>
              <th>Passing Marks</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {exams.map((exam) => (
              <tr key={exam.id}>
                <td>{exam.id}</td>
                <td>{exam.name}</td>
                <td>{exam.class}</td>
                <td>{exam.subject}</td>
                <td>{exam.date}</td>
                <td>{exam.startTime}</td>
                <td>{exam.endTime}</td>
                <td>{exam.totalMarks}</td>
                <td>{exam.passingMarks}</td>
                <td>{exam.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
