import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import { images } from '../../constants';
import {
    CustomButton,
    POpensans,
    SectionPadding,
    Wrapper,
    WrapperImage,
    WrapperInfo,
} from '../../GlobalStyle';
import { HeaderSection, HeadingPrimary, Image } from './Header.style';

const Header = () => (
    <HeaderSection>
        <SectionPadding>
            <Wrapper id="/">
                <WrapperInfo>
                    <SubHeading title="Chase The New Flavour" />
                    <HeadingPrimary>The Key To Fine Dining</HeadingPrimary>
                    <POpensans style={{ margin: '2rem 0' }}>
                        Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat
                        Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus
                    </POpensans>
                    <CustomButton type="button">Explore Menu </CustomButton>
                </WrapperInfo>
                <WrapperImage>
                    <Image src={images.welcome} alt="header__image" />
                </WrapperImage>
            </Wrapper>
        </SectionPadding>
    </HeaderSection>
);

export default Header;
