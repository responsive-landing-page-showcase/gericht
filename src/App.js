import React from 'react';
import './App.css';
import { Navbar } from './components';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels } from './container/index';
import Global from './Global';

const App = () => (
    <>
        <Global />
        <Navbar />
        <Header />
        <AboutUs />
        <Chef />
        <FindUs />
        <Footer />
        <Gallery />
        <Intro />
        <Laurels />
    </>
);

export default App;
