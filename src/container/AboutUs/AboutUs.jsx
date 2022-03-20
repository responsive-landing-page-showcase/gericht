import React from 'react';
import { images } from '../../constants';
import { AboutSection, Overlay, OverlayImage } from './AboutUs.Styles';
import AboutUsContents from './AboutUsContent';

const AboutUs = () => (
    <AboutSection id="about">
        <Overlay>
            <OverlayImage src={images.G} alt="g_letter" />
        </Overlay>
        <AboutUsContents />
    </AboutSection>
);

export default AboutUs;
