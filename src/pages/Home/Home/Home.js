import React from 'react';
import Banner from '../Banner/Banner';

import MarqueeContent from '../Marquee/MarqueeContent';
import About from './../About/About';

const Home = () => {
    return (
        <div>
            <Banner/>
            <MarqueeContent/>
            <About/>
        </div>
    );
};

export default Home;