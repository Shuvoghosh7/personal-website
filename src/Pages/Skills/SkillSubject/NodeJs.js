import React, { useEffect, useState } from 'react';

const NodeJs = () => {
    const [skill, setSkill] = useState(0)
    useEffect(() => {
        let counter = skill;
        setInterval(() => {
            if (counter === 80) {
                clearInterval()
            } else {
                counter += 1
                setSkill(counter)
            }
        }, 22)
    }, [])
    return (
        <div>
            <div class="skill">
                <div class="outer">
                    <div class="inner">
                        <div id="number">
                            <p className='ml-4 text-2xl mt-[-10px] text-[#FF2E59]'>{skill}%</p>
                            <p className='skill-subject ml-2'>Node js</p>
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
                    <circle className='node-js' cx="80" cy="80" r="70" stroke-linecap="round" />
                </svg>

            </div>
        </div>
    );
};

export default NodeJs;