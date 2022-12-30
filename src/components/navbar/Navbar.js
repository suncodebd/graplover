/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

import {
    Bars,
    Close,
    LogoText,
    MobileIcon,
    Nav,
    NavbarContainr,
    NavIcon,
    NavItem,
    NavLinks,
    NavLogo,
    NavMenu
} from './StyleNavbar';

const Navbar = function Navbar() {
    const [click, setClick] = useState(false);
    const closeMenu = () => {
        setClick(false);
    };
    const handleClick = () => setClick(!click);

    return (
        <Nav>
            <NavbarContainr>
                <NavLogo to="/" onClick={closeMenu}>
                    <NavIcon />
                    <LogoText>GrapLover</LogoText>
                    
                </NavLogo>
                <MobileIcon onClick={handleClick}>{click ? <Close /> : <Bars />}</MobileIcon>
                <NavMenu click={click} onClick={handleClick}>
                    <NavItem>
                        <NavLinks to="/" onClick={closeMenu}>
                            Home
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/about" onClick={closeMenu}>
                           About
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/coding" onClick={closeMenu}>
                           Coding
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/contact" onClick={closeMenu}>
                          Contact us
                        </NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainr>
        </Nav>
    );
};
export default Navbar;
