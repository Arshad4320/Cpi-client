import React from 'react';
import Marquee from "react-fast-marquee";
import '../../Styles/styles.css'
const MarqueeContent = () => {
    return (
        <div>
            <Marquee className='bg-color text-white  text-2xl ' speed={160}>
                Welcome to chittagong polytechnic institute Department of Computer Technology
            </Marquee>
        </div>
    );
};

export default MarqueeContent;