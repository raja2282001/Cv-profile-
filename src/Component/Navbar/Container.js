import React from 'react'
import { Helmet } from 'react-helmet'
import "../../CSS/Container.css"

export const Container = () => {
  return (
    <div>
        <Helmet>
            <link rel="stylesheet" href="assets/vendors/themify-icons/css/themify-icons.css"/>
            <link rel="stylesheet" href="assets/css/johndoe.css"/>
        </Helmet>
        <div class="container-fluid">
        <div id="about" class="row about-section">
            <div class="col-lg-4 about-card">
                <h3 class="font-weight-light">Who am I ?</h3>
                <span class="line mb-5"></span>
                <h5 class="mb-3">A Web Designer / Developer I N T E R N Located In Our Qubeta Technolab</h5>
                <p class="mt-20">During his internship he has demonstrated his skills
with self-motivation to learn new skills. His performance
exceeded our expectations and he was able to
complete the project on time.</p>
                <a href="https://drive.google.com/file/d/1HaWPldpy0fXA5GwZmhx3VdBCu1sS9_A6/view?usp=sharing" target="_thapa" class="btn btn-outline-danger"><i class="icon-down-circled2 "></i>Download My CV</a>
            </div>
            <div class="col-lg-4 about-card">
                <h3 class="font-weight-light">Personal Info</h3>
                <span class="line mb-5"></span>
                <ul class="mt40 info list-unstyled">
                    <li><span>Birthdate</span> : 22/08/2001</li>
                    <li><span>Email</span> : patelparth4656@gmail.com</li>
                    <li><span>Phone</span> : 9924069097</li>
                    <li><span>Name</span> : Patel Parth</li>
                </ul>
                <ul class="social-icons pt-3">
                <li class="social-item"><a class="social-link text-dark" href="https://www.facebook.com/patel.raja.79827803?mibextid=ZbWKwL" target="_thapa"><i class="ti-facebook" aria-hidden="true"></i></a></li>
                            {/* <li class="social-item"><a class="social-link text-dark" href="#"><i class="ti-twitter" aria-hidden="true"></i></a></li> */}
                            <li class="social-item"><a class="social-link text-dark" href="https://www.linkedin.com/in/patel-parth-04670b247" target="_thapa"><i class="ti-linkedin" aria-hidden="true"></i></a></li>
                            <li class="social-item"><a class="social-link text-dark" href="https://instagram.com/ll__patel_raja_ll?igshid=NGExMmI2YTkyZg==" target="_thapa"><i class="ti-instagram" aria-hidden="true"></i></a></li>
                            <li class="social-item"><a class="social-link text-dark" href="https://github.com/raja2282001" target="_thapa"><i class="ti-github" aria-hidden="true"></i></a></li>
                </ul>  
            </div>
            <div class="col-lg-4 about-card">
                <h3 class="font-weight-light">My Expertise</h3>
                <span class="line mb-5"></span>
                <div class="row">
                    <div class="col-1 text-danger pt-1"><i class="ti-widget icon-lg"></i></div>
                    <div class="col-10 ml-auto mr-3">
                        <h6>UX Design</h6>
                        <p class="subtitle">UX Design is the process of creating user-centered experiences by designing intuitive</p>
                        <hr/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-1 text-danger pt-1"><i class="ti-paint-bucket icon-lg"></i></div>
                    <div class="col-10 ml-auto mr-3">
                        <h6>Web Development</h6>
                        <p class="subtitle">Create Stunning websites for your online business</p>
                        <hr/>
                    </div>
                </div>
                {/* <div class="row">
                    <div class="col-1 text-danger pt-1"><i class="ti-stats-up icon-lg"></i></div>
                    <div class="col-10 ml-auto mr-3">
                        <h6>Digital Marketing</h6>
                        <p class="subtitle">voluptate commodi illo voluptatib.</p>
                        <hr/>
                    </div>
                </div> */}
            </div>
        </div>
       </div>
       <section class="section" id="resume">
        <div class="container">
            <h2 class="mb-5"><span class="text-danger">My</span> Resume</h2>
            <div class="row">
                <div class="col-md-6 col-lg-4">
                    <div class="card">
                       <div class="card-header">
                            <div class="mt-2">
                                <h4>E D U C A T I O N</h4>
                                <span class="line"></span>  
                            </div>
                        </div>
                        <div class="card-body">
                            <h6 class="title text-danger">2019 - 2023</h6>
                            <p>B.E IT|INFORMATION TECHNOLOGY SILVER OAK COLLEGE OF ENGINEERING,AHMEDABAD,INDIA</p>
                            <p class="subtitle">You can visit the official website of the university, read reviews, check accreditation status, and explore their academic programs and admission requirements to make an informed decision.</p>
                            <hr/>
                            <h6 class="title text-danger">2017 - 2019</h6>
                            <p>High School Degree</p>
                            <p>Mangaldeep Higher Secondary School,Nirnay Nagar, Achaleshwar Mahadev Road, Ranip, Ahmedabad - 382480</p>
                            {/* <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.</p> */}
                            {/* <hr/> */}
                            {/* <h6 class="title text-danger">2015 - 2016</h6> */}
                            {/* <p>UX Designer</p> */}
                            {/* <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card">
                       <div class="card-header">
                            <div class="mt-2">
                                <h4>E X P E R I E N C E ( I N T E R N )</h4>
                                <span class="line"></span>  
                            </div>
                        </div>
                        <div class="card-body">
                            <h6 class="title text-danger">2023 - Present</h6>
                            <p>FRONT-END-BACKEND WEB DEVELOPER</p>
                            <a >ROYAL INFO</a>
                            <p class="subtitle">The MERN (MongoDB, Express.js, React, Node.js) stack has
revolutionized web development by providing a
comprehensive set of technologies for building robust and
scalable applications</p>
                            <hr/>
                            <h6 class="title text-danger">07/2022 - 08/2022</h6>
                            <p>FRONT-END WEB DEVELOPER</p>
                            <a >Qubeta Technolab </a>
                            <p class="subtitle">During his internship he has demonstrated his skills with self-motivation to learn new skills. His performance  exceeded our expectations and he was able to complete the project on time. </p>
                            {/* <hr/> */}
                            {/* <h6 class="title text-danger">2015 - 2016</h6> */}
                            {/* <p>High School Degree</p> */}
                            {/* <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.</p> */}
                            
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card">
                       <div class="card-header">
                            <div class="pull-left">
                                <h4 class="mt-2">Skills</h4>
                                <span class="line"></span>  
                            </div>
                        </div>
                        <div class="card-body pb-2">
                           <h6>hTL5 &amp; CSS3</h6>
                            <div class="progress mb-3">
                                <div class="progress-bar bg-danger" role="progressbar" id='style1' aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h6>JavaScript</h6>
                            <div class="progress mb-3">
                                <div class="progress-bar bg-danger" role="progressbar" id='style2' aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h6>Node js</h6>
                            <div class="progress mb-3">
                                <div class="progress-bar bg-danger" role="progressbar" id='style3' aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h6>React js</h6>
                            <div class="progress mb-3">
                                <div class="progress-bar bg-danger" role="progressbar" id='style4' aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h6>Mongo DB</h6>
                            <div class="progress mb-3">
                                <div class="progress-bar bg-danger" role="progressbar" id='style4' aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h6>Express js</h6>
                            <div class="progress mb-3">
                                <div class="progress-bar bg-danger" role="progressbar" id='style4' aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    {/* <div class="card">
                       <div class="card-header">
                            <div class="pull-left">
                                <h4 class="mt-2">Languages</h4>
                                <span class="line"></span>  
                            </div>
                        </div>
                        <div class="card-body pb-2">
                           <h6>English</h6>
                            <div class="progress mb-3">
                                <div class="progress-bar bg-danger" role="progressbar" id='style3' aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h6>French</h6>
                            <div class="progress mb-3">
                                <div class="progress-bar bg-danger" role="progressbar" id='style5' aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h6>Spanish</h6>
                            <div class="progress mb-3">
                                <div class="progress-bar bg-danger" role="progressbar" id='style6' aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
      </section>
      <div class="section contact" id="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="contact-form-card">
                        <img src="assets/imgs/blog3.jpg" alt="" id='img'/>
                        {/* <form action="">
                            <div class="form-group">
                                <input class="form-control" type="text" placeholder="Name *" required="">
                            </div>
                            <div class="form-group">
                                <input class="form-control" type="email" placeholder="Email *" required="">
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" id=" placeholder=" message="" *"="" rows="7" required=""></textarea>
                            </div>
                            <div class="form-group ">
                                <button type="submit" class="form-control btn btn-primary">Send Message</button>
                            </div>
                        </form> */}
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="contact-info-card">
                        <h4 class="contact-title">Get in touch</h4>
                        <div class="row mb-2">
                            <div class="col-1 pt-1 mr-1">
                                <i class="ti-mobile icon-md"></i>
                            </div>
                            <div class="col-10 ">
                                <h6 class="d-inline">Phone : <br/> <span class="text-muted">9924069097</span></h6>
                            </div>
                        </div>
                        {/* <div class="row mb-2">
                            <div class="col-1 pt-1 mr-1">
                                <i class="ti-map-alt icon-md"></i>
                            </div>
                            <div class="col-10">
                                <h6 class="d-inline">Address :<br/> <span class="text-muted">12345 Fake ST NoWhere AB Country.</span></h6>
                            </div>
                        </div> */}
                        <div class="row mb-2">
                            <div class="col-1 pt-1 mr-1">
                                <i class="ti-envelope icon-md"></i>
                            </div>
                            <div class="col-10">
                                <h6 class="d-inline">Email :<br/> <span class="text-muted">Patelparth4656@gmail.com</span></h6>
                            </div>
                        </div>
                        <ul class="social-icons pt-4">
                            <li class="social-item"><a class="social-link text-dark" href="https://www.facebook.com/patel.raja.79827803?mibextid=ZbWKwL" target="_thapa"><i class="ti-facebook" aria-hidden="true"></i></a></li>
                            {/* <li class="social-item"><a class="social-link text-dark" href="#"><i class="ti-twitter" aria-hidden="true"></i></a></li> */}
                            <li class="social-item"><a class="social-link text-dark" href="https://www.linkedin.com/in/patel-parth-04670b247" target="_thapa"><i class="ti-linkedin" aria-hidden="true"></i></a></li>
                            <li class="social-item"><a class="social-link text-dark" href="https://instagram.com/ll__patel_raja_ll?igshid=NGExMmI2YTkyZg==" target="_thapa"><i class="ti-instagram" aria-hidden="true"></i></a></li>
                            <li class="social-item"><a class="social-link text-dark" href="https://github.com/raja2282001" target="_thapa"><i class="ti-github" aria-hidden="true"></i></a></li>
                        </ul> 
                    </div>
                </div>
            </div>

        </div>
    </div>
    </div>
  )
}
