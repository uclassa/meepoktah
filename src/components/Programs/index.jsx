import React from 'react'
import {
  ProgramsContainer,
  ProgramWrapper,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Img,
} from './ProgramsElements'
import InfiniteCarousel from '../Commons/InfiniteCarousel'
import {Button} from '../Commons/ButtonElement'
import Emoji from '../Commons/Emojis'

const basePath = "/images/fams/"

const Programs = () => {

  const fams = "Our family system is a great way to meet new people and make friends! You will be placed in a family with other members and a family head. You will be able to participate in fun events and activities with your family throughout the year!"

  return (
    <ProgramsContainer>
      <ProgramWrapper>
        <Column1>
          <TextWrapper>
            <TopLine><Emoji symbol={"🤗"}/>Join a family!</TopLine>
            <Heading>FAMILY SYSTEM</Heading>
            <Subtitle>{fams}</Subtitle>
            <BtnWrap>
              <Button href={import.meta.env.VITE_FAM_SIGNUP} target="_blank" rel="noopener noreferrer">
                Sign up
              </Button>
            </BtnWrap>
          </TextWrapper>
        </Column1>
        <Column2>
          <InfiniteCarousel>
            <Img src={basePath + "fam1.jpg"}/>
            <Img src={basePath + "fam2.jpg"}/>
            <Img src={basePath + "fam3.jpg"}/>
            <Img src={basePath + "fam4.jpg"}/>
          </InfiniteCarousel>
        </Column2>
      </ProgramWrapper>
    </ProgramsContainer>
  )
}

export default Programs