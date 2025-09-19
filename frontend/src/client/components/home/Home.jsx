import "./Home.css";

export default function Home() {
  return (
    <div>
      {/* ================ Start Banner Area ================= */}
      <section className="home-banner-area">
        <div className="container">
          <div className="row justify-content-center fullscreen align-items-center">
            <div className="col-lg-5 col-md-8 home-banner-left">
              <h1 className="text-white">
                StudyZen <br />
                Learn with us
                {/* Take the first step <br />
                to learn with us */}
              </h1>
              
            </div>
            <div className="offset-lg-2 col-lg-5 col-md-12 home-banner-right">
              <img className="img-fluid" src="img/header-img.png" alt="Header" />
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
                  <h4>Languages</h4>
                  <p>
                    React,
                    Java,
                    Python,
                    C,
                    C++
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div className="feature-item d-flex">
                <i className="ti-cup"></i>
                <div className="ml-20">
                  <h4>Top Courses</h4>
                  <p>Cyber Security, Web Development, Front-end & Back-end Developer</p>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div className="feature-item d-flex border-right-0">
                <i className="ti-desktop"></i>
                <div className="ml-20">
                  <h4>Online Courses</h4>
                  <p>Coursera</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}   
