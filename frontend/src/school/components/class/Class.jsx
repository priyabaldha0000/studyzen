import React from "react";

export default function Class() {
  return (
    <>
      {/* ================ Start Banner Area ================= */}
      <section className="banner-area">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 banner-right text-center">
              <h1 className="text-white">Classes</h1>
              <p className="mx-auto text-white mt-20 mb-40">
                Browse and join your school classes easily.
              </p>
              <div className="link-nav">
                <span className="box">
                  <a href="/">Home </a>
                  <i className="lnr lnr-arrow-right"></i>
                  <a href="/class">Classes</a>
                </span>
              </div>
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
                  <h4>New Classes</h4>
                  <p>Check the latest classes added for you.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="feature-item d-flex">
                <i className="ti-cup"></i>
                <div className="ml-20">
                  <h4>Top Subjects</h4>
                  <p>See the most popular subjects students are learning.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="feature-item d-flex border-right-0">
                <i className="ti-desktop"></i>
                <div className="ml-20">
                  <h4>E-Notes</h4>
                  <p>Download notes and study materials anytime.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================ End Feature Area ================= */}

      {/* ================ Start Popular Classes Area ================= */}
      <section className="popular-course-area section-gap">
        <div className="container-fluid">
          <div className="row justify-content-center section-title">
            <div className="col-lg-12 text-center">
              <h2>
                Popular Classes <br />
                Available Right Now
              </h2>
              <p>
                Explore trending classes that students love to join and learn.
              </p>
            </div>
          </div>
          <div className="row">
            {/* Example Class Card 1 */}
            <div className="col-lg-3 col-md-6">
              <div className="single-popular-course">
                <div className="thumb">
                  <img
                    className="f-img img-fluid mx-auto"
                    src="/img/class/c1.jpg"
                    alt="Class 1"
                  />
                </div>
                <div className="details">
                  <h4>Mathematics Basics</h4>
                  <p>Learn important math concepts in an easy way.</p>
                </div>
              </div>
            </div>

            {/* Example Class Card 2 */}
            <div className="col-lg-3 col-md-6">
              <div className="single-popular-course">
                <div className="thumb">
                  <img
                    className="f-img img-fluid mx-auto"
                    src="/img/class/c2.jpg"
                    alt="Class 2"
                  />
                </div>
                <div className="details">
                  <h4>Science Experiments</h4>
                  <p>Understand science with fun practical examples.</p>
                </div>
              </div>
            </div>

            {/* Example Class Card 3 */}
            <div className="col-lg-3 col-md-6">
              <div className="single-popular-course">
                <div className="thumb">
                  <img
                    className="f-img img-fluid mx-auto"
                    src="/img/class/c3.jpg"
                    alt="Class 3"
                  />
                </div>
                <div className="details">
                  <h4>History Made Easy</h4>
                  <p>Explore world history in simple lessons.</p>
                </div>
              </div>
            </div>

            {/* Example Class Card 4 */}
            <div className="col-lg-3 col-md-6">
              <div className="single-popular-course">
                <div className="thumb">
                  <img
                    className="f-img img-fluid mx-auto"
                    src="/img/class/c4.jpg"
                    alt="Class 4"
                  />
                </div>
                <div className="details">
                  <h4>English Grammar</h4>
                  <p>Improve your grammar and communication skills.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================ End Popular Classes Area ================= */}

      {/* ================ Start Registration Area ================= */}
      <section className="registration-area">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-5">
              <div className="section-title text-left text-white">
                <h2 className="text-white">Join New Classes</h2>
                <p>
                  Fill the form and register for free demo classes today.
                </p>
              </div>
            </div>
            <div className="offset-lg-3 col-lg-4 col-md-6">
              <div className="course-form-section">
                <h3 className="text-white">Free Demo</h3>
                <form className="course-form-area contact-page-form course-form text-right">
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="col-lg-12 text-center">
                    <button className="btn text-uppercase">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================ End Registration Area ================= */}
    </>
  );
}
