import React from 'react';
import Banner from './Banner/Banner';
import Body from './Body/Body';
import Testimonials from './Body/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Home-Lingui</title>
            </Helmet>
            <Banner />
            <Body />
            <Testimonials/>
        </div>
    );
};

export default Home;