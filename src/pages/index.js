import React from 'react'
import Exco from '../components/Exco';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import Events from '../components/EventsSection';
import { about, vision, sponsorships } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = ({isOpen, toggle}) => {

  return (
  <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <Hero />
    <InfoSection {...vision}/>
    <Events />
    <Exco />
    <InfoSection {...sponsorships}/>
    <Footer />
  </>
  )
}

export default Home