import React from 'react'
import {
  PartnershipsContainer,
  PartnershipsTextWrapper,
  Heading,
  Subtitle,
  ButtonWrapper,
  ImgWrapper,
  ImgBg
} from './PartnershipsElements.js'
import partnershipsImg from "/static/images/partnershipsImg.jpg"
import { Button } from '../Commons/ButtonElement.js'

const Partnerships = () => {

  const subtitleText = "As a community of Singaporean students, we strive to foster a welcoming and inclusive environment for all members. We are eager to collaborate with individuals and organizations  that share our values and goals. Whether you are a fellow student group, alumni, or community member, we look forward to exploring potential collaborations with you!"

  return (
    <PartnershipsContainer id="partnerships">
      <PartnershipsTextWrapper>
        <Heading> We're always looking to collaborate. </Heading>
        <Subtitle> {subtitleText} </Subtitle>
        <ButtonWrapper> 
          <Button href='mailto:ssa.uclabruins@gmail.com' primary="true" dark="true" fontBig="true" target='_blank'> Reach out! </Button>
        </ButtonWrapper>
      </PartnershipsTextWrapper>
      <ImgWrapper>
        <ImgBg src={partnershipsImg} alt="Partnerships" />
      </ImgWrapper>
    </PartnershipsContainer>
  )
}

export default Partnerships