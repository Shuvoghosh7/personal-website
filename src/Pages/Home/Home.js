import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Education from '../Education/Education';

import Intro from '../Intro/Intro';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Intro/>
            <AboutMe/>
            <Education/>
            <Skills/>
           
            
        </div>
    );
};

export default Home;