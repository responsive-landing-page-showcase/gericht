import styledComponents from 'styled-components';
import { colors, fonts } from '../../constants';

const HeaderSection = styledComponents.section`
    background-color: ${colors.Black};
`;
const HeadingPrimary = styledComponents.h1`
    margin-bottom: 1rem;   
    color: ${colors.Golden}; 
    font-size: 90px;
    line-height: 117px;
    font-weight: 700;
    font-family: ${fonts.base};
    letter-spacing: 0.04em;
    @media screen and (min-width: 2000px) {
        
            font-size: 180px;
            line-height: 210px;
        
    }
    
    @media screen and (max-width: 1150px) {
        
            font-size: 90px;
        
    }
    
    @media screen and (max-width: 650px) {
        
            font-size: 70px;
            line-height: 87px;
        
    }
    
    @media screen and (max-width: 450px) {
        
            font-size: 50px;
            line-height: 70px;
        
    }
    `;
const Image = styledComponents.img`
    width: 80%;
    @media screen and (max-width: 1150px) {
        width: 100%;
    }
    
    `;

export { HeaderSection, HeadingPrimary, Image };
