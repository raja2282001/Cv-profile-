import React from 'react'
import { Helmet } from 'react-helmet'

export const Header = () => {
  return (
    <div>
        <Helmet>
            <link rel="stylesheet" href="assets/vendors/themify-icons/css/themify-icons.css"/>
            <link rel="stylesheet" href="assets/css/johndoe.css"/>
        </Helmet>
        <a href="components.html" class="btn btn-primary btn-component affix-top" data-spy="affix" data-offset-top="600"><i class="ti-shift-left-alt"></i> Components</a>
        <header class="header">
        <div class="container">
            <ul class="social-icons pt-3">
            <li class="social-item"><a class="social-link text-light" href="https://www.facebook.com/patel.raja.79827803?mibextid=ZbWKwL" target="_thapa"><i class="ti-facebook" aria-hidden="true"></i></a></li>
                            {/* <li class="social-item"><a class="social-link text-light" href="#"><i class="ti-twitter" aria-hidden="true"></i></a></li> */}
                            <li class="social-item"><a class="social-link text-light" href="https://www.linkedin.com/in/patel-parth-04670b247" target="_thapa"><i class="ti-linkedin" aria-hidden="true"></i></a></li>
                            <li class="social-item"><a class="social-link text-light" href="https://instagram.com/ll__patel_raja_ll?igshid=NGExMmI2YTkyZg==" target="_thapa"><i class="ti-instagram" aria-hidden="true"></i></a></li>
                            <li class="social-item"><a class="social-link text-light" href="https://github.com/raja2282001" target="_thapa"><i class="ti-github" aria-hidden="true"></i></a></li>
            </ul>  
            <div class="header-content">
                <h4 class="header-subtitle">Hello, I am</h4>
                <h1 class="header-title">Parth Patel</h1>
                <h6 class="header-mono">Frond end Backend |Web Developer</h6>
                <a href={require("../patel.pdf")} target="_thapa" class="btn btn-primary btn-rounded"><i class="ti-printer pr-2"></i>Print Resume</a>
            </div>
        </div>
    </header>
    </div>
  )
}
