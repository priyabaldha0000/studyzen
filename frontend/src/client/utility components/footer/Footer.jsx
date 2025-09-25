import React from "react";

export default function Footer() {
  return (
    <footer className="footer-area section-gap">
      <div className="container">
        <div className="row">
          {/* Subjects */}
          <div className="col-lg-2 col-md-6 single-footer-widget">
            <h4>Subjects</h4>
            <ul>
              <li><a href="#">Programming</a></li>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Data Science</a></li>
              <li><a href="#">Cyber Security</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 single-footer-widget">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Assignments</a></li>
              <li><a href="#">Study Materials</a></li>
              <li><a href="#">Online Tests</a></li>
              <li><a href="#">Projects</a></li>
            </ul>
          </div>

          {/* Features */}
          <div className="col-lg-2 col-md-6 single-footer-widget">
            <h4>Features</h4>
            <ul>
              <li><a href="#">Interactive Quizzes</a></li>
              <li><a href="#">Video Tutorials</a></li>
              <li><a href="#">Coding Practice</a></li>
              <li><a href="#">Doubt Solving</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-lg-2 col-md-6 single-footer-widget">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">E-Books</a></li>
              <li><a href="#">Lecture Notes</a></li>
              <li><a href="#">Previous Papers</a></li>
              <li><a href="#">Reference Links</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-4 col-md-6 single-footer-widget">
            <h4>Newsletter</h4>
            <p>Get updates on new study materials and exam tips.</p>
            <div className="form-wrap" id="mc_embed_signup">
              <form
                target="_blank"
                action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                method="get"
                className="form-inline"
              >
                <input
                  className="form-control"
                  name="EMAIL"
                  placeholder="Your Email Address"
                  type="email"
                  required
                />
                <button className="click-btn btn btn-default text-uppercase">
                  subscribe
                </button>
                <div style={{ position: "absolute", left: "-5000px" }}>
                  <input
                    name="b_36c4fd991d266f23781ded980_aefe40901a"
                    tabIndex="-1"
                    value=""
                    type="text"
                    readOnly
                  />
                </div>
                <div className="info"></div>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom row align-items-center">
          <p className="footer-text m-0 col-lg-8 col-md-12">
            Copyright &copy; {new Date().getFullYear()} All rights reserved |
            StudyZen
          </p>
          <div className="col-lg-4 col-md-12 footer-social">
            <a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-github"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
