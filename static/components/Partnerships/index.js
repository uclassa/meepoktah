import React from 'react'
import {
  PartnershipsContainer,
  PartnershipsWrapper,
  PartnershipsRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Img
} from './PartnershipsElements.js'
import { Button } from '../Commons/ButtonElement.js'

import partnershipsImg from "../../images/partnershipsImg.jpg"

const Partnerships = () => {

  const subtitleString = ("Our partner organisations bring a lot of value our community. " + 
                          "They provide us with resources, mentorship, and opportunities for our members. " +
                          "We are always looking for new partners to work with, so if you're interested, please reach out to us!")

  return (
    <PartnershipsContainer id="partnerships">
      <PartnershipsWrapper>
        <PartnershipsRow imgStart={false}>
          <Column1>
            <TextWrapper>
              <TopLine>Partnerships</TopLine>
              <Heading>We are open to working with your organisation!</Heading>
              <Subtitle>{subtitleString}</Subtitle>
              <BtnWrap>
                <Button href="mailto:ssa.uclabruins@gmail.com" primary={false}>Contact Us!</Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <Img src={partnershipsImg} alt="partnerships"/>
          </Column2>
        </PartnershipsRow>
      </PartnershipsWrapper>
    </PartnershipsContainer>
  )
}

export default Partnerships