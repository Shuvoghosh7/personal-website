import React from 'react';
import './Skills.css'
import Bootstrap from './SkillSubject/Bootstrap';
import Css from './SkillSubject/Css';
import ExpressJs from './SkillSubject/ExpressJs';
import Html from './SkillSubject/Html';
import JavaScript from './SkillSubject/JavaScript';
import MongoDB from './SkillSubject/MongoDB';
import NodeJs from './SkillSubject/NodeJs';
import ReactJs from './SkillSubject/ReactJs';
import Sass from './SkillSubject/Sass';
import Tailwindcss from './SkillSubject/Tailwindcss';
const Skills = () => {
    return (
        <div className='my-12 lg:mx-28 mx-5 my-skills' id='my-skills'>
        <h1 className='text-2xl mb-5 mt-2 ml-5 lg:flex justify-end font-cursive lg:mr-16 about-title'>My Skill.....</h1>
        <div className=' grid lg:grid-cols-5 md:grid-cols-3 gap-5 lg:ml-0 ml-6'>
         <JavaScript/>
         <ReactJs/>
         <Tailwindcss/>
         <Bootstrap/>
         <Html/>
         <Css/>
         <Sass/>
         <NodeJs/>
         <ExpressJs/>
         <MongoDB/>
        </div>
        </div>
    );
};

export default Skills;