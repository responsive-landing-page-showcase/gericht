import styledComponents from 'styled-components';
import { colors } from '../../constants';
import { SectionPadding } from '../../GlobalStyle';

const HeaderSection = styledComponents(SectionPadding)`
    background-color: ${colors.Black};
`;

const Image = styledComponents.img`
    width: 80%;
    @media screen and (max-width: 1150px) {
        width: 100%;
    }
    
    `;

export { HeaderSection, Image };
// export default
