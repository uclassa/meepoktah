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
                    <NavLinks to="about" smooth={true} duration={400} spy={true} exact='true' offset={-60}  onClick={toggle}>About</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="events" smooth={true} duration={400} spy={true} exact='true' offset={-60} onClick={toggle}>Events</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="team" smooth={true} duration={400} spy={true} exact='true' offset={-60} onClick={toggle}>Our Team</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="sponsorships" smooth={true} duration={400} spy={true} exact='true' offset={-60}  onClick={toggle}>Partnerships</NavLinks>
                </NavItem>
                <NavItem>
                    <SotongButton href='https://discord.gg/rNzYBUFx6a' target="_blank">Join Us!</SotongButton>
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