import React, { useEffect, useState } from "react";
import axios from "axios";

export default function StudentManagement() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/student/all", { 
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.data.success) {
        // Fetching data from the 'students' field in the response (as defined in your fixed controller)
        setStudents(res.data.students); 
      }
    } catch (err) {
      console.error("Error fetching students:", err);
    }
  };

  const deleteStudent = async (id) => {
    if (!window.confirm("Are you sure you want to delete this student?")) return;
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/api/student/${id}`, { 
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchStudents();
    } catch (err) {
      console.error("Error deleting student:", err);
    }
  };

  const filtered = students.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="section">
      <div className="card">
        <div className="card-header">
          <h4>Manage Student Records</h4>
          <div className="card-header-action">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by Name or Email..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <div className="input-group-btn">
                  <button className="btn btn-primary" type="button">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-striped" id="sortable-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Class/Age</th>
                  <th>Gender</th> 
                  <th>Guardian</th>
                  <th>Phone</th> 
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length > 0 ? (
                  filtered.map((student, i) => (
                    <tr key={student._id}>
                      <td>{i + 1}</td>
                      <td>{student.name}</td>
                      <td>{student.email}</td>
                      <td>{`${student.student_class || 'N/A'} / ${student.age || 'N/A'}`}</td>
                      <td>{student.gender || 'N/A'}</td> 
                      <td>{student.guardian || 'N/A'}</td>
                      <td>{student.guardian_phone || 'N/A'}</td> 
                      
                      <td>
                        {student.student_image ? (
                           <img
                            src={`http://localhost:5000/uploads/student-images/${student.student_image}`}
                            alt={student.name}
                            className="rounded-circle"
                            width="40"
                            height="40"
                          />
                        ) : (
                          <div className="text-muted" style={{ width: '40px', height: '40px', lineHeight: '40px', textAlign: 'center', border: '1px solid #ddd', borderRadius: '50%' }}>
                            <i className="fas fa-user-circle"></i>
                          </div>
                        )}
                      </td>

                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => deleteStudent(student._id)} 
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="text-center">
                      No student records found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}