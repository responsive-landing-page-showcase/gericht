import React from 'react';
import styledComponents from 'styled-components';
import { images } from '../../constants';
import { PCormorant } from '../../GlobalStyle';

const Heading = styledComponents.div`
    margin-bottom: 1rem;
`;
const Image = styledComponents.img`
    width: 45px;
    @media screen and (min-width: 2000px) {
        width: 80px;
    }
    `;

const SubHeading = ({ title }) => (
    <Heading>
        <PCormorant>{title}</PCormorant>
        <Image src={images.spoon} />
    </Heading>
);

export default SubHeading;
