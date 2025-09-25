import React, { useEffect } from "react";
import feather from "feather-icons";

const Navbar = () => {
  useEffect(() => {
    feather.replace(); // initialize feather icons
  }, []);

  const handleLogout = () => {
  localStorage.removeItem("token");   // clear JWT
  window.location.href = "/";         // redirect to homepage
};


  return (
    <nav
      className="navbar navbar-expand-lg main-navbar sticky"
      style={{ background: "#fff", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
    >
      {/* Left section: Logo */}
      <div className="navbar-brand d-flex align-items-center">
        
        
      </div>

      {/* Left section buttons */}
      <div className="form-inline mr-auto ml-3">
        <ul className="navbar-nav mr-3">
          <li>
            <button
              className="nav-link nav-link-lg btn btn-link"
              onClick={() => console.log("Toggle sidebar")}
              style={{ color: "#34395e" }}
            >
              <i data-feather="align-justify" />
            </button>
          </li>
          <li>
            <button
              className="nav-link nav-link-lg btn btn-link"
              onClick={() => console.log("Fullscreen toggle")}
              style={{ color: "#34395e" }}
            >
              <i data-feather="maximize" />
            </button>
          </li>
          <li>
            <form
              className="form-inline mr-auto"
              onSubmit={(e) => {
                e.preventDefault();
                console.log("Search submitted");
              }}
            >
              <div className="search-element" style={{ display: "flex" }}>
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{ width: "200px", border: "1px solid #ddd" }}
                />
                <button className="btn" type="submit" style={{ color: "#34395e" }}>
                  <i className="fas fa-search" />
                </button>
              </div>
            </form>
          </li>
        </ul>
      </div>

      {/* Right section */}
      <ul className="navbar-nav navbar-right align-items-center">
        {/* Messages */}
        <li className="nav-item mr-3">
          <button
            className="nav-link nav-link-lg btn btn-link"
            style={{ color: "#34395e", position: "relative" }}
            onClick={() => console.log("Messages clicked")}
          >
            <i data-feather="mail" />
            <span
              className="badge headerBadge1"
              style={{
                background: "#6777ef",
                color: "#fff",
                borderRadius: "50%",
                fontSize: "12px",
                padding: "2px 6px",
                position: "absolute",
                top: "0",
                right: "0",
              }}
            >
              6
            </span>
          </button>
        </li>

        {/* Notifications */}
        <li className="nav-item mr-3">
          <button
            className="nav-link nav-link-lg btn btn-link"
            style={{ color: "#34395e" }}
            onClick={() => console.log("Notifications clicked")}
          >
            <i data-feather="bell" />
          </button>
        </li>

        {/* User profile */}
        <li className="nav-item dropdown">
          <button
            className="btn btn-link d-flex align-items-center"
            style={{ color: "#34395e" }}
            onClick={() => console.log("Profile clicked")}
          >
            {/* <img
              alt="User"
              src="/assets/img/user.png"
              className="user-img-radious-style"
              style={{ width: "35px", height: "35px", borderRadius: "50%" }}
            /> */}
            <span className="ml-2 d-sm-none d-lg-inline-block">welcome</span>
          </button>
        </li>

        {/* Logout button */}
        <li className="nav-item ml-3">
            <button onClick={handleLogout} className="btn btn-danger ml-2">
            <i className="fas fa-sign-out-alt mr-1"></i> Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
