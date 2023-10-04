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
import sunmerry from "../../images/sunmerry.png"
import volcano from "../../images/volcano.jpg"
import sginnovate from "../../images/sginnovate.jpg"
import bdu from "../../images/bdu.jpg"
import bursa from "../../images/bursa.jpg"
import msa from "../../images/msa.png"
import tca from "../../images/tca.png"
import ibsa from "../../images/ibsa.jpg"

const Partnerships = () => {

  const subtitleString = ("Our partner organisations bring a lot of value our community. " + 
                          "They provide us with resources, mentorship, and opportunities for our members. " +
                          "We are always looking for new partners to work with, so if you're interested, please reach out to us!")

  return (
    <>
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
      <TopLine>our partners</TopLine>
    </PartnershipsContainer>
    <Ticker>
      {({ index }) => (
        <TickerWrapper>
          <TickerLogoImg src={simpangImg} alt="simpang"/>
          <TickerLogoImg src={sunmerry} alt="sunmerry"/>
          <TickerLogoImg src={volcano} alt="volcano"/>
          <TickerLogoImg src={bdu} alt="bdu"/>
          <TickerLogoImg src={bursa} alt="bursa"/>
          <TickerLogoImg src={msa} alt="msa"/>
          <TickerLogoImg src={tca} alt="tca"/>
          <TickerLogoImg src={ibsa} alt="ibsa"/>
        </TickerWrapper>
      )}
    </Ticker>
    </>
  )
}

export default Partnerships