import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css'
const Navbar = ({ children }) => {
    return (
        <div class="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">

                <div class="w-full navbar bg-[#202428] fixed top-0 z-50 lg:px-12 text-[#FF2E59] font-bold nav-bar">

                    <div class="flex-1 px-2 mx-2 mr-24 name"><Link to="/">Shuvo Gosh</Link></div>
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>

                    <div class="flex-auto hidden lg:block ">
                        <div className='flex justify-between items-center'>
                            <div>
                                <ul class="menu menu-horizontal gap-x-2">
                                    <li><a className='rounded-lg bg-transparent' href="#intro">Home</a></li>
                                    <li><a className='bg-transparent' href="#about-me">About</a></li>
                                    <li><a smooth={true} href="#education-part">Education</a></li>
                                    <li><a href="#my-skills">Skills</a></li>
                                    <li><a href="#my-service">Service</a></li>
                                    <li className='rounded-lg bg-transparent'><a href="#projects">Projects</a></li>
                                    {/* <li><Link to=" " className='rounded-lg bg-transparent'>Blog</Link></li> */}
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <a className='rounded-lg btn bg-transparent rounded-3xl text-[#FF2E59] font-bold' href="#contact">
                                            Contact Me
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-56 bg-[#202428] text-[#FF2E59] text-2xl">
                    <li><a className='rounded-lg bg-transparent' href="#intro">Home</a></li>
                    <li><a className='bg-transparent' href="#about-me">About</a></li>
                    <li><a href="#education-part">Education</a></li>
                    <li><a href="#my-skills">Skills</a></li>
                    <li><a href="#my-service">Service</a></li>
                    <li className='rounded-lg bg-transparent'><a href="#projects">Projects</a></li>
                    {/* <li><Link to="/blog" className='rounded-lg bg-transparent'>Blog</Link></li> */}
                    <li>
                        <a className='rounded-lg  bg-transparent  text-[#FF2E59] font-bold' href="#contact">
                            Contact Me
                        </a>
                    </li>

                </ul>

            </div>
        </div>
    );
};

export default Navbar;