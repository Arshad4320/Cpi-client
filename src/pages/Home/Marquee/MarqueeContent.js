import React from 'react';
import Marquee from "react-fast-marquee";
const MarqueeContent = () => {
    return (
        <div>
            <Marquee className='bg-cyan-100 text-black py-2 text-2xl ' speed={160}>
                Welcome to chittagong polytechnic institute
            </Marquee>
        </div>
    );
};

export default MarqueeContent;