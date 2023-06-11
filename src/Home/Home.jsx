import React from 'react';
import Banner from './Banner/Banner';
import Body from './Body/Body';
import Testimonials from './Body/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner />
            <Body />
            <Testimonials/>
        </div>
    );
};

export default Home;