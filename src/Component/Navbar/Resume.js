import React from 'react'
import "../../CSS/Container.css"

export const Resume = () => {
  return (
    <div>
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
    </div>
  )
}
