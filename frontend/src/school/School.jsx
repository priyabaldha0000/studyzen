import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AdminNavbar from "../client/utility components/navbar/AdminNavbar";

export default function School() {
  const navigate = useNavigate();

  return (
    <>
      <AdminNavbar />
      <div className="main-wrapper main-wrapper-1">
        {/* Sidebar */}
        <div className="main-sidebar sidebar-style-2">
          <aside id="sidebar-wrapper">
            <div className="sidebar-brand">
              <a href="#" onClick={() => navigate("/school")}>
                <img alt="logo" src="/assets/img/logo.png" className="header-logo" />{" "}
                <span className="logo-name">Admin</span>
              </a>
            </div>

            <ul className="sidebar-menu">
              <li className="menu-header">Main</li>

              {/* Dashboard */}
              <li className="dropdown active">
                <a href="#" onClick={() => navigate("/school")} className="nav-link">
                  <i className="fas fa-tachometer-alt"></i>
                  <span>Dashboard</span>
                </a>
              </li>

              {/* Class */}
              <li className="dropdown">
                <a href="#" onClick={() => navigate("/school/class")} className="nav-link">
                  <i className="fas fa-layer-group"></i>
                  <span>Class</span>
                </a>
              </li>

              {/* Subjects */}
              <li className="dropdown">
                <a href="#" onClick={() => navigate("/school/subjects")} className="nav-link">
                  <i className="fas fa-book-open"></i>
                  <span>Subjects</span>
                </a>
              </li>

              {/* Students */}
              <li className="dropdown">
                <a href="#" onClick={() => navigate("/school/students")} className="nav-link">
                  <i className="fas fa-user-graduate"></i>
                  <span>Students</span>
                </a>
              </li>

              {/* Teachers */}
              <li className="dropdown">
                <a href="#" onClick={() => navigate("/school/teachers")} className="nav-link">
                  <i className="fas fa-chalkboard-teacher"></i>
                  <span>Teachers</span>
                </a>
              </li>

              {/* Attendance */}
              <li className="dropdown">
                <a href="#" onClick={() => navigate("/school/attendance")} className="nav-link">
                  <i className="fas fa-clipboard-check"></i>
                  <span>Attendance</span>
                </a>
              </li>

              {/* Schedule */}
              <li className="dropdown">
                <a href="#" onClick={() => navigate("/school/schedule")} className="nav-link">
                  <i className="fas fa-calendar-alt"></i>
                  <span>Schedule</span>
                </a>
              </li>

              {/* Examinations */}
              <li className="dropdown">
                <a href="#" onClick={() => navigate("/school/examinations")} className="nav-link">
                  <i className="fas fa-edit"></i>
                  <span>Examinations</span>
                </a>
              </li>

              {/* Notice */}
              <li className="dropdown">
                <a href="#" onClick={() => navigate("/school/notice")} className="nav-link">
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
