// schoolo/Dashboard.jsx
import React from "react";

export default function Dashboard() {
  return (
    <>
      {/* ================ Start Banner Area ================= */}
      <section className="home-banner-area">
        <div className="container">
          <div className="row justify-content-center fullscreen align-items-center">
            <div className="col-lg-5 col-md-8 home-banner-left">
              <h1 className="text-white">
                Welcome to Your <br />
                School Dashboard
              </h1>
              <p className="mx-auto text-white mt-20 mb-40">
                Here you can check your classes, study materials, and track your progress easily.
              </p>
            </div>

            <div className="offset-lg-2 col-lg-5 col-md-12 home-banner-right">
              <img
                className="img-fluid"
                src="/img/header-img.png" // keep image inside public/img
                alt="School Dashboard"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ================ End Banner Area ================= */}

      {/* ================ Start Feature Area ================= */}
      <section className="feature-area">
        <div className="container-fluid">
          <div className="feature-inner row">
            <div className="col-lg-2 col-md-6">
              <div className="feature-item d-flex">
                <i className="ti-book"></i>
                <div className="ml-20">
                  <h4>My Classes</h4>
                  <p>
                    See your class list and join your daily lessons quickly.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div className="feature-item d-flex">
                <i className="ti-cup"></i>
                <div className="ml-20">
                  <h4>Achievements</h4>
                  <p>
                    View your certificates, grades, and rewards earned in school.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div className="feature-item d-flex border-right-0">
                <i className="ti-desktop"></i>
                <div className="ml-20">
                  <h4>Study Materials</h4>
                  <p>
                    Download notes, e-books, and other learning resources easily.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================ End Feature Area ================= */}
    </>
  );
}
