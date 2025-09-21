import React from "react";

export default function Notice() {
  const notices = [
    { id: 1, title: "Staff Meeting", category: "Meeting", date: "2025-09-22" },
    { id: 2, title: "Submit Grade Sheets", category: "Submission", date: "2025-09-25" },
    { id: 3, title: "Exam Schedule Finalized", category: "Exam", date: "2025-09-20" },
  ];

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">📢 Notices</h2>
      <div className="table-responsive">
        <table className="table table-bordered custom-table">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Category</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {notices.map((notice) => (
              <tr key={notice.id}>
                <td>{notice.id}</td>
                <td>{notice.title}</td>
                <td>{notice.category}</td>
                <td>{notice.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
