import React from "react";

export default function Schedule() {
  // Example weekly timetable for a student
  const schedule = [
    { day: "Monday", time: "09:00 - 10:00", subject: "Mathematics", teacher: "Mr. John Doe", room: "101", type: "Lecture" },
    { day: "Monday", time: "10:15 - 11:15", subject: "Physics", teacher: "Prof. Alice Johnson", room: "Lab 1", type: "Lab" },
    { day: "Tuesday", time: "09:00 - 10:00", subject: "English", teacher: "Mrs. Sarah Wilson", room: "102", type: "Lecture" },
    { day: "Tuesday", time: "10:15 - 11:15", subject: "Chemistry", teacher: "Dr. Michael Brown", room: "Lab 2", type: "Lab" },
    { day: "Wednesday", time: "09:00 - 10:00", subject: "Biology", teacher: "Mr. David Lee", room: "103", type: "Lecture" },
    { day: "Wednesday", time: "10:15 - 11:15", subject: "History", teacher: "Mrs. Jane Smith", room: "104", type: "Lecture" },
    { day: "Thursday", time: "09:00 - 10:00", subject: "Mathematics", teacher: "Mr. John Doe", room: "101", type: "Lecture" },
    { day: "Thursday", time: "10:15 - 11:15", subject: "Physics", teacher: "Prof. Alice Johnson", room: "Lab 1", type: "Lab" },
    { day: "Friday", time: "09:00 - 10:00", subject: "English", teacher: "Mrs. Sarah Wilson", room: "102", type: "Lecture" },
    { day: "Friday", time: "10:15 - 11:15", subject: "Chemistry", teacher: "Dr. Michael Brown", room: "Lab 2", type: "Lab" },
  ];

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">📅 Weekly Class Schedule</h2>
      <div className="table-responsive">
        <table className="table table-bordered custom-table">
          <thead className="thead-dark">
            <tr>
              <th>Day</th>
              <th>Time</th>
              <th>Subject</th>
              <th>Teacher</th>
              <th>Room</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((slot, index) => (
              <tr key={index}>
                <td>{slot.day}</td>
                <td>{slot.time}</td>
                <td>{slot.subject}</td>
                <td>{slot.teacher}</td>
                <td>{slot.room}</td>
                <td>{slot.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
