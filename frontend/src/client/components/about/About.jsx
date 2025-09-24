export default function About() {
  return (
    <div>
      {/* ================ Start Banner Area ================= */}
      <section className="banner-area">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 banner-right">
              <h1 className="text-white">About Us</h1>
              <p className="mx-auto text-white mt-20 mb-40">
                We make it easy to find and follow the best courses.
              </p>
              <div className="link-nav">
                <span className="box">
                  <a href="index.html">Home </a>
                  <i className="lnr lnr-arrow-right"></i>
                  <a href="about.html">About</a>
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
                  <h4>New Subjects</h4>
                  <p>
                    Explore fresh topics and skills.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div className="feature-item d-flex">
                <i className="ti-cup"></i>
                <div className="ml-20">
                  <h4>Best Lessons</h4>
                  <p>Master tough subjects easily.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div className="feature-item d-flex border-right-0">
                <i className="ti-desktop"></i>
                <div className="ml-20">
                  <h4>Digital Books</h4>
                  <p>
                    Access all your study materials online.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================ End Feature Area ================= */}

      {/* ================- Start About Area ================= */}
      <section className="about-area section-gap">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5 col-md-6 about-left">
              <img className="img-fluid" src="img/about-img.png" alt="About Us" />
            </div>
            <div className="offset-lg-1 col-lg-5 col-md-12 about-right">
              <h1>
                Over all <br />
                250 Courses <br />
                from 20 Platforms
              </h1>
              <div>
                <p>
                  Build Your Future, Not a Search History.
                  Stop searching for courses. Start learning from over 2500 curated courses from 20+ leading platforms. 
                  It’s exciting to begin your coding career, and we're here to help you every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================- End About Area ================= */}

      {/* ================ Start Video Area ================= */}
      <section className="video-area section-gap-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="section-title text-white">
                <h2 className="text-white">
                  Watch Our Experts <br />
                  in Live Action
                </h2>
                <p>
                  Our trainers aren't just teachers; they're mentors. 
                  Join a live session to see their passion and expertise, and get the guidance you need to become a great developer.
                </p>
              </div>
            </div>
            <div className="offset-lg-1 col-md-6 video-left">
              <div className="owl-carousel video-carousel">
                <div className="single-video">
                  <div className="video-part">
                    <img className="img-fluid" src="../../public/img/video-img.jpg" alt="Video Thumbnail" />
                    <div className="overlay"></div>
                    <a className="popup-youtube play-btn" href="https://www.youtube.com/watch?v=VufDd-QL1c0">
                      <img className="play-icon" src="img/play-btn.png" alt="Play Button" />
                    </a>
                  </div>
                  <h4 className="text-white mb-20 mt-30">Learn Angular js Course for Legendary Persons</h4>
                  <p className="text-white mb-20">
                    In the history of modern astronomy, there is probably no one greater leap forward than the building and
                    launch of the space telescope known as the Hubble.
                  </p>
                </div>

                <div className="single-video">
                  <div className="video-part">
                    <img className="img-fluid" src="img/video-img.jpg" alt="Video Thumbnail" />
                    <div className="overlay"></div>
                    <a className="popup-youtube play-btn" href="https://www.youtube.com/watch?v=VufDd-QL1c0">
                      <img className="play-icon" src="img/play-btn.png" alt="Play Button" />
                    </a>
                  </div>
                  <h4 className="text-white mb-20 mt-30">Learn Angular js Course for Legendary Persons</h4>
                  <p className="text-white mb-20">
                    In the history of modern astronomy, there is probably no one greater leap forward than the building and
                    launch of the space telescope known as the Hubble.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================ End Video Area ================= */}

      {/* ================ Start Feature Area ================= */}
      <section className="other-feature-area">
        <div className="container">
          <div className="feature-inner row">
            <div className="col-lg-12">
              <div className="section-title text-left">
                <h2>
                  Student Features <br />
                  You'll Love
                </h2>
                <p>
                  Tools and benefits designed to make your study life easier.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="other-feature-item">
                <i className="ti-key"></i>
                <h4>Always Available</h4>
                <div>
                  <p>
                    Access all your courses anytime, forever.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt--160">
              <div className="other-feature-item">
                <i className="ti-files"></i>
                <h4>Study Files</h4>
                <div>
                  <p>
                    Download notes and practice sheets.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt--260">
              <div className="other-feature-item">
                <i className="ti-medall-alt"></i>
                <h4>Student Perks</h4>
                <div>
                  <p>
                    Join our student club for special offers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="other-feature-item">
                <i className="ti-briefcase"></i>
                <h4>Many Courses</h4>
                <div>
                  <p>
                    Over 35,000+ courses for all subjects.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt--160">
              <div className="other-feature-item">
                <i className="ti-crown"></i>
                <h4>Expert Help</h4>
                <div>
                  <p>
                    Get guidance from top educators.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt--260">
              <div className="other-feature-item">
                <i className="ti-headphone-alt"></i>
                <h4>Live Support</h4>
                <div>
                  <p>
                    Quick answers to your questions, 24/7.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================ End Feature Area ================= */}

      {/* ================ Start Testimonials Area ================= */}
      <section className="testimonials-area section-gap">
        <div className="container">
          <div className="testi-slider owl-carousel" data-slider-id="1">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="item">
                  <div className="testi-item">
                    <img src="img/quote.png" alt="Quote Icon" />
                    <div className="mt-40 text">
                      <p>
                        As conscious traveling Paup ers we must always be oncerned
                        about our dear Mother Earth. If you think about it, you
                        travel across her face and She is the host to your
                        journey.
                      </p>
                    </div>
                    <h4>Fanny Spencer</h4>
                    <p>Chief Executive, Amazon</p>
                  </div>
                </div>
              </div>

              <div className="offset-lg-1 col-lg-6">
                <img src="img/testimonial/t1.jpg" alt="Testimonial Person" />
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="item">
                  <div className="testi-item">
                    <img src="img/quote.png" alt="Quote Icon" />
                    <div className="mt-40 text">
                      <p>
                        As conscious traveling Paup ers we must always be oncerned
                        about our dear Mother Earth. If you think about it, you
                        travel across her face <br />
                        and She is the host to your journey.
                      </p>
                    </div>
                    <h4>Fanny Spencer</h4>
                    <p>Chief Executive, Amazon</p>
                  </div>
                </div>
              </div>

              <div className="offset-lg-1 col-lg-6">
                <img src="img/testimonial/t1.jpg" alt="Testimonial Person" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================ End Testimonials Area ================= */}
    </div>
  );
}