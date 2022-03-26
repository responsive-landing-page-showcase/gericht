import React from 'react';
import './App.css';
import { FooterOverlay, Navbar } from './components';
import {
    AboutUs,
    Chef,
    FindUs,
    Footer,
    Gallery,
    Header,
    Intro,
    Laurels,
    // eslint-disable-next-line prettier/prettier
    SpecialMenu
} from './container/index';
import Global from './Global';

const App = () => (
    <>
        <Global />
        <Navbar />
        <Header />
        <AboutUs />
        <SpecialMenu />
        <Chef />
        <Intro />
        <FindUs />
        <Footer />
        <Gallery />

        <Laurels />
        <FooterOverlay />
    </>
);

export default App;
