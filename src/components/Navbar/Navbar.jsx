import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import styled from 'styled-components';
import { colors, fonts, images } from '../../constants';

const NavBar = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.Black};
    padding: 1rem 2rem;
    @media (max-width: 650px) {
        padding: 1rem;
    }
`;
const NavBarLogo = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
const Image = styled.img`
    width: 150px;
    @media screen and (min-width: 2000px) {
        width: 210px;
    }
    @media screen and (max-width: 850px) {
        width: 140px;
    }
    @media screen and (max-width: 650px) {
        width: 100px;
    }
`;
const NavBarLinks = styled.ul`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    @media (max-width: 1150px) {
        display: none;
    }
`;

const NavItem = styled.li`
    margin: 0 1rem;
    cursor: pointer;
`;
const NavLink = styled.a`
    font-family: ${fonts.alt};
    color: ${(props) => (props.primary ? '#ffffff' : '#dcca87')};
    font-size: ${(props) => (props.primary ? '1rem' : '2rem')};

    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    line-height: 28px;
    font-size: 16px;

    &:hover {
        color: ${colors.Grey};
    }
`;
const Login = styled.div`
    display: flex;
    @media screen and (max-width: 650px) {
        display: none;
    }
    color: ${colors.White};
    justify-content: flex-end;
    align-items: center;
    a {
        margin: 0 1rem;
        text-decoration: none;
        transition: all 0.3s ease-in-out;
        &:hover {
            border-bottom: 1px solid ${colors.Golden};
            color: ${colors.White};
        }
    }
`;
const Div = styled.div`
    width: 1px;
    height: 30px;
    background-color: ${colors.Grey};
`;

// Mobile Nav Bar
const SmallScreen = styled.div`
    display: none;
    @media screen and (max-width: 1150px) {
        display: flex;
`;
const SmallNavBar = styled.ul`
    list-style: none;
    @media screen and (max-width: 1150px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;

        width: 100%;
        height: 100vh;
        color: ${colors.Golden};
    }
    @media screen and (max-width: 650px) {
        height: 100vh;
        width: 100%;
    }
`;

const SmallNavItem = styled.li`
    margin: 1rem 0;
    cursor: pointer;
    text-align: center;
    text-transform: uppercase;
    font-family: ${fonts.base};
`;

const SmallNavLink = styled.a`
    font-family: ${fonts.base};
    font-size: 4rem;
    &:hover {
        border-bottom: 1px solid ${colors.Golden};
        color: ${colors.White};
    }
    @media screen and (max-width: 850px) {
        font-size: 2.5rem;
        line-height: 1.6;
    }
    @media screen and (max-width: 650px) {
        font-size: 1.5rem;
        line-height: 1.6;
    }
`;
const SmallScreenOverlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background-color: ${colors.Black};

    transition: 0.3s ease;
    flex-direction: column;
    z-index: 5;
`;

// Mobile Nav Bar

const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Menu', link: '/menu' },
    { name: 'Awards', link: '/awards' },
    { name: 'Contact', link: '/contact' },
];
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <NavBar>
            <NavBarLogo>
                <a href="/">
                    <Image src={images.gericht} alt="Gericht" />
                </a>
            </NavBarLogo>
            <NavBarLinks>
                {navItems.map(({ name, link }) => (
                    <NavItem key={name}>
                        <NavLink primary href={link}>
                            {name}
                        </NavLink>
                    </NavItem>
                ))}
            </NavBarLinks>

            <Login>
                <NavLink primary href="/login">
                    Log In / Registration
                </NavLink>
                <Div />
                <NavLink primary href="/booktable">
                    Book Table
                </NavLink>
            </Login>

            <SmallScreen>
                <GiHamburgerMenu
                    color={colors.White}
                    fontSize={27}
                    cursor="pointer"
                    onClick={() => setToggleMenu(true)}
                />

                {toggleMenu && (
                    <SmallScreenOverlay>
                        <SmallNavBar>
                            <MdOutlineRestaurantMenu
                                fontSize={32}
                                color={colors.Golden}
                                onClick={() => setToggleMenu(false)}
                            />
                            {navItems.map(({ name, link }) => (
                                <SmallNavItem key={name}>
                                    <SmallNavLink onClick={() => setToggleMenu(false)} href={link}>
                                        {name}
                                    </SmallNavLink>
                                </SmallNavItem>
                            ))}
                        </SmallNavBar>
                    </SmallScreenOverlay>
                )}
            </SmallScreen>
        </NavBar>
    );
};

export default Navbar;
