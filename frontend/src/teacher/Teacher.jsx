import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AdminNavbar from "../client/utility components/navbar/AdminNavbar"; // Assuming a shared navbar

export default function Teacher() {
  const navigate = useNavigate();

  return (
    <>
      <AdminNavbar /> {/* Or a specific TeacherNavbar component if it exists */}
      <div className="main-wrapper main-wrapper-1">
        {/* Sidebar */}
        <div className="main-sidebar sidebar-style-2">
          <aside id="sidebar-wrapper">
            <div className="sidebar-brand">
              <a href="#" onClick={() => navigate("/teacher")}>
                <img alt="logo" src="/assets/img/logo.png" className="header-logo" />{" "}
                <span className="logo-name">Teacher</span>
              </a>
            </div>

            <ul className="sidebar-menu">
              <li className="menu-header">Main</li>

              {/* Dashboard */}
              <li className="dropdown active">
                <a href="#" onClick={() => navigate("/teacher")} className="nav-link">
                  <i className="fas fa-tachometer-alt"></i>
                  <span>Dashboard</span>
                </a>
              </li>

              {/* Classes */}
              <li className="dropdown">
                <a href="#" onClick={() => navigate("/teacher/classes")} className="nav-link">
                  <i className="fas fa-layer-group"></i>
                  <span>Classes</span>
                </a>
              </li>

              {/* Students */}
              <li className="dropdown">
                <a href="#" onClick={() => navigate("/teacher/students")} className="nav-link">
                  <i className="fas fa-user-graduate"></i>
                  <span>Students</span>
                </a>
              </li>

              {/* Schedule */}
              <li className="dropdown">
                <a href="#" onClick={() => navigate("/teacher/schedule")} className="nav-link">
                  <i className="fas fa-calendar-alt"></i>
                  <span>Schedule</span>
                </a>
              </li>

              {/* Attendance */}
              <li className="dropdown">
                <a href="#" onClick={() => navigate("/teacher/attendance")} className="nav-link">
                  <i className="fas fa-clipboard-check"></i>
                  <span>Attendance</span>
                </a>
              </li>
              
              {/* Examinations */}
              <li className="dropdown">
                <a href="#" onClick={() => navigate("/teacher/examinations")} className="nav-link">
                  <i className="fas fa-edit"></i>
                  <span>Examinations</span>
                </a>
              </li>

              {/* Notice */}
              <li className="dropdown">
                <a href="#" onClick={() => navigate("/teacher/notice")} className="nav-link">
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