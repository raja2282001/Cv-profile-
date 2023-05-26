import React from 'react'

export const Contact = () => {
  return (
    <div>
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
