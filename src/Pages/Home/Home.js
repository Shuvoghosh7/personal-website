import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Education from '../Education/Education';
import Introduction from '../Introduction/Introduction';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Introduction/>
            <AboutMe/>
            <Education/>
            <Skills/>
        </div>
    );
};

export default Home;