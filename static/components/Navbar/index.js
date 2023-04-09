import React, { useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem,
    NavLinks,
    SotongButton,
} from './NavbarElements'

const Navbar = ({toggle}) => {

  const [navBG, setNavBG] = useState(false);
  const changeNavBG = () => {
    if (window.scrollY >= 700){
        setNavBG(true);
    } else {
        setNavBG(false);
    }
  }
  window.addEventListener('scroll', changeNavBG);

  const returnHome = () => {
    scroll.scrollToTop();
  }

  return (
   <>
   <IconContext.Provider value={{color: '#fff'}}>
    <Nav navBG={navBG}>
        <NavbarContainer>
            <NavLogo to="/" onClick={returnHome}>
                <img src={require("./../../images/ssaLogo.png")} height="75px" alt={"UCLA SSA"}/>
            </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' activeClass="active">About</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="events" smooth={true} duration={500} spy={true} exact='true' activeClass="active">Events</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="team" smooth={true} duration={500} spy={true} exact='true' offset={-140} activeClass="active">Our Team</NavLinks>
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
            </NavMenu>
        </NavbarContainer>    
    </Nav>
    </IconContext.Provider>
   </> 
  )
}

export default Navbar