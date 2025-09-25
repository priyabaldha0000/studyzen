import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Students() {
  const [schools, setSchools] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchSchools();
  }, []);

  const fetchSchools = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/school/all", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.data.success) {
        setSchools(res.data.schools);
      }
    } catch (err) {
      console.error("Error fetching schools:", err);
    }
  };

  const deleteSchool = async (id) => {
    if (!window.confirm("Are you sure you want to delete this school?")) return;
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/api/school/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchSchools();
    } catch (err) {
      console.error("Error deleting school:", err);
    }
  };

  const filtered = schools.filter(
    (s) =>
      s.school_name.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="section">
      <div className="card">
        <div className="card-header">
          <h4>Manage Student</h4>
          <div className="card-header-action">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
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
                  <th>Address</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length > 0 ? (
                  filtered.map((s, i) => (
                    <tr key={s._id}>
                      <td>{i + 1}</td>
                      <td>{s.school_name}</td>
                      <td>{s.email}</td>
                      <td>{s.owner_name}</td>
                      <td>
                        <img
                          src={`http://localhost:5000/uploads/school-images/${s.school_image}`}
                          alt={s.school_name}
                          className="rounded-circle"
                          width="40"
                          height="40"
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => deleteSchool(s._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center">
                      No schools found.
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