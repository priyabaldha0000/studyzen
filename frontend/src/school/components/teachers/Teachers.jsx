import React, { useEffect, useState } from "react";
import axios from "axios";

export default function TeacherManagement() {
  const [teachers, setTeachers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/teacher", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.data.success) {
        setTeachers(res.data.teachers);
      }
    } catch (err) {
      console.error("Error fetching teachers:", err);
    }
  };

  const deleteTeacher = async (id) => {
    if (!window.confirm("Are you sure you want to delete this teacher?")) return;
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/api/teacher/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchTeachers();
    } catch (err) {
      console.error("Error deleting teacher:", err);
    }
  };

  const filtered = teachers.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(search.toLowerCase()) ||
      teacher.email.toLowerCase().includes(search.toLowerCase()) ||
      (teacher.qualification || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="section">
      <div className="card">
        <div className="card-header">
          <h4>Manage Teacher Records</h4>
          <div className="card-header-action">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by Name, Email or Qualification..."
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
                  <th>Qualification</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>School</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length > 0 ? (
                  filtered.map((teacher, i) => (
                    <tr key={teacher._id}>
                      <td>{i + 1}</td>
                      <td>{teacher.name}</td>
                      <td>{teacher.email}</td>
                      <td>{teacher.qualification}</td>
                      <td>{teacher.age}</td>
                      <td>{teacher.gender}</td>
                      <td>{teacher.school?.name || "N/A"}</td>
                      <td>
                        {teacher.teacher_image ? (
                          <img
                            src={`http://localhost:5000/uploads/teacher-images/${teacher.teacher_image}`}
                            alt={teacher.name}
                            className="rounded-circle"
                            width="40"
                            height="40"
                          />
                        ) : (
                          <div
                            className="text-muted"
                            style={{
                              width: "40px",
                              height: "40px",
                              lineHeight: "40px",
                              textAlign: "center",
                              border: "1px solid #ddd",
                              borderRadius: "50%",
                            }}
                          >
                            <i className="fas fa-user-tie"></i>
                          </div>
                        )}
                      </td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => deleteTeacher(teacher._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="text-center">
                      No teacher records found.
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
