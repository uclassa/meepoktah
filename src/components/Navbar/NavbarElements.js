import { styled } from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

import Colors from '../styles'

export const Nav = styled.nav`
    background: ${({navBG}) => (navBG ? Colors.red : 'transparent')};
    transition: all 0.2s ease-in;
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
    @media screen and (max-width: 768px){
        background: ${Colors.red};
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 70%;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkRouter)`
    color: ${Colors.black};
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 35%);
        font-size: 1.8rem;
        cursor: pointer;
        color: ${Colors.black};
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 24px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavItem = styled.li`
    list-style-type: none;
    height: 40px;
`;

export const NavLinks = styled(LinkScroll)`
    color: ${Colors.offWhite};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    transition: all 0.1s ease-in;
    &:hover {
        transform: scale(1.1);
        transition: all 0.1s ease-in;
    }

    &.active {
        border-bottom: 5px solid ${Colors.gold};
    }
`;

export const SotongButton = styled.a`
    color: ${Colors.offWhite};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    transition: all 0.1s ease-in;
    &:hover {
        transform: scale(1.1);
        transition: all 0.1s ease-in;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavBtnLink = styled(LinkRouter)`
    border-radius: 20px;
    margin-right: 20px;
    background: ${Colors.black};
    white-space: nowrap;
    padding: 10px 27px;
    color: ${Colors.black};
    font-size: 16px;
    font-weight: 500;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
    }
`

export const NavP = styled.p`
    font-style: italic;
    font-size: 1rem;
`