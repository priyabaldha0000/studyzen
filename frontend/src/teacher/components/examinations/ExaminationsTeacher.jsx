import React from "react";

export default function Examination() {
  const exams = [
    { id: 1, name: "Midterm Exam", subject: "Physics", class: "10th Grade", date: "2025-10-10", time: "09:00 - 11:00", type: "Written" },
    { id: 2, name: "Lab Exam", subject: "Chemistry", class: "11th Grade", date: "2025-10-12", time: "10:00 - 12:00", type: "Practical" },
    { id: 3, name: "Final Exam", subject: "Mathematics", class: "12th Grade", date: "2025-10-18", time: "09:00 - 11:00", type: "Written" },
  ];

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">📝 Exam Schedule</h2>
      <div className="table-responsive">
        <table className="table table-bordered custom-table">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Exam Name</th>
              <th>Subject</th>
              <th>Class</th>
              <th>Date</th>
              <th>Time</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {exams.map((exam) => (
              <tr key={exam.id}>
                <td>{exam.id}</td>
                <td>{exam.name}</td>
                <td>{exam.subject}</td>
                <td>{exam.class}</td>
                <td>{exam.date}</td>
                <td>{exam.time}</td>
                <td>{exam.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
