import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import React from 'react'

export default function InfiniteCarousel(props) {
  return (
    <Carousel 
      autoPlay={true} 
      interval={1500} 
      showStatus={false} 
      showIndicators={false} 
      showArrows={false} 
      infiniteLoop={true} 
    >
      {props.children}
    </Carousel>
  )
}
