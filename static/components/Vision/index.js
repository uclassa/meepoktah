import React from 'react'
import { 
  VisionContainer, 
  VisionBannerWrapper,
  Heading,
  VisionWrapper, 
  ImgTextWrapper,
  ImgText,
  ImgBg,
  TopLine,
  Subtitle
} from './VisionElements'
import {Button} from '../Commons/ButtonElement.js'
import img1 from "/static/images/visionImg.jpeg"

const Vision = () => {

  const img1String = "CREATE AN INCLUSIVE SINGAPOREAN COMMUNITY AT UCLA"
  return (
    <VisionContainer>
      <VisionBannerWrapper>
        <Heading> A HOME AWAY FROM HOME </Heading>
      </VisionBannerWrapper>
      <VisionWrapper id="about">
        <ImgTextWrapper>
          <TopLine> OUR VISION </TopLine>
          <ImgText> {img1String} </ImgText>
        </ImgTextWrapper>
        <ImgBg src={img1} alt="Vision" />
      </VisionWrapper>
      <VisionBannerWrapper>
        <Subtitle>from Singapore &</Subtitle>
        <Heading> NEW TO UCLA? </Heading>
        <Button href="https://medium.com/@ssa.uclabruins/ucla-ssa-sotong-guide-6e68161a2506" fontBig="true" target='_blank'> THIS MIGHT HELP </Button>
      </VisionBannerWrapper>
    </VisionContainer>
  )
}

export default Vision