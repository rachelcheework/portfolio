import React from "react";
// import '../css/about.css';
import Navigation from "./Navigation";

const About =()=>{
    return (
<div>
        <Navigation/>

    <div>
        <h1>About Me</h1>
    </div>    

    <div class="container-fluid">
        <div class="row" id="education">
            <h2 class="header">Education</h2>
            <ul class="content">
                <div class="col-lg-8">
                    <h3>National University of Singapore</h3>
                    <p>Bachelor of Engineering - Electrical Engineering</p>
                </div>
                <div class="col-lg-4">
                    <h3>Aug 2018 - June 2022</h3>
                </div>
            </ul>
        </div>
    </div>  
 
    <div class="container-fluid">
        <div class="row" id="work">
            <h2 class="header">Work Experience</h2>
            <ul class="content">
                <div class="col-lg-8">
                    <h3>Standard Chartered Bank (Singapore)</h3>
                    <p>Web Analyst</p>
                </div>

                <div class="col-lg-4">
                    <h3>Sept 2023 - Present</h3>
                </div>
            </ul>

            <ul class="content">
                <div class="col-lg-8">
                    <h3>Micron Technology</h3>
                    <p>Process Integration Engineer</p>
                </div>


                <div class="col-lg-4">
                    <h3>Aug 2022 - Feb 2023</h3>
                </div>
            </ul>
        </div>
    </div>   
</div>
    );
}

export default About;