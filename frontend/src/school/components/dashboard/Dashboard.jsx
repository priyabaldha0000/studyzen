import React from "react";

export default function Dashboard() {
  return (
    <section className="section">
      {/* Top Four Cards */}
      <div className="row">
        {/* New Booking */}
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div className="card">
            <div className="card-statistic-4">
              <div className="align-items-center justify-content-between">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                    <div className="card-content">
                      <h5 className="font-15">New register</h5>
                      <h2 className="mb-3 font-18">258</h2>
                      <p className="mb-0">
                        <span className="col-green">10%</span> Increase
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                    <div className="banner-img">
                      <img src="/assets/img/banner/1.png" alt="New Booking" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customers */}
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div className="card">
            <div className="card-statistic-4">
              <div className="align-items-center justify-content-between">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                    <div className="card-content">
                      <h5 className="font-15">Students</h5>
                      <h2 className="mb-3 font-18">1,287</h2>
                      <p className="mb-0">
                        <span className="col-orange">09%</span> Decrease
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                    <div className="banner-img">
                      <img src="/assets/img/banner/2.png" alt="Customers" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Project */}
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div className="card">
            <div className="card-statistic-4">
              <div className="align-items-center justify-content-between">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                    <div className="card-content">
                      <h5 className="font-15">New Project</h5>
                      <h2 className="mb-3 font-18">128</h2>
                      <p className="mb-0">
                        <span className="col-green">18%</span> Increase
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                    <div className="banner-img">
                      <img src="/assets/img/banner/3.png" alt="New Project" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Revenue */}
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div className="card">
            <div className="card-statistic-4">
              <div className="align-items-center justify-content-between">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                    <div className="card-content">
                      <h5 className="font-15">Performance</h5>
                      <h2 className="mb-3 font-18">$48,697</h2>
                      <p className="mb-0">
                        <span className="col-green">42%</span> Increase
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                    <div className="banner-img">
                      <img src="/assets/img/banner/4.png" alt="Revenue" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Chart Section */}
      <div className="row">
        <div className="col-12 col-sm-12 col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4>Revenue chart</h4>
              <div className="card-header-action">
                <div className="dropdown">
                  <a href="#" data-toggle="dropdown" className="btn btn-warning dropdown-toggle">
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
                    <a href="#" className="dropdown-item has-icon text-danger">
                      <i className="far fa-trash-alt"></i> Delete
                    </a>
                  </div>
                </div>
                <a href="#" className="btn btn-primary">View All</a>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-9">
                  <div id="chart1"></div>
                  {/* Earnings Stats */}
                  <div className="row mb-0">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                      <div className="list-inline text-center">
                        <div className="list-inline-item p-r-30">
                          <i data-feather="arrow-up-circle" className="col-green"></i>
                          <h5 className="m-b-0">$675</h5>
                          <p className="text-muted font-14 m-b-0">Weekly Earnings</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                      <div className="list-inline text-center">
                        <div className="list-inline-item p-r-30">
                          <i data-feather="arrow-down-circle" className="col-orange"></i>
                          <h5 className="m-b-0">$1,587</h5>
                          <p className="text-muted font-14 m-b-0">Monthly Earnings</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                      <div className="list-inline text-center">
                        <div className="list-inline-item p-r-30">
                          <i data-feather="arrow-up-circle" className="col-green"></i>
                          <h5 className="mb-0 m-b-0">$45,965</h5>
                          <p className="text-muted font-14 m-b-0">Yearly Earnings</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Right-side stats */}
                <div className="col-lg-3">
                  <div className="row mt-5">
                    <div className="col-7 col-xl-7 mb-3">Total customers</div>
                    <div className="col-5 col-xl-5 mb-3">
                      <span className="text-big">8,257</span>
                      <sup className="col-green">+09%</sup>
                    </div>
                    <div className="col-7 col-xl-7 mb-3">Total Income</div>
                    <div className="col-5 col-xl-5 mb-3">
                      <span className="text-big">$9,857</span>
                      <sup className="text-danger">-18%</sup>
                    </div>
                    <div className="col-7 col-xl-7 mb-3">Project completed</div>
                    <div className="col-5 col-xl-5 mb-3">
                      <span className="text-big">28</span>
                      <sup className="col-green">+16%</sup>
                    </div>
                    <div className="col-7 col-xl-7 mb-3">Total expense</div>
                    <div className="col-5 col-xl-5 mb-3">
                      <span className="text-big">$6,287</span>
                      <sup className="col-green">+09%</sup>
                    </div>
                    <div className="col-7 col-xl-7 mb-3">New teachers</div>
                    <div className="col-5 col-xl-5 mb-3">
                      <span className="text-big">684</span>
                      <sup className="col-green">+22%</sup>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Extra Charts Section */}
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
        <div className="col-12 col-sm-12 col-lg-4">
          <div className="card">
            <div className="card-header">
              <h4>Chart</h4>
            </div>
            <div className="card-body">
              <div className="summary">
                <div className="summary-chart active" id="summary-chart">
                  <div id="chart3" className="chartsh"></div>
                </div>
                <div id="summary-text"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-lg-4">
          <div className="card">
            <div className="card-header">
              <h4>Chart</h4>
            </div>
            <div className="card-body">
              <div id="chart2" className="chartsh"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
