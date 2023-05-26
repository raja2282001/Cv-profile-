import React from 'react'
import { Helmet } from 'react-helmet'
import "../../CSS/Container.css"

export const About = () => {
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
                <h5 class="mb-3">A Web Designer / Developer Located In Our Lovely Earth</h5>
                <p class="mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit.sit amet, Qui deserunt consequatur fugit repellendusillo voluptas?</p>
                <a href="https://drive.google.com/file/d/1HaWPldpy0fXA5GwZmhx3VdBCu1sS9_A6/view?usp=sharing" target="_thapa" class="btn btn-outline-danger"><i class="icon-down-circled2 "></i>Download My CV</a>
            </div>
            <div class="col-lg-4 about-card">
                <h3 class="font-weight-light">Personal Info</h3>
                <span class="line mb-5"></span>
                <ul class="mt40 info list-unstyled">
                    <li><span>Birthdate</span> : 09/13/1996</li>
                    <li><span>Email</span> : info@website.com</li>
                    <li><span>Phone</span> : + (123) 456-7890</li>
                    <li><span>Skype</span> : John_Doe </li>
                    <li><span>Address</span> :  12345 Fake ST NoWhere AB Country.</li>
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
                        <p class="subtitle"> exercitat Repellendus,  corrupt.</p>
                        <hr/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-1 text-danger pt-1"><i class="ti-paint-bucket icon-lg"></i></div>
                    <div class="col-10 ml-auto mr-3">
                        <h6>Web Development</h6>
                        <p class="subtitle">Lorem ipsum dolor sit consectetur.</p>
                        <hr/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-1 text-danger pt-1"><i class="ti-stats-up icon-lg"></i></div>
                    <div class="col-10 ml-auto mr-3">
                        <h6>Digital Marketing</h6>
                        <p class="subtitle">voluptate commodi illo voluptatib.</p>
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}
