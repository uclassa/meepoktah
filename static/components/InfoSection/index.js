/*
  == Reusable component to render descriptive information sections of the page.
  Usage: 
    Specify data to be rendered and its properties in Data.js. Pass in the data object as props.
*/

import React from 'react'
import {Button} from '../Commons/ButtonElement.js'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  BtnWrap,
  Img,
  MarginDiv
} from './InfoElements'

const InfoSection = ({
    lightBg, 
    id, 
    imgStart, 
    topLine, 
    lightText, 
    headline, 
    description,
    hasButton,
    buttonLabel,
    hasImage,
    img, 
    alt,
    primary,
    dark,
    darkText,
    buttonLink,
    curveTop
}) => {
  return (
    <>
      <MarginDiv />
      <InfoContainer lightBg={lightBg} top={curveTop}>
        <InfoWrapper id={id}>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper imgStart={imgStart}>
                <TopLine lightText={lightText}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  {hasButton ? 
                    <Button
                      href={buttonLink}
                      target="_blank"
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                    >{buttonLabel}
                    </Button> : <></>
                  }
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                {hasImage ? 
                  <Img src={img} alt={alt}/>
                  : <></>
                }
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection