import React from "react";

export default function Notice() {
  // Example notice data (replace with MongoDB later)
  const notices = [
    { id: 1, title: "Midterm Exam Schedule", description: "Midterm exams for classes 10-12 will start from 10th Oct. Please check timetable.", postedBy: "Admin", datePosted: "2025-09-21", expiryDate: "2025-10-20", category: "Exam", link: "" },
    { id: 2, title: "School Annual Day", description: "Annual day celebration will be held on 30th Nov. Students are expected to participate.", postedBy: "Principal", datePosted: "2025-09-15", expiryDate: "2025-11-30", category: "Event", link: "" },
    { id: 3, title: "Holiday Notice", description: "School will remain closed on 25th Dec for Christmas.", postedBy: "Admin", datePosted: "2025-09-20", expiryDate: "2025-12-25", category: "Holiday", link: "" },
    { id: 4, title: "Lab Safety Guidelines", description: "All students must follow lab safety rules strictly. Read the attached guidelines.", postedBy: "Lab Incharge", datePosted: "2025-09-18", expiryDate: "2025-10-31", category: "General", link: "#" },
  ];

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">📢 School Notices</h2>
      <div className="table-responsive">
        <table className="table table-bordered custom-table">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Posted By</th>
              <th>Date Posted</th>
              <th>Expiry Date</th>
              <th>Category</th>
              <th>Attachment/Link</th>
            </tr>
          </thead>
          <tbody>
            {notices.map((notice) => (
              <tr key={notice.id}>
                <td>{notice.id}</td>
                <td>{notice.title}</td>
                <td>{notice.description}</td>
                <td>{notice.postedBy}</td>
                <td>{notice.datePosted}</td>
                <td>{notice.expiryDate}</td>
                <td>{notice.category}</td>
                <td>
                  {notice.link ? <a href={notice.link} target="_blank" rel="noreferrer">View</a> : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
