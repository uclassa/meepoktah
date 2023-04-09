import React from 'react'
import Exco from '../components/Exco';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Events from '../components/EventsSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Vision from '../components/Vision';
import Partnerships from '../components/Partnerships';

const Home = ({isOpen, toggle}) => {

  return (
  <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <Hero />
    <Vision />
    <Events />
    <Exco />
    <Partnerships/>
    <Footer />
  </>
  )
}

export default Home