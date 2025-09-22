import React from "react";

const Deshboard = () => {
  return (
    <div className="main-wrapper main-wrapper-1">
      
      {/* Main Content */}
      <div className="main-content">
        <section className="section">
          <div className="row">
            {/* Example Card */}
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="card">
                <div className="card-statistic-4">
                  <div className="align-items-center justify-content-between">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                        <div className="card-content">
                          <h5 className="font-15">New Booking</h5>
                          <h2 className="mb-3 font-18">258</h2>
                          <p className="mb-0">
                            <span className="col-green">10%</span> Increase
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                        <div className="banner-img">
                          <img src="/assets/img/banner/1.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Repeat above structure for other cards */}
          </div>

          {/* Revenue Chart Section */}
          <div className="row">
            <div className="col-12 col-sm-12 col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4>Revenue chart</h4>
                  <div className="card-header-action">
                    <div className="dropdown">
                      <a
                        href="#"
                        data-toggle="dropdown"
                        className="btn btn-warning dropdown-toggle"
                      >
                        Options
                      </a>
                      <div className="dropdown-menu">
                        <a href="#" className="dropdown-item has-icon">
                          <i className="fas fa-eye"></i> View
                        </a>
                        <a href="#" className="dropdown-item has-icon">
                          <i className="far fa-edit"></i> Edit
                        </a>
                        <div className="dropdown-divider"></div>
                        <a
                          href="#"
                          className="dropdown-item has-icon text-danger"
                        >
                          <i className="far fa-trash-alt"></i> Delete
                        </a>
                      </div>
                    </div>
                    <a href="#" className="btn btn-primary">
                      View All
                    </a>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-9">
                      <div id="chart1"></div>
                      {/* Chart summary section */}
                    </div>
                    <div className="col-lg-3">
                      {/* Sidebar Stats */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* More Charts */}
          <div className="row">
            <div className="col-12 col-sm-12 col-lg-4">
              <div className="card">
                <div className="card-header">
                  <h4>Chart</h4>
                </div>
                <div className="card-body">
                  <div id="chart4" className="chartsh"></div>
                </div>
              </div>
            </div>
            {/* Repeat for chart2, chart3 */}
          </div>
        </section>

        {/* Settings Sidebar */}
        <div className="settingSidebar">
          <a href="javascript:void(0)" className="settingPanelToggle">
            <i className="fa fa-spin fa-cog"></i>
          </a>
          <div className="settingSidebar-body ps-container ps-theme-default">
            <div className="fade show active">
              <div className="setting-panel-header">Setting Panel</div>
              <div className="p-15 border-bottom">
                <h6 className="font-medium m-b-10">Select Layout</h6>
                <div className="selectgroup layout-color w-50">
                  <label className="selectgroup-item">
                    <input
                      type="radio"
                      name="value"
                      value="1"
                      className="selectgroup-input-radio select-layout"
                      defaultChecked
                    />
                    <span className="selectgroup-button">Light</span>
                  </label>
                  <label className="selectgroup-item">
                    <input
                      type="radio"
                      name="value"
                      value="2"
                      className="selectgroup-input-radio select-layout"
                    />
                    <span className="selectgroup-button">Dark</span>
                  </label>
                </div>
              </div>
              {/* Rest of settings panel */}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="main-footer">
        <div className="footer-left">
          <a href="https://templateshub.net">Templateshub</a>
        </div>
        <div className="footer-right"></div>
      </footer>
    </div>
  );
};

export default Deshboard;
