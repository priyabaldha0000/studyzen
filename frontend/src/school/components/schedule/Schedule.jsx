import React from "react";

export default function Schedule() {
  // Example schedule data (can be replaced with MongoDB later)
  const timetable = [
    {
      day: "Monday",
      slots: [
        { time: "08:00 - 09:00", subject: "Mathematics", class: "10A", teacher: "Prof. Alice Johnson", room: "101", info: "" },
        { time: "09:00 - 10:00", subject: "Physics", class: "12B", teacher: "Dr. Michael Brown", room: "202", info: "Lab" },
        { time: "10:00 - 11:00", subject: "English", class: "7C", teacher: "Mrs. Sarah Wilson", room: "103", info: "" },
        { time: "11:00 - 12:00", subject: "History", class: "8A", teacher: "Mr. David Lee", room: "104", info: "" },
      ],
    },
    {
      day: "Tuesday",
      slots: [
        { time: "08:00 - 09:00", subject: "Chemistry", class: "12A", teacher: "Dr. Michael Brown", room: "202", info: "Lab" },
        { time: "09:00 - 10:00", subject: "Mathematics", class: "10B", teacher: "Prof. Alice Johnson", room: "101", info: "" },
        { time: "10:00 - 11:00", subject: "English", class: "7A", teacher: "Mrs. Sarah Wilson", room: "103", info: "" },
        { time: "11:00 - 12:00", subject: "Biology", class: "11C", teacher: "Prof. Emma Clark", room: "105", info: "Lab" },
      ],
    },
    {
      day: "Wednesday",
      slots: [
        { time: "08:00 - 09:00", subject: "Physics", class: "12B", teacher: "Dr. Michael Brown", room: "202", info: "" },
        { time: "09:00 - 10:00", subject: "Mathematics", class: "10C", teacher: "Prof. Alice Johnson", room: "101", info: "" },
        { time: "10:00 - 11:00", subject: "Computer Science", class: "11A", teacher: "Mr. John Doe", room: "106", info: "Lab" },
        { time: "11:00 - 12:00", subject: "History", class: "8B", teacher: "Mr. David Lee", room: "104", info: "" },
      ],
    },
    {
      day: "Thursday",
      slots: [
        { time: "08:00 - 09:00", subject: "Chemistry", class: "12C", teacher: "Dr. Michael Brown", room: "202", info: "Lab" },
        { time: "09:00 - 10:00", subject: "Mathematics", class: "10A", teacher: "Prof. Alice Johnson", room: "101", info: "" },
        { time: "10:00 - 11:00", subject: "English", class: "7B", teacher: "Mrs. Sarah Wilson", room: "103", info: "" },
        { time: "11:00 - 12:00", subject: "Physics", class: "12A", teacher: "Dr. Michael Brown", room: "202", info: "" },
      ],
    },
    {
      day: "Friday",
      slots: [
        { time: "08:00 - 09:00", subject: "Mathematics", class: "10B", teacher: "Prof. Alice Johnson", room: "101", info: "" },
        { time: "09:00 - 10:00", subject: "Biology", class: "11B", teacher: "Prof. Emma Clark", room: "105", info: "Lab" },
        { time: "10:00 - 11:00", subject: "History", class: "8C", teacher: "Mr. David Lee", room: "104", info: "" },
        { time: "11:00 - 12:00", subject: "Computer Science", class: "11C", teacher: "Mr. John Doe", room: "106", info: "Lab" },
      ],
    },
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
              <th>Subject</th>
              <th>Class</th>
              <th>Teacher</th>
              <th>Room</th>
              <th>Info</th>
            </tr>
          </thead>
          <tbody>
            {timetable.map((dayItem, i) =>
              dayItem.slots.map((slot, j) => (
                <tr key={`${i}-${j}`}>
                  {j === 0 && (
                    <td rowSpan={dayItem.slots.length} style={{ fontWeight: "bold", backgroundColor: "#f2f2f2" }}>
                      {dayItem.day}
                    </td>
                  )}
                  <td>{slot.time}</td>
                  <td>{slot.subject}</td>
                  <td>{slot.class}</td>
                  <td>{slot.teacher}</td>
                  <td>{slot.room}</td>
                  <td>{slot.info}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
