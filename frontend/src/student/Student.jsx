import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AdminNavbar from "../client/utility components/navbar/AdminNavbar"; // Assuming this is a shared component

export default function Student() {
  const navigate = useNavigate();

  return (
    <>
      <AdminNavbar /> {/* Or a specific StudentNavbar component if it exists */}
      <div className="main-wrapper main-wrapper-1">
        {/* Sidebar */}
        <div className="main-sidebar sidebar-style-2">
          <aside id="sidebar-wrapper">
            <div className="sidebar-brand">
              <a href="#" onClick={() => navigate("/student")}>
                <img alt="logo" src="/assets/img/logo.png" className="header-logo" />{" "}
                <span className="logo-name">Student</span>
              </a>
            </div>

            <ul className="sidebar-menu">
              <li className="menu-header">Main</li>

              {/* Dashboard */}
              <li className="dropdown active">
                <a href="#" onClick={() => navigate("/student")} className="nav-link">
                  <i className="fas fa-tachometer-alt"></i>
                  <span>Dashboard</span>
                </a>
              </li>

              {/* Subjects */}
              <li className="dropdown">
                <a href="#" onClick={() => navigate("/student/subjects")} className="nav-link">
                  <i className="fas fa-book-open"></i>
                  <span>Subjects</span>
                </a>
              </li>

              {/* Schedule */}
              <li className="dropdown">
                <a href="#" onClick={() => navigate("/student/schedule")} className="nav-link">
                  <i className="fas fa-calendar-alt"></i>
                  <span>Schedule</span>
                </a>
              </li>

              {/* Examinations */}
              <li className="dropdown">
                <a href="#" onClick={() => navigate("/student/examinations")} className="nav-link">
                  <i className="fas fa-edit"></i>
                  <span>Examinations</span>
                </a>
              </li>

              {/* Attendance */}
              <li className="dropdown">
                <a href="#" onClick={() => navigate("/student/attendance")} className="nav-link">
                  <i className="fas fa-clipboard-check"></i>
                  <span>Attendance</span>
                </a>
              </li>

              {/* Notice */}
              <li className="dropdown">
                <a href="#" onClick={() => navigate("/student/notice")} className="nav-link">
                  <i className="fas fa-bullhorn"></i>
                  <span>Notice</span>
                </a>
              </li>
            </ul>
          </aside>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </>
  );
}