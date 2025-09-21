import React from "react";

export default function Notice() {
  const notices = [
    { id: 1, title: "Midterm Exam Schedule", category: "Exam", date: "2025-09-21" },
    { id: 2, title: "Annual Sports Day", category: "Event", date: "2025-09-18" },
    { id: 3, title: "School Holiday", category: "Holiday", date: "2025-09-25" },
    { id: 4, title: "Lab Safety Guidelines", category: "General", date: "2025-09-15" },
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
