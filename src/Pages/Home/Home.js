import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Education from '../Education/Education';
import Introduction from '../Introduction/Introduction';
import MyService from '../MyService/MyService';

import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Introduction/>
            <AboutMe/>
            <Education/>
            <Skills/>
            <MyService/>
        </div>
    );
};

export default Home;