import React, { useState } from 'react';
import { BiAlignMiddle } from 'react-icons/bi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { colors, images } from '../../constants';
import {
    Div,
    Image,
    Login,
    NavBar,
    NavBarLinks,
    NavBarLogo,
    NavItem,
    NavLink,
    SmallNavBar,
    SmallNavItem,
    SmallNavLink,
    SmallScreen,
    SmallScreenOverlay,
} from './Navbar.style';

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
                <BiAlignMiddle
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
