import React from 'react'
import {
    SidebarContainer,
    SidebarWrapper,
    SidebarMenu,
} from './SidebarElements'

import {
    NavItem,
    NavLinks,
    SotongButton
} from '../Navbar/NavbarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen}>
        <SidebarWrapper>
            <SidebarMenu>
            <NavItem>
                    <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' activeClass="active">About</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="events" smooth={true} duration={500} spy={true} exact='true' activeClass="active">Events</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="team" smooth={true} duration={500} spy={true} exact='true' offset={-120} activeClass="active">Our Team</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="partnerships" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">Partnerships</NavLinks>
                </NavItem>
                <NavItem>
                    <SotongButton href={import.meta.env.VITE_MEMBERSHIP_CARD_LINK} target="_blank">Membership</SotongButton>
                </NavItem>
                <NavItem>
                    <SotongButton href={import.meta.env.VITE_SOTONG_GUIDE} target="_blank">Sotong Guide</SotongButton>
                </NavItem>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar