// Home.jsx

import AboutMe from '../AboutMe';
import ContactMe from '../ContactMe';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import MyPortfolio from '../MyPortfolio';
import MySkills from '../MySkills';
import React from 'react';
import Resume from '../Resume';

export default function Home() {
    return (
        <>

            <HeroSection />
            <MySkills />
            <AboutMe />
            <Resume />
            <MyPortfolio />
            <ContactMe />
            <Footer />
        </>
    );
}
