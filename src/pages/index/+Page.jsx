import React, { useState } from 'react'
import Exco from '../../components/Exco';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import Events from '../../components/EventsSection';
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Introduction from '../../components/Introduction';
import Partnerships from '../../components/Partnerships';
import Programs from '../../components/Programs';

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
  <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <Hero/>
    <Introduction/>
    <Programs/>
    <Events/>
    <Exco/>
    <Partnerships/>
    <Footer/>
  </>
  )
}

export default Page