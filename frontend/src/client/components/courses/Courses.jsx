import React from "react";
// Assuming you'll create a Courses.css for specific styles for this page
// import "./Courses.css";
// If you use react-router-dom for navigation, make sure to import Link
import { Link } from "react-router-dom";

export default function Courses() {
  return (
    <div>
      {/* ================ Start Banner Area ================= */}
      <section className="banner-area">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 banner-right">
              <h1 className="text-white">Our Courses</h1>
              <p className="mx-auto text-white mt-20 mb-40">
                Explore a wide range of courses designed to boost your skills and career.
              </p>
              <div className="link-nav">
                <span className="box">
                  <Link to="/">Home </Link>
                  <i className="lnr lnr-arrow-right"></i>
                  <Link to="/courses">Courses</Link>
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

      {/* ================ Start Popular Course Area ================= */}
      <section className="popular-course-area section-gap">
        <div className="container-fluid">
          <div className="row justify-content-center section-title">
            <div className="col-lg-12">
              <h2>
                Popular Courses <br />
                Available Right Now
              </h2>
              <p>
                Browse through our most sought-after courses designed to give you an edge.
              </p>
            </div>
          </div>
          <div className="owl-carousel popuar-course-carusel">
            <div className="single-popular-course">
              <div className="thumb">
                <img className="f-img img-fluid mx-auto" src="img/popular-course/p1.jpg" alt="Course Thumbnail 1" />
              </div>
              <div className="details">
                <div className="d-flex justify-content-between mb-20">
                  <p className="name">programming language</p>
                  <p className="value">$150</p>
                </div>
                <a href="#">
                  <h4>Learn Angular JS Course for Legendary Persons</h4>
                </a>
                <div className="bottom d-flex mt-15">
                  <ul className="list">
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                  </ul>
                  <p className="ml-20">25 Reviews</p>
                </div>
              </div>
            </div>

            <div className="single-popular-course">
              <div className="thumb">
                <img className="f-img img-fluid mx-auto" src="img/popular-course/p2.jpg" alt="Course Thumbnail 2" />
              </div>
              <div className="details">
                <div className="d-flex justify-content-between mb-20">
                  <p className="name">programming language</p>
                  <p className="value">$150</p>
                </div>
                <a href="#">
                  <h4>Learn Angular JS Course for Legendary Persons</h4>
                </a>
                <div className="bottom d-flex mt-15">
                  <ul className="list">
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                  </ul>
                  <p className="ml-20">25 Reviews</p>
                </div>
              </div>
            </div>

            <div className="single-popular-course">
              <div className="thumb">
                <img className="f-img img-fluid mx-auto" src="img/popular-course/p3.jpg" alt="Course Thumbnail 3" />
              </div>
              <div className="details">
                <div className="d-flex justify-content-between mb-20">
                  <p className="name">programming language</p>
                  <p className="value">$150</p>
                </div>
                <a href="#">
                  <h4>Learn Angular JS Course for Legendary Persons</h4>
                </a>
                <div className="bottom d-flex mt-15">
                  <ul className="list">
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                  </ul>
                  <p className="ml-20">25 Reviews</p>
                </div>
              </div>
            </div>

            <div className="single-popular-course">
              <div className="thumb">
                <img className="f-img img-fluid mx-auto" src="img/popular-course/p4.jpg" alt="Course Thumbnail 4" />
              </div>
              <div className="details">
                <div className="d-flex justify-content-between mb-20">
                  <p className="name">programming language</p>
                  <p className="value">$150</p>
                </div>
                <a href="#">
                  <h4>Learn Angular JS Course for Legendary Persons</h4>
                </a>
                <div className="bottom d-flex mt-15">
                  <ul className="list">
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                  </ul>
                  <p className="ml-20">25 Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================ End Popular Course Area ================= */}

      {/* ================ Start Video Area ================= */}
      <section className="video-area section-gap-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="section-title text-white">
                <h2 className="text-white">
                  Watch Our Trainers <br />
                  in Live Action
                </h2>
                <p>
                  Get a glimpse of our expert trainers in action, delivering engaging and effective lessons.
                </p>
              </div>
            </div>
            <div className="offset-lg-1 col-md-6 video-left">
              <div className="owl-carousel video-carousel">
                <div className="single-video">
                  <div className="video-part">
                    <img className="img-fluid" src="img/video-img.jpg" alt="Trainer Video Thumbnail" />
                    <div className="overlay"></div>
                    <a className="popup-youtube play-btn" href="https://www.youtube.com/watch?v=VufDd-QL1c0">
                      <img className="play-icon" src="img/play-btn.png" alt="Play Button" />
                    </a>
                  </div>
                  <h4 className="text-white mb-20 mt-30">Learn Angular JS Course for Legendary Persons</h4>
                  <p className="text-white mb-20">
                    Experience dynamic teaching and engaging content from our top instructors.
                  </p>
                </div>

                <div className="single-video">
                  <div className="video-part">
                    <img className="img-fluid" src="img/video-img.jpg" alt="Trainer Video Thumbnail" />
                    <div className="overlay"></div>
                    <a className="popup-youtube play-btn" href="https://www.youtube.com/watch?v=VufDd-QL1c0">
                      <img className="play-icon" src="img/play-btn.png" alt="Play Button" />
                    </a>
                  </div>
                  <h4 className="text-white mb-20 mt-30">Learn Angular JS Course for Legendary Persons</h4>
                  <p className="text-white mb-20">
                    See firsthand how our courses bring complex topics to life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================ End Video Area ================= */}


      {/* ================ Start Testimonials Area ================= */}
      <section className="testimonials-area section-gap">
        <div className="container">
          <div className="testi-slider owl-carousel" data-slider-id="1">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="item">
                  <div className="testi-item">
                    <img src="img/quote.png" alt="Quote" />
                    <div className="mt-40 text">
                      <p>
                        "I learned so much and gained new skills. This platform is amazing for online education."
                      </p>
                    </div>
                    <h4>Emily R.</h4>
                    <p>Web Developer Student</p>
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
                    <img src="img/quote.png" alt="Quote" />
                    <div className="mt-40 text">
                      <p>
                        "The courses are well-structured and easy to follow. I highly recommend it to everyone."
                      </p>
                    </div>
                    <h4>David L.</h4>
                    <p>Graphic Design Enthusiast</p>
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

      {/* ================ Start Registration Area ================= */}
      <section className="registration-area">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-5">
              <div className="section-title text-left text-white">
                <h2 className="text-white">
                  Join Our Community <br />
                  And Learn for Free
                </h2>
                <p>
                  Sign up today to get access to free courses and start your learning journey with us.
                </p>
              </div>
            </div>
            <div className="offset-lg-3 col-lg-4 col-md-6">
              <div className="course-form-section">
                <h3 className="text-white">Get Free Courses Now</h3>
                <p className="text-white">It's time to learn something new!</p>
                <form className="course-form-area contact-page-form course-form text-right" id="myForm" action="mail.html" method="post">
                  <div className="form-group col-md-12">
                    <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" onFocus={(e) => e.target.placeholder = ''}
                      onBlur={(e) => e.target.placeholder = 'Your Name'} />
                  </div>
                  <div className="form-group col-md-12">
                    <input type="text" className="form-control" id="subject" name="subject" placeholder="Phone Number" onFocus={(e) => e.target.placeholder = ''}
                      onBlur={(e) => e.target.placeholder = 'Phone Number'} />
                  </div>
                  <div className="form-group col-md-12">
                    <input type="email" className="form-control" id="email" name="email" placeholder="Email Address" onFocus={(e) => e.target.placeholder = ''}
                      onBlur={(e) => e.target.placeholder = 'Email Address'} />
                  </div>
                  <div className="col-lg-12 text-center">
                    <Link to="/register" className="text-primary">Sign Up Now</Link>
                    <button className="btn text-uppercase">Sign Up Now</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================ End Registration Area ================= */}

      {/* ================ Start Blog Post Area ================= */}
      <section className="blog-post-area section-gap">
        <div className="container-fluid">
          <div className="feature-inner row">
            <div className="col-lg-12">
              <div className="section-title text-left">
                <h2>
                  Our Latest <br />
                  Insights and Articles
                </h2>
                <p>
                  Stay updated with the newest trends and valuable information from our blog.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <img src="img/blog-post/b1.jpg" className="img-fluid" alt="Blog Post 1" />
                <div className="overlay"></div>
                <div className="top-text">
                  <p>29th, Oct, 2018</p>
                  <p>121 likes</p>
                  <p>05 comments</p>
                </div>
                <div className="text">
                  <h4 className="text-white">Smart Learning Strategies</h4>
                  <div>
                    <p>
                      Learn effective ways to study smarter, not just harder.
                    </p>
                  </div>
                  <a href="#" className="primary-btn">
                    Read More
                    <i className="fa fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt--160">
              <div className="single-blog-post">
                <img src="img/blog-post/b2.jpg" className="img-fluid" alt="Blog Post 2" />
                <div className="overlay"></div>
                <div className="top-text">
                  <p>29th, Oct, 2018</p>
                  <p>121 likes</p>
                  <p>05 comments</p>
                </div>
                <div className="text">
                  <h4 className="text-white">Future of Online Education</h4>
                  <div>
                    <p>
                      Explore trends shaping how we learn and teach online.
                    </p>
                  </div>
                  <a href="#" className="primary-btn">
                    Read More
                    <i className="fa fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt--260">
              <div className="single-blog-post">
                <img src="img/blog-post/b3.jpg" className="img-fluid" alt="Blog Post 3" />
                <div className="overlay"></div>
                <div className="top-text">
                  <p>29th, Oct, 2018</p>
                  <p>121 likes</p>
                  <p>05 comments</p>
                </div>
                <div className="text">
                  <h4 className="text-white">Boosting Productivity for Students</h4>
                  <div>
                    <p>
                      Tips and tricks to manage your time and stay focused.
                    </p>
                  </div>
                  <a href="#" className="primary-btn">
                    Read More
                    <i className="fa fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================ End Blog Post Area ================= */}
    </div>
  );
}