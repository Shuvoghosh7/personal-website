import React from 'react';
import project1 from '../../Assets/p1.png'
import project2 from '../../Assets/p2.png'
import project3 from '../../Assets/p3.png'
import './Projects.css'
const Projects = () => {
    return (
        <div className='my-12 lg:mx-28 mx-5 projects'>
            <h1 className='text-3xl mb-12 mt-2 ml-5 lg:flex justify-end font-cursive lg:mr-16 about-title'>My Projects.....</h1>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-12 gallary'>

                {/*  project 1 */}
                <div className='project-container'>
                    <div className='box'>
                        <div className='img-box'>
                            <img src={project1} alt="" />
                            <div className='project-name'>
                                <div className='project-names'>
                                    <p>project name project name project name project name</p>
                                </div>
                            </div>
                        </div>
                        <div className="details">
                            <div className='content'>
                                <p className='text-2xl mb-8'>project Name</p>
                                <h1 className='mb-5'><a href="https://www.youtube.com/watch?v=ltxxNidblts&t=590s" target="_blank">Live Side</a></h1>
                                <h1 className='mb-5'>github client side link</h1>
                                <h1>github client side link</h1>  
                            </div>
                        </div>
                    </div>
                </div>
                {/*  project 2 */}

                <div className='project-container'>
                    <div className='box'>
                        <div className='img-box'>
                            <img src={project2} alt="" />
                            <div className='project-name'>
                                <div className='project-names'>
                                    <p>project name project name project name project name</p>
                                </div>
                            </div>
                        </div>
                        <div className="details">
                            <div className='content'>
                                <h1 className='mb-5'>Live Side</h1>
                                <h1>github link</h1>
                            </div>

                        </div>
                    </div>
                </div>

                {/*  project 3 */}

                <div className='project-container'>
                    <div className='box'>
                        <div className='img-box'>
                            <img src={project3} alt="" />
                            <div className='project-name'>
                                <div className='project-names'>
                                    <p>project name project name project name project name</p>
                                </div>
                            </div>
                        </div>
                        <div className="details">
                            <div className='content'>
                                <h1 className='mb-5'>Live Side</h1>
                                <h1>github link</h1>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;