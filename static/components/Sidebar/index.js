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
                    <SotongButton href='https://docs.google.com/forms/d/e/1FAIpQLSc2FAgLIKSJ2ot7VmHFEzoiJIGdtCstcSfK5497U_34AaNUKQ/viewform' target="_blank">Membership</SotongButton>
                </NavItem>
                <NavItem>
                    <SotongButton href="https://medium.com/@ssa.uclabruins/ucla-ssa-sotong-guide-6e68161a2506" target="_blank">Sotong Guide</SotongButton>
                </NavItem>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar