import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import React from 'react'

export default function InfiniteCarousel(props) {

  return (
    <CarouselWrapper>
      <Carousel 
        autoPlay={true} 
        interval={1500} 
        showStatus={false} 
        showIndicators={false} 
        showArrows={false} 
        infiniteLoop={true}
        showThumbs={false}
      >
        {props.children}
      </Carousel>
    </CarouselWrapper>
  )
}

// wrap the carousel, adding border radius
const CarouselWrapper = styled.div`
  aspect-ratio: 4/3;
  width: 80%;
  object-fit: cover;
  border-radius: 32px;
  overflow: hidden;
`;
