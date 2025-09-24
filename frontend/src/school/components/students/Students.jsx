import React from "react";

export default function Student() {
  return (
    <section className="section">
      <div className="card">
        <div className="card-header">
          <h4>Drag &amp; Drop Row Table</h4>
          <div className="card-header-action">
            <form>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search" />
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
                  <th className="text-center">
                    <i className="fas fa-th"></i>
                  </th>
                  <th>Task Name</th>
                  <th>Progress</th>
                  <th>Members</th>
                  <th>Due Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <div className="sort-handler">
                      <i className="fas fa-th"></i>
                    </div>
                  </td>
                  <td>Create a mobile app</td>
                  <td className="align-middle">
                    <div className="progress" data-height="4" title="100%">
                      <div className="progress-bar bg-success" style={{ width: "100%" }}></div>
                    </div>
                  </td>
                  <td>
                    <img
                      alt="user"
                      src="/assets/img/users/user-5.png"
                      className="rounded-circle"
                      width="35"
                      title="Wildan Ahdian"
                    />
                  </td>
                  <td>2018-01-20</td>
                  <td>
                    <div className="badge badge-success">Completed</div>
                  </td>
                  <td>
                    <a href="#" className="btn btn-primary">
                      Detail
                    </a>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="sort-handler">
                      <i className="fas fa-th"></i>
                    </div>
                  </td>
                  <td>Redesign homepage</td>
                  <td className="align-middle">
                    <div className="progress" data-height="4" title="40%">
                      <div className="progress-bar" style={{ width: "40%" }}></div>
                    </div>
                  </td>
                  <td>
                    <img
                      alt="user"
                      src="/assets/img/users/user-1.png"
                      className="rounded-circle"
                      width="35"
                      title="Nur Alpiana"
                    />
                    <img
                      alt="user"
                      src="/assets/img/users/user-3.png"
                      className="rounded-circle"
                      width="35"
                      title="Hariono Yusup"
                    />
                    <img
                      alt="user"
                      src="/assets/img/users/user-4.png"
                      className="rounded-circle"
                      width="35"
                      title="Bagus Dwi Cahya"
                    />
                  </td>
                  <td>2018-04-10</td>
                  <td>
                    <div className="badge badge-info">Todo</div>
                  </td>
                  <td>
                    <a href="#" className="btn btn-primary">
                      Detail
                    </a>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="sort-handler">
                      <i className="fas fa-th"></i>
                    </div>
                  </td>
                  <td>Backup database</td>
                  <td className="align-middle">
                    <div className="progress" data-height="4" title="70%">
                      <div className="progress-bar bg-warning" style={{ width: "70%" }}></div>
                    </div>
                  </td>
                  <td>
                    <img
                      alt="user"
                      src="/assets/img/users/user-1.png"
                      className="rounded-circle"
                      width="35"
                      title="Rizal Fakhri"
                    />
                    <img
                      alt="user"
                      src="/assets/img/users/user-2.png"
                      className="rounded-circle"
                      width="35"
                      title="Hasan Basri"
                    />
                  </td>
                  <td>2018-01-29</td>
                  <td>
                    <div className="badge badge-warning">In Progress</div>
                  </td>
                  <td>
                    <a href="#" className="btn btn-primary">
                      Detail
                    </a>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="sort-handler">
                      <i className="fas fa-th"></i>
                    </div>
                  </td>
                  <td>Input data</td>
                  <td className="align-middle">
                    <div className="progress" data-height="4" title="100%">
                      <div className="progress-bar bg-success" style={{ width: "100%" }}></div>
                    </div>
                  </td>
                  <td>
                    <img
                      alt="user"
                      src="/assets/img/users/user-2.png"
                      className="rounded-circle"
                      width="35"
                      title="Rizal Fakhri"
                    />
                    <img
                      alt="user"
                      src="/assets/img/users/user-5.png"
                      className="rounded-circle"
                      width="35"
                      title="Isnap Kiswandi"
                    />
                    <img
                      alt="user"
                      src="/assets/img/users/user-4.png"
                      className="rounded-circle"
                      width="35"
                      title="Yudi Nawawi"
                    />
                    <img
                      alt="user"
                      src="/assets/img/users/user-1.png"
                      className="rounded-circle"
                      width="35"
                      title="Khaerul Anwar"
                    />
                  </td>
                  <td>2018-01-16</td>
                  <td>
                    <div className="badge badge-success">Completed</div>
                  </td>
                  <td>
                    <a href="#" className="btn btn-primary">
                      Detail
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
