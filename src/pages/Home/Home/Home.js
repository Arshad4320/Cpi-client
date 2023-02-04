import React from 'react';
import Teacher from '../../Teacher/Teacher';
import Banner from '../Banner/Banner';

import MarqueeContent from '../Marquee/MarqueeContent';
import About from './../About/About';

const Home = () => {
    return (
        <div>
            <Banner/>
            <MarqueeContent/>
            <About/>
            <Teacher/>
        </div>
    );
};

export default Home;