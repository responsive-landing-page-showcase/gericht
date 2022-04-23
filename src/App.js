import React from 'react';
import { Navbar } from './components';
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
        <Laurels />
        <Gallery />
        <FindUs />
        <Footer />
    </>
);

export default App;
