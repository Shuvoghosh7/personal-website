import React, { useState } from 'react';
import project1 from '../../Assets/project1/Capture.png'
import project21 from '../../Assets/project2/Capture.JPG'
import project2 from '../../Assets/p2.png'
import project3 from '../../Assets/p3.png'
import project4 from '../../Assets/p4.PNG'
import project5 from '../../Assets/p5.PNG'
import './Projects.css'




const Projects = () => {
    return (
        <div className='my-12 lg:mx-28 mx-5 projects' id='projects'>
            <h1 className='text-3xl mb-12 mt-10 ml-5 lg:flex justify-end font-cursive lg:mr-16 about-title'>My Projects.....</h1>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-12 gallary'>

                {/*  project 1 */}
                <div className='project-container'>
                    <div className='box'>
                        <div className='img-box'>
                            <img src={project1} alt="" />
                            <div className='project-name'>
                                <div className='project-names'>
                                    <p>Vertex Technology</p>
                                </div>
                            </div>
                        </div>
                        <div className="details">
                            <div className='content'>
                                <p className='text-xl lg:mb-8 md:mb-8 mb-3'>Computer Parts Manufacturer</p>
                                <h1 className='mb-5'><a href="https://computer-parts-manufactu-ed97b.web.app/" target="_blank">Live Site Link</a></h1>
                                <h1 className='mb-5'><a href="https://github.com/Shuvoghosh7/-manufacturer-website-client-side" target="_blank">Github Client Site link</a></h1>
                                <h1><a href="https://github.com/Shuvoghosh7/-manufacturer-website-server-side" target="_blank">Github Server Site link</a></h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  project 2 */}
                <div className='project-container'>
                    <div className='box'>
                        <div className='img-box'>
                            <img src={project21} alt="" />
                            <div className='project-name'>
                                <div className='project-names'>
                                    <p>BagsQ</p>
                                </div>
                            </div>
                        </div>
                        <div className="details">
                            <div className='content'>
                                <p className='text-xl lg:mb-8 md:mb-8 mb-3'>BagsQ</p>
                                <h1 className='mb-5'><a href="https://bagsq-4ed48.web.app/" target="_blank">Live Site Link</a></h1>
                                <h1 className='mb-5'><a href="https://github.com/Shuvoghosh7/bagsq-client" target="_blank">Github Client Site link</a></h1>
                                <h1><a href="https://github.com/Shuvoghosh7/bagsq-server" target="_blank">Github Server Site link</a></h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* project-3 */}
                <div className='project-container'>
                    <div className='box'>
                        <div className='img-box'>
                            <img src={project4} alt="" />
                            <div className='project-name'>
                                <div className='project-names'>
                                    <p>Dashboard Design For School</p>
                                </div>
                            </div>
                        </div>
                        <div className="details">
                            <div className='content'>
                                <p className='text-2xl lg:mb-8 md:mb-8 mb-5'>Dashboard Design For School</p>
                                <h1 className='mb-5'><a href="https://dashboard-28dde.firebaseapp.com/" target="_blank">Live Site Link</a></h1>
                                <h1 className='mb-5'><a href="https://github.com/Shuvoghosh7/Dashboard" target="_blank">Github  link</a></h1>
                                
                            </div>
                        </div>
                    </div>
                </div>
                {/*  project 4 */}

                <div className='project-container'>
                    <div className='box'>
                        <div className='img-box'>
                            <img src={project2} alt="" />
                            <div className='project-name'>
                                <div className='project-names'>
                                    <p>Warehouse-management</p>
                                </div>
                            </div>
                        </div>
                        <div className="details">
                            <div className='content'>
                                <p className='text-2xl lg:mb-8 md:mb-8 mb-3'>Warehouse-management</p>
                                <h1 className='mb-5'><a href="https://smartphone-warehouse-ebc90.web.app/" target="_blank">Live Site Link</a></h1>
                                <h1 className='mb-5'><a href="https://github.com/Shuvoghosh7/Warehouse-management" target="_blank">Github Client Site link</a></h1>
                                <h1><a href="https://github.com/Shuvoghosh7/warehouse-management-server-side-" target="_blank">Github Server Site link</a></h1>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/*  project 4 */}
                <div className='project-container'>
                    <div className='box'>
                        <div className='img-box'>
                            <img src={project5} alt="" />
                            <div className='project-name'>
                                <div className='project-names'>
                                    <p>Restaurant Homepage Design</p>
                                </div>
                            </div>
                        </div>
                        <div className="details">
                            <div className='content'>
                                <p className='text-2xl lg:mb-8 md:mb-8 mb-5'>Restaurant Homepage Design</p>
                                <h1 className='mb-5'><a href="https://jocular-kangaroo-432c9d.netlify.app/" target="_blank">Live Site Link</a></h1>
                                <h1 className='mb-5'><a href="https://github.com/Shuvoghosh7/sonorestaurant" target="_blank">Github  link</a></h1>
                                
                            </div>
                        </div>
                    </div>
                </div>
                {/*  project 5 */}

                <div className='project-container'>
                    <div className='box'>
                        <div className='img-box'>
                            <img src={project3} alt="" />
                            <div className='project-name'>
                                <div className='project-names'>
                                    <p>Green-bangla-tours</p>
                                </div>
                            </div>
                        </div>
                        <div className="details">
                            <div className='content'>
                                <p className='text-2xl lg:mb-8 md:mb-8 mb-5'>Green-bangla-tours</p>
                                <h1 className='mb-5'><a href="https://green-bangla-tours-37d8b.web.app" target="_blank">Live Site Link</a></h1>
                                <h1 className='mb-5'><a href="https://github.com/Shuvoghosh7/green-bangla-tours" target="_blank">Github  link</a></h1>
                                
                            </div>
                        </div>
                    </div>
                </div>

                


            </div>
        </div>
    );
};

export default Projects;