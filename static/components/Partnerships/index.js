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
  Img,
  TickerWrapper,
  TickerLogoImg
} from './PartnershipsElements.js'
import { Button } from '../Commons/ButtonElement.js'
import Ticker from 'react-ticker'

import partnershipsImg from "../../images/partnershipsImg.jpg"
import simpangImg from "../../images/simpang.jpg"
import sgnImg from "../../images/sgnLogo.png"
import sunmerry from "../../images/sunmerry.png"
import volcano from "../../images/volcano.jpg"
import sginnovate from "../../images/sginnovate.jpg"

const Partnerships = () => {

  const subtitleString = ("Our partners are a huge part of our community. We are always looking for new partners to work with, so if you're interested, please reach out to us!")

  return (
    <>
    <PartnershipsContainer id="partnerships">
      <PartnershipsWrapper>
        <PartnershipsRow imgStart={false}>
          <Column1>
            <TextWrapper>
              <TopLine>Partnerships</TopLine>
              <Heading>Our Partners</Heading>
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
    <Ticker>
      {({ index }) => (
        <TickerWrapper>
          <TickerLogoImg src={simpangImg} alt="simpang"/>
          <TickerLogoImg src={sunmerry} alt="sunmerry"/>
          <TickerLogoImg src={volcano} alt="volcano"/>
          <TickerLogoImg src={sgnImg} alt="sgn"/>
          <TickerLogoImg src={sginnovate} alt="sginnovate"/>
        </TickerWrapper>
      )}
    </Ticker>
    </>
  )
}

export default Partnerships