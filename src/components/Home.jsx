import { Menu } from '@mui/material';
import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Row, Col } from 'react-grid-system';
import Footer from './Footer';
// import './style.css';
import './course.css';
import './teacher.css'
import './blog.css'
// import './card.css';

import about from './Images/about.jpg'
import webdesign from './Images/webdesign.png'
import development from './Images/development.webp'
import game from './Images/game.jpg'
import webp from './Images/app.webp'
import marketing from './Images/marketing.jpg'
import research from './Images/reaserch.jpg'
import writing from './Images/writing.jpeg'
import Seo from './Images/Seo.jpg'
import cour1 from './Images/course-1.jpg'
import cour2 from './Images/course-2.jpg'
import cour3 from './Images/course-3.jpg'
import cour4 from './Images/course-4.jpg'
import cour5 from './Images/course-5.jpg'
import cour6 from './Images/course-6.jpg'

import prof1 from './Images/prof1.jpg'
import prof2 from './Images/prof2.jpg'
import prof3 from './Images/prof3.jpg'
import prof4 from './Images/prof4.jpg'
import blog1 from './Images/blog1.jpg'
import blog2 from './Images/blog-2.jpg'
import blog3 from './Images/blog-3.jpg'

function HomeContent() {
  return (
    <div>
      <div id="banner">
        <div className="container">
          <header></header>

          <h1 className="font-weight-bold">
            EduWeb<br />  Inscrivez-vous maintenant !
          </h1>
          <p className="font-weight-light">
            Accédez à une formation de n'importe où : Avec le e-learning,
            vous pouvez accéder à une formation depuis n'importe où, que ce soit de chez vous,
            de votre bureau ou même en déplacement. <br />
          </p>

        </div>
      </div>



      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <img className="img-fluid rounded mb-4 mb-lg-0" src={about} alt="about" />
            </div>
            <div className="col-lg-7">
              <div className="text-left mb-4">
                <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: "5px" }}>About Us</h5>
                <h1>Innovative Way To Learn</h1>
              </div>
              <p>Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita, ipsum dolores amet voluptua duo dolores et sit ipsum rebum, sadipscing et erat eirmod diam kasd labore clita est. Diam sanctus gubergren sit rebum clita amet, sea est sea vero sed et. Sadipscing labore tempor at sit dolor clita consetetur diam. Diam ut diam tempor no et, lorem dolore invidunt no nonumy stet ea labore, dolor justo et sit gubergren diam sed sed no ipsum. Sit tempor ut nonumy elitr dolores justo aliquyam ipsum stet</p>
              <a href="" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
          <div className="text-center mb-5">
            <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: "5px" }}>Subjects</h5>
            <h1>Explore Top Subjects</h1>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="cat-item position-relative overflow-hidden rounded mb-2">
                <img className="img-fluid" src={webdesign} alt="webdesign" />
                <a className="cat-overlay text-white text-decoration-none" href="">
                  <h4 className="text-white font-weight-medium">Web Design</h4>
                  <span>100 Courses</span>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="cat-item position-relative overflow-hidden rounded mb-2">
                <img className="img-fluid" src={development} alt="development" />
                <a className="cat-overlay text-white text-decoration-none" href="">
                  <h4 className="text-white font-weight-medium">Development</h4>
                  <span>100 Courses</span>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="cat-item position-relative overflow-hidden rounded mb-2">
                <img className="img-fluid" src={game} alt="game" />
                <a className="cat-overlay text-white text-decoration-none" href="">
                  <h4 className="text-white font-weight-medium">Game Design</h4>
                  <span>100 Courses</span>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="cat-item position-relative overflow-hidden rounded mb-2">
                <img className="img-fluid" src={webp} alt="apps design" />
                <a className="cat-overlay text-white text-decoration-none" href="">
                  <h4 className="text-white font-weight-medium">Apps Design</h4>
                  <span>100 Courses</span>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="cat-item position-relative overflow-hidden rounded mb-2">
                <img className="img-fluid" src={marketing} alt="marketing" />
                <a className="cat-overlay text-white text-decoration-none" href="">
                  <h4 className="text-white font-weight-medium">Marketing</h4>
                  <span>100 Courses</span>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="cat-item position-relative overflow-hidden rounded mb-2">
                <img className="img-fluid" src={research} alt="" />
                <a className="cat-overlay text-white text-decoration-none" href="">
                  <h4 className="text-white font-weight-medium">Research</h4>
                  <span>100 Courses</span>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="cat-item position-relative overflow-hidden rounded mb-2">
                <img className="img-fluid" src={writing} alt="" />
                <a className="cat-overlay text-white text-decoration-none" href="">
                  <h4 className="text-white font-weight-medium">Content Writing</h4>
                  <span>100 Courses</span>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="cat-item position-relative overflow-hidden rounded mb-2">
                <img className="img-fluid" src={Seo} alt="" />
                <a className="cat-overlay text-white text-decoration-none" href="">
                  <h4 className="text-white font-weight-medium">Seo</h4>
                  <span>100 Courses</span>
                </a>
              </div>
            </div>

          </div>

        </div>
        {/* //courcard */}

        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="text-center mb-5">
              <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: '5px' }}>Courses</h5>
              <h1>Our Popular Courses</h1>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="rounded overflow-hidden mb-2">
                  <img className="img-fluid1" src={cour1} alt="" />
                  <div className="bg-secondar p-4">
                    <div className="d-flex justify-content-between mb-3">
                      <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                      <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                    </div>
                    <a className="h5" href="">Web design & development courses for beginner</a>
                    <div className="border-top mt-4 pt-4">
                      <div className="d-flex justify-content-between">
                        <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                        <h5 className="m-0">$99</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="rounded overflow-hidden mb-2">
                  <img className="img-fluid1" src={cour2} alt="" />
                  <div className="bg-secondar p-4">
                    <div className="d-flex justify-content-between mb-3">
                      <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                      <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                    </div>
                    <a className="h5" href="">Web design & development courses for beginner</a>
                    <div className="border-top mt-4 pt-4">
                      <div className="d-flex justify-content-between">
                        <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                        <h5 className="m-0">$99</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="rounded overflow-hidden mb-2">
                  <img className="img-fluid1" src={cour3} alt="" />
                  <div className="bg-secondar p-4">
                    <div className="d-flex justify-content-between mb-3">
                      <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                      <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                    </div>
                    <a className="h5" href="">Web design & development courses for beginner</a>
                    <div className="border-top mt-4 pt-4">
                      <div className="d-flex justify-content-between">
                        <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                        <h5 className="m-0">$99</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="rounded overflow-hidden mb-2">
                  <img className="img-fluid1" src={cour4} alt="" />
                  <div className="bg-secondar p-4">
                    <div className="d-flex justify-content-between mb-3">
                      <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                      <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                    </div>
                    <a className="h5" href="">Web design & development courses for beginner</a>
                    <div className="border-top mt-4 pt-4">
                      <div className="d-flex justify-content-between">
                        <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                        <h5 className="m-0">$99</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="rounded overflow-hidden mb-2">
                  <img className="img-fluid1" src={cour5} alt="" />
                  <div className="bg-secondar p-4">
                    <div className="d-flex justify-content-between mb-3">
                      <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                      <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                    </div>
                    <a className="h5" href="">Web design & development courses for beginner</a>
                    <div className="border-top mt-4 pt-4">
                      <div className="d-flex justify-content-between">
                        <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                        <h5 className="m-0">$99</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="rounded overflow-hidden mb-2">
                  <img className="img-fluid1" src={cour6} alt="" />
                  <div className="bg-secondar p-4">
                    <div className="d-flex justify-content-between mb-3">
                      <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                      <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                    </div>
                    <a className="h5" href="">Web design & development courses for beginner</a>
                    <div className="border-top mt-4 pt-4">
                      <div className="d-flex justify-content-between">
                        <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                        <h5 className="m-0">$99</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
          </div>
          <div>
            <div className="container-fluid py-5">
              <div className="container pt-5 pb-3">
                <div className="text-center mb-5">
                  <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: "5px" }}>Teachers</h5>
                  <h1>Meet Our Teachers</h1>
                </div>
              </div>
            </div>
            <div class="row">
              <div className="col-md-6 col-lg-4 text-center team mb-4">
                <div className="team-item rounded overflow-hidden mb-2">
                  <div className="team-img position-relative">
                    <img className="img-fluid2" src={prof3} alt="" />
                    <div className="team-social">
                      <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                      <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                      <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                  </div>
                  <div className="bg-secondary p-4">
                    <h5>Jhon Doe</h5>
                    <p className="m-0">Web Designer</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 text-center team mb-4">
                <div className="team-item rounded overflow-hidden mb-2">
                  <div className="team-img position-relative">
                    <img className="img-fluid2" src={prof3} alt="" />
                    <div className="team-social">
                      <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                      <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                      <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                  </div>
                  <div className="bg-secondary p-4">
                    <h5>Jhon Doe</h5>
                    <p className="m-0">Web Designer</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 text-center team mb-4">
                <div className="team-item rounded overflow-hidden mb-2">
                  <div className="team-img position-relative">
                    <img className="img-fluid2" src={prof4} alt="" />
                    <div className="team-social">
                      <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                      <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                      <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                  </div>
                  <div className="bg-secondary p-4">
                    <h5>Jhon Doe</h5>
                    <p className="m-0">Web Designer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid py-5">
              <div className="container py-5">
                <div className="text-center mb-5">
                  <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: '5px' }}>Testimonial</h5>
                  <h1>What Say Our Students</h1>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="owl-carousel testimonial-carousel">
                      <div className="text-center">
                        <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                        <h4 className="font-weight-normal mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
                        <img className="img-fluid mx-auto mb-3" src="img/testimonial-1.jpg" alt="" />
                        <h5 className="m-0">Client Name</h5>
                        <span>Profession</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <main>

            </main>
          </div>
        </div>




      </div>

      <Footer />

    </div>
  )
}


export default HomeContent;
