import React, { useEffect, useState } from 'react';

const MongoDB = () => {
    const [skill, setSkill] = useState(0)
    useEffect(() => {
        let counter = skill;
        setInterval(() => {
            if (counter === 70) {
                clearInterval()
            } else {
                counter += 1
                setSkill(counter)
            }
        }, 30)
    }, [])
    return (
        <div>
            <div class="skill">
                <div class="outer">
                    <div class="inner">
                        <div id="number">
                            <p className='ml-7 text-2xl mt-[-10px] text-[#FF2E59]'>{skill}%</p>
                            <p className='skill-subject ml-2'>MongoDB</p>
                        </div>
                    </div>
                </div>

                <svg className='svg-image' xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                    <defs>
                        <linearGradient id="GradientColor">
                            <stop offset="0%" stop-color="#e91e63" />
                            <stop offset="100%" stop-color="#673ab7" />
                        </linearGradient>
                    </defs>
                    <circle className='MongoDB' cx="80" cy="80" r="70" stroke-linecap="round" />
                </svg>

            </div>
        </div>
    );
};

export default MongoDB;