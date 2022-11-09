import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import SpecialDish from '../SpecialDish/SpecialDish';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SpecialDish></SpecialDish>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;