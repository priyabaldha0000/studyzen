import * as React from "react";
import axios from "axios";

export default function StudentDashboard() {
  const [student, setStudent] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    const fetchStudent = async () => {
      try {
        const token = localStorage.getItem("studentToken");
        if (!token) {
          setMessage("No token found. Please login.");
          setLoading(false);
          return;
        }

        const resp = await axios.get("http://localhost:5000/api/student/own", {
          headers: { Authorization: token },
        });

        setStudent(resp.data.student);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setMessage(error.response?.data?.message || "Failed to fetch data");
        setLoading(false);
      }
    };

    fetchStudent();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container" style={{ paddingTop: "120px" }}>
      {message && <p>{message}</p>}
      {student && (
        <div>
          <h2>Welcome, {student.name}</h2>
          <img
            src={`http://localhost:5000/images/students/${student.student_image}`}
            alt="Student"
            style={{ maxHeight: "200px", borderRadius: "8px" }}
          />
          <p>Email: {student.email}</p>
          <p>Class: {student.student_class}</p>
          <p>Age: {student.age}</p>
          <p>Gender: {student.gender}</p>
          <p>Guardian: {student.guardian}</p>
          <p>Guardian Phone: {student.guardian_phone}</p>
        </div>
      )}
    </div>
  );
}
