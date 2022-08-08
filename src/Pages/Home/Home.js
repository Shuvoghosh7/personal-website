import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Education from '../Education/Education';
import Introduction from '../Introduction/Introduction';

const Home = () => {
    return (
        <div>
            <Introduction/>
            <AboutMe/>
            <Education/> 
        </div>
    );
};

export default Home;