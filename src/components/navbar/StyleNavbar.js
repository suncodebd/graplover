import { FaBars, FaMagento, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    background: #ffffff;
    color: #000000;
    height: 80px;
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
`;

export const NavbarContainr = styled.div`
    width: 100%;
    justify-content: space-between;
    position: relative;
    display: flex;
    padding: 0 10rem;

    height: 80px;
    @media screen and (max-width: 960px) {
        justify-content: space-between;
        padding: 0 20px;
    }
`;

export const NavLogo = styled(NavLink)`
    color: #2b1b9a;
    justify-self: flex-start;
    cursor: pointer;
    text-indent: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
`;
export const LogoText = styled.span`
    font-size: 30px;
    font-weight: bold;
    color: #b003e9;
`;

export const NavIcon = styled(FaMagento)`
    margin-right: 0.5rem;
    color: #ff3b00;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        right: 0;
        top: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const Close = styled(FaTimes)`
    transition: 0.6s;
`;

export const Bars = styled(FaBars)`
    transition: 0.6s;
`;

export const NavMenu = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    text-align: center;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 57px;
        left: ${({ click }) => (click ? 0 : '-100%')};
        opacity: ${({ click }) => (click ? 1 : 0)};
        transition: all 0.5s ease;
        background: #f8f6fa;
    }
`;
export const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;
    &:hover {
        border-bottom: 2px solid #4b59f7;
    }
    @media screen and (max-width: 960px) {
        width: 100%;

        &:hover {
            border: none;
        }
    }
`;
export const NavLinks = styled(NavLink)`
    color: #2b1b9a;
    display: flex;
    font-weight: bold;
    align-items: center;
    text-decoration: none;
    padding: 0.3rem 1rem;
    height: 100%;
    transition: all 0.3s ease;
    &.active {
        color: red;
    }
    @media screen and (max-width: 960px) {
        padding: 2rem;
        width: 100%;
        display: table;
        &:hover {
            color: #4b59f7;
            transition: all .es ease;
        }
    }
`;

export const NavItemBtn = styled.li`
    @media screen and (max-width: 960px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 120px;
    }
`;
export const NavBtnLink = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width: 100%;
    outline: none;
`;
