// src/components/admin/ManageStudents.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ManageStudents = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // The token from the admin login
    const adminToken = localStorage.getItem('token'); 

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                // Adjust the API endpoint to your student route
                const response = await axios.get('/api/students/all', {
                    headers: {
                        Authorization: `Bearer ${adminToken}`
                    }
                });
                setStudents(response.data.students); // The `students` array from your backend response
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch student data.");
                setLoading(false);
            }
        };

        if (adminToken) {
            fetchStudents();
        } else {
            navigate('/admin/login'); // Redirect to login if not authenticated
        }
    }, [adminToken, navigate]);

    // Function to handle student deletion
    const handleDelete = async (studentId) => {
        try {
            await axios.delete(`/api/students/${studentId}`, {
                headers: {
                    Authorization: `Bearer ${adminToken}`
                }
            });
            // Filter the deleted student out of the state to update the UI
            setStudents(students.filter(student => student._id !== studentId));
            alert("Student deleted successfully!");
        } catch (err) {
            alert("Failed to delete student.");
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="manage-students-container">
            <h3>Manage Students</h3>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Class</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Guardian</th>
                        <th>Phone</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.length > 0 ? (
                        students.map((student, index) => (
                            <tr key={student._id}>
                                <td>{index + 1}</td>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.student_class}</td>
                                <td>{student.age}</td>
                                <td>{student.gender}</td>
                                <td>{student.guardian}</td>
                                <td>{student.guardian_phone}</td>
                                <td>
                                    {/* You need to configure your backend to serve these images */}
                                    <img src={`http://localhost:5173/images/${student.student_image}`} alt={student.name} width="50" />
                                </td>
                                <td>
                                    <button onClick={() => navigate(`/admin/students/edit/${student._id}`)}>Edit</button>
                                    <button onClick={() => handleDelete(student._id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="10" style={{ textAlign: "center" }}>No students found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ManageStudents;