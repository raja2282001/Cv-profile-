import React from 'react'
import { Helmet } from 'react-helmet'
import "../../CSS/Container.css"
import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <div2 id='nav'>
        <Helmet>
            <link rel="stylesheet" href="assets/vendors/themify-icons/css/themify-icons.css"/>
            <link rel="stylesheet" href="assets/css/johndoe.css"/>
        </Helmet>
        <nav class="navbar  navbar-expand-lg navbar-light bg-white affix-top" data-spy="affix" data-offset-top="510">
        <div class="container">
            <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse mt-sm-20 navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <Link to="/container" class="nav-link" id='li'>Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/about" class="nav-link" id='li'>About</Link>
                    </li>
                </ul>
                <ul class="navbar-nav brand">
                    <img src={require("../../imgs/avatar.jpg")} alt="" class="brand-img"/>
                    <li class="brand-txt">
                        <h5 class="brand-title">Patel Parth</h5>
                        <div class="brand-subtitle">Frond end Backend |Web Developer</div>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <Link to="/resume" class="nav-link" id='li'>Resume</Link>
                    </li>
                    <li class="nav-item last-item">
                        <Link to="/contact" class="nav-link" id='li'>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    </div2>
  )
}
