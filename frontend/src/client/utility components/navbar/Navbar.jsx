import * as React from "react";
import { Link, useNavigate } from "react-router-dom";

const pages = [
  { link: "/", component: "Home" },
  { link: "/login", component: "Login" },
  { link: "/register", component: "Register" },
  { link: "/student", component: "Student " },   // ✅ Added
  { link: "/teacher", component: "Teacher " },   // ✅ Added
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleCloseNavMenu = (link) => {
    setIsOpen(false);
    navigate(link);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="default-header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="/img/logo.png" alt="Logo" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarSupportedContent"
            aria-expanded={isOpen ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className="lnr lnr-menu"></span>
          </button>

          <div
            className={`collapse navbar-collapse justify-content-end align-items-center ${
              isOpen ? "show" : ""
            }`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              {pages.map((page, i) => (
                <li key={i} className="nav-item">
                  <button
                    onClick={() => handleCloseNavMenu(page.link)}
                    className="nav-link btn btn-link"
                  >
                    {page.component}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
