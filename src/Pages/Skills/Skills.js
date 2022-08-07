import React from 'react';
import './Skills.css'
import Bootstrap from './SkillSubject/Bootstrap';
import JavaScript from './SkillSubject/JavaScript';
import ReactJs from './SkillSubject/ReactJs';
import Tailwindcss from './SkillSubject/Tailwindcss';
import TypeScript from './SkillSubject/TypeScript';
const Skills = () => {
    return (
        <div className='my-12 lg:mx-28 mx-5 my-skills' id='my-skills'>
        <h1 className='text-2xl mb-3 mt-2 ml-5 lg:flex justify-end font-cursive  lg:mr-16 about-title'>My Skill.....</h1>
        <div className=' grid lg:grid-cols-5 md:grid-cols-3 gap-5 lg:ml-0 ml-6'>
           <JavaScript/>
           <ReactJs/>
           <TypeScript/>
           <Tailwindcss/>
           <Bootstrap/>
           <JavaScript/>
           <ReactJs/>
           <TypeScript/>
           <Tailwindcss/>
           <Bootstrap/>
        </div>
    </div>
    );
};

export default Skills;