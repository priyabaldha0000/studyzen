import React from "react";

export default function Schedule() {
  const schedule = [
    { day: "Monday", time: "09:00 - 10:00", class: "10th Grade", subject: "Physics", room: "Lab 1", type: "Lecture" },
    { day: "Monday", time: "10:15 - 11:15", class: "11th Grade", subject: "Chemistry", room: "Lab 2", type: "Lab" },
    { day: "Tuesday", time: "09:00 - 10:00", class: "12th Grade", subject: "Mathematics", room: "101", type: "Lecture" },
    { day: "Wednesday", time: "09:00 - 10:00", class: "10th Grade", subject: "Physics", room: "Lab 1", type: "Lecture" },
  ];

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">📅 Weekly Schedule</h2>
      <div className="table-responsive">
        <table className="table table-bordered custom-table">
          <thead className="thead-dark">
            <tr>
              <th>Day</th>
              <th>Time</th>
              <th>Class</th>
              <th>Subject</th>
              <th>Room</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((slot, index) => (
              <tr key={index}>
                <td>{slot.day}</td>
                <td>{slot.time}</td>
                <td>{slot.class}</td>
                <td>{slot.subject}</td>
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
