import React from 'react';
import './AboutMe.css'
import aboutme from '../../Assets/about.png'
const AboutMe = () => {
    return (
        <div className="my-12 lg:mx-28 mx-5 about-me" id='about-me'>
            <div className='grid lg:grid-cols-3'>
                <div className='about-image mt-12 lg:ml-12 md:ml-52 ml-20'>
                    <img className='lg:w-[300px] text-[#202428]' src={aboutme} alt="" />
                </div>
                <div className='col-span-2'>
                    <h1 className='text-2xl my-3 ml-5 lg:flex justify-end font-cursive  lg:mr-16 about-title'>About Me .....</h1>
                    <div className='mt-8 mx-5'>
                        <p className='text-3xl my-5 text-[#f67a36]' >JUNIOR REACT JS <span className='text-[#ae216b]'>DEVELOPER</span></p>
                        <p className='text-justify about-text'>I am Shuvo Gosh, a  reactjs Developer. I have completed my B.sc in Computer Science and Engineering at International University of Business Agriculture and Technology. I am interested in exploring technologies I found web development as my passion. I am aspiring to bring that passion to a full-time role. I have completed a six-month-long web development Bootcamp course from Programming Hero on the MERN stack. From the outcome, I can develop Single Page Applications with ReactJs, JavaScript, Bootstrap-5, Tailwindcss, HTML5,CSS3 and SASS. I have some skills in Node.js, Express.js, and MongoDB and developing REST API.  I take my work as a Web Developer seriously, which means I always ensure my skills are kept up to date with this rapidly changing new technology.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;