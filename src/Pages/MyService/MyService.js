import React from 'react';
import './Service.css'
import webDesign from '../../Assets/service/web design.png'
import webDevelopment from '../../Assets/service/web development.png'
import react from '../../Assets/service/react.png'
const MyService = () => {
    return (
        <div className='my-12 lg:mx-28 mx-5 service'>
            <h1 className='text-3xl mb-12 mt-2 ml-5 lg:flex justify-end font-cursive lg:mr-16 about-title'>My Service.....</h1>
            <div className='grid lg:grid-cols-3 gap-16 mt-8'>

               {/*  service-1 */}
                <div className='service-broder mb-5'>
                    <div className='service-card'>
                        <div className='service-image'>
                            <img src={webDesign} alt="" />
                        </div>
                        <div className='service-text'>
                            <h1>Web Design</h1>
                            <p>Web Design, Landing Page Design, App development, Mobile an Website Design an expert web designer and developer. Contrary to popular belief ...</p>
                        </div>
                    </div>
                </div>

                 {/*  service-2 */}
                <div className='service-broder'>
                    <div className='service-card'>
                        <div className='service-image'>
                            <img src={react} alt="" />
                        </div>
                        <div className='service-text'>
                            <h1>React App</h1>
                            <p>Web Design, Landing Page Design, App development, Mobile an Website Design an expert web designer and developer. Contrary to popular belief ...</p>
                        </div>
                    </div>
                </div>

                 {/*  service-3 */}
                <div className='service-broder'>
                    <div className='service-card'>
                        <div className='service-image'>
                            <img src={webDevelopment} alt="" />
                        </div>
                        <div className='service-text'>
                            <h1>Web Development</h1>
                            <p>Web Design, Landing Page Design, App development, Mobile an Website Design an expert web designer and developer. Contrary to popular belief ...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyService;