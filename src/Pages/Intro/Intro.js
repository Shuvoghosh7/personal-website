import React from 'react';
import './Intro.css'
import img from '../../Assets/myProfile.png';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';

import Typewriter from 'typewriter-effect';
import resume from './Resume Of Shuvo Gosh.pdf'
const Intro = () => {
    return (
        <div className='mt-24 about lg:mx-28 mx-5'>
            <div className='lg:flex justify-around items-center'>
                <div className='ml-5'>
                    <h1 className='text-[#FF2E59] text-5xl font-sans-serif'>Hello! I'm</h1>
                    <p className='name-title'>Shuvo Gosh</p>
                    <p className='text-3xl mb-3 font-sans-serif'>
                        <Typewriter
                            options={{
                                strings: ['React Developer', 'Front-End Develover', 'Mern Stack Develover'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </p>
                    <a href={resume} download='resume'>
                        <p className='resume'>Download Resume</p>
                    </a>

                </div>
                <div className='flex justify-center items-center'>
                    <div>
                        <img className='lg:w-[400px]' src={img} alt="" />
                    </div>
                    <div>
                        <p className='intro-icons bg-[#2B4865] p-2'>
                            <a href="https://github.com/Shuvoghosh7" target="blank"><BsGithub className='intro-icons git' /></a>
                        </p>
                        <p className='intro-icons mt-5 bg-[#2B4865] p-2'>
                            <a href="https://www.linkedin.com/in/shuvogosh/" target="blank"> <FaLinkedinIn className='intro-icons li' /></a></p>
                        <p className='intro-icons mt-5 bg-[#2B4865] p-2'>
                            <a href="https://www.facebook.com/shuvo.gosh.5" target="blank"> <FaFacebookF className='intro-icons fb' /> </a>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Intro;