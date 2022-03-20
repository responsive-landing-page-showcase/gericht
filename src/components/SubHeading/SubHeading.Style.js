import styledComponents from 'styled-components';

const Heading = styledComponents.div`
    margin-bottom: 1rem;
`;
const Image = styledComponents.img`
    width: 45px;
    @media screen and (min-width: 2000px) {
        width: 80px;
    }
    `;

export { Heading, Image };
