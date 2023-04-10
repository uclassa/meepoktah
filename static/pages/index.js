import React from 'react'
import Exco from '../components/Exco';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Events from '../components/EventsSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Vision from '../components/Vision';
import Partnerships from '../components/Partnerships';
import Programs from '../components/Programs';

const Home = ({isOpen, toggle}) => {

  return (
  <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <Hero />
    <Vision />
    <Programs />
    <Events />
    <Exco />
    <Partnerships/>
    <Footer />
  </>
  )
}

export default Home