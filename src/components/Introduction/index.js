import React from 'react'
import {
  IntroductionContainer,
  IntroductionWrapper,
  IntroductionRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img
} from './IntroductionElements.js'
import {Button} from '../Commons/ButtonElement.js'
import img1 from "../../images/introImg.jpg"

const Introduction = () => {

  let subtitleString = ("A thriving community of Singaporeans at UCLA, we welcome everyone! " + 
                        "Whether you're Singaporean, lived in Singapore, or think Singapore is really cool, we'd love to have you join us! " + 
                        "\nDiscord is the best way to get in touch with us, so hop on in and say hi!")

  return (
    <IntroductionContainer id="about">
      <IntroductionWrapper>
        <IntroductionRow imgStart={false}>
          <Column1>
            <TextWrapper>
              <TopLine>Who are we?</TopLine>
              <Heading>We are the Singapore Students' Association at UCLA!</Heading>
              <Subtitle>{subtitleString}</Subtitle>
              <BtnWrap>
                <Button href={import.meta.env.VITE_DISCORD_LINK} primary={false}>Discord!</Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img1} alt="vision"/>
            </ImgWrap>
          </Column2>
        </IntroductionRow>
      </IntroductionWrapper>
    </IntroductionContainer>
  )
}

export default Introduction