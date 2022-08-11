import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Education from '../Education/Education';
import Introduction from '../Introduction/Introduction';
import MyService from '../MyService/MyService';
import Projects from '../Projects/Projects';

import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Introduction/>
            <AboutMe/>
            <Education/>
            <Skills/>
            <MyService/>
            <Projects/>
        </div>
    );
};

export default Home;