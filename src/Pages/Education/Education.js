import React from 'react';
import './Education.css'
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
    return (
        <div className="my-12 lg:mx-28 mx-5 educations" id='education-part'>
            <div class="education mx-20 my-12" id="education">

                <h1 className='text-2xl mb-12 mt-2 ml-5 lg:flex justify-end font-cursive  lg:mr-16 about-title'>My Education.....</h1>

                <div class="box-container grid lg:grid-cols-3 gap-10 ">
                    <div class="box" style={{ borderLeft: ".2rem solid white" }} >

                        <p className='icons'>
                            <FaGraduationCap className='text-4xl ml-5 mt-5 text-black' />
                        </p>
                        <h5 className='year'>2021</h5>
                        <h3>Computer Science & Engineering</h3>
                        <p> IUBAT - International University of Business Agriculture and Technology</p>
                        <p><span>Result:</span> 3.24 out of 4.00</p>

                    </div>

                    <div class="box" style={{ borderLeft: ".2rem solid white" }}>
                        <p className='icons'><FaGraduationCap className='text-4xl ml-5 mt-5 text-black' /></p>
                        <h5 className='year'>2014</h5>
                        <h3>Higher Secondary Certificate</h3>
                        <p> Hajigonj Model Government College.</p>
                        <p><span>Board:</span> Comilla</p>
                        <p><span>Result:</span> 5.00 out of 5.00</p>
                    </div>

                    <div class="box" style={{ borderLeft: ".2rem solid white" }}>
                        <p className='icons'><FaGraduationCap className='text-4xl ml-5 mt-5 text-black' /></p>
                        <h5 className='year'>2012</h5>
                        <h3>Secondary School Certificate</h3>
                        <p> Ujani Hazi Amiruddin Alekjan High School.</p>
                        <p><span>Board:</span> Comilla</p>
                        <p><span>Result:</span> 4.38 out of 5.00</p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Education;