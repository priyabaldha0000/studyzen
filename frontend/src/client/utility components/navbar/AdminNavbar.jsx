import React from "react";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg main-navbar sticky">
      {/* Left section */}
      <div className="form-inline mr-auto">
        <ul className="navbar-nav mr-3">
          <li>
            <button
              className="nav-link nav-link-lg collapse-btn btn btn-link"
              onClick={() => console.log("Toggle sidebar")}
            >
              <i data-feather="align-justify" />
            </button>
          </li>
          <li>
            <button
              className="nav-link nav-link-lg fullscreen-btn btn btn-link"
              onClick={() => console.log("Fullscreen toggle")}
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
              <div className="search-element">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{ width: "200px" }}
                />
                <button className="btn" type="submit">
                  <i className="fas fa-search" />
                </button>
              </div>
            </form>
          </li>
        </ul>
      </div>

      {/* Right section */}
      <ul className="navbar-nav navbar-right">
        {/* Messages */}
        <li className="dropdown dropdown-list-toggle">
          <button
            className="nav-link nav-link-lg message-toggle btn btn-link"
            data-toggle="dropdown"
          >
            <i data-feather="mail" />
            <span className="badge headerBadge1">6</span>
          </button>
          <div className="dropdown-menu dropdown-list dropdown-menu-right pullDown">
            <div className="dropdown-header">
              Messages
              <div className="float-right">
                <a href="#">Mark All As Read</a>
              </div>
            </div>

            <div className="dropdown-list-content dropdown-list-message">
              {/* Example message */}
              <a href="#" className="dropdown-item">
                <span className="dropdown-item-avatar text-white">
                  <img
                    alt="John Deo"
                    src="assets/img/users/user-1.png"
                    className="rounded-circle"
                  />
                </span>
                <span className="dropdown-item-desc">
                  <span className="message-user">John Deo</span>
                  <span className="time messege-text">
                    Please check your mail !!
                  </span>
                  <span className="time">2 Min Ago</span>
                </span>
              </a>

              {/* Repeat other message items as needed */}
            </div>

            <div className="dropdown-footer text-center">
              <a href="#">
                View All <i className="fas fa-chevron-right" />
              </a>
            </div>
          </div>
        </li>

        {/* Notifications */}
        <li className="dropdown dropdown-list-toggle">
          <button
            className="nav-link notification-toggle nav-link-lg btn btn-link"
            data-toggle="dropdown"
          >
            <i data-feather="bell" className="bell" />
          </button>
          <div className="dropdown-menu dropdown-list dropdown-menu-right pullDown">
            <div className="dropdown-header">
              Notifications
              <div className="float-right">
                <a href="#">Mark All As Read</a>
              </div>
            </div>
            <div className="dropdown-list-content dropdown-list-icons">
              <a href="#" className="dropdown-item dropdown-item-unread">
                <span className="dropdown-item-icon bg-primary text-white">
                  <i className="fas fa-code" />
                </span>
                <span className="dropdown-item-desc">
                  Template update is available now!
                  <span className="time">2 Min Ago</span>
                </span>
              </a>
              {/* Add other notifications similarly */}
            </div>
            <div className="dropdown-footer text-center">
              <a href="#">
                View All <i className="fas fa-chevron-right" />
              </a>
            </div>
          </div>
        </li>

        {/* User profile */}
        <li className="dropdown">
          <button
            className="nav-link dropdown-toggle nav-link-lg nav-link-user btn btn-link"
            data-toggle="dropdown"
          >
            <img
              alt="User"
              src="assets/img/user.png"
              className="user-img-radious-style"
            />
            <span className="d-sm-none d-lg-inline-block"></span>
          </button>
          <div className="dropdown-menu dropdown-menu-right pullDown">
            <div className="dropdown-title">Hello Sarah Smith</div>
            <a href="profile.html" className="dropdown-item has-icon">
              <i className="far fa-user" /> Profile
            </a>
            <a href="timeline.html" className="dropdown-item has-icon">
              <i className="fas fa-bolt" /> Activities
            </a>
            <a href="#" className="dropdown-item has-icon">
              <i className="fas fa-cog" /> Settings
            </a>
            <div className="dropdown-divider"></div>
            <a href="auth-login.html" className="dropdown-item has-icon text-danger">
              <i className="fas fa-sign-out-alt" /> Logout
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
