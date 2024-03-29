import React from 'react'
import {
  ProgramsContainer,
  ProgramWrapper,
  Title,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Img,
} from './ProgramsElements.js'
import InfiniteCarousel from '../Commons/InfiniteCarousel.js'
import {Button} from '../Commons/ButtonElement.js'
import Emoji from '../Commons/Emojis.js'

import famImg1 from '../../images/fams/fam1.jpg'
import famImg2 from '../../images/fams/fam2.jpg'
import famImg3 from '../../images/fams/fam3.jpg'
import famImg4 from '../../images/fams/fam4.jpg'

const Programs = () => {

  const membershipCardLink = "https://forms.gle/UUue5zvbuXmDH5ua7"
  const famSignupLink = "https://forms.gle/usgkAHvXxwgKQPjz9"

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
              <Button href={famSignupLink} target="_blank" rel="noopener noreferrer">
                Sign up
              </Button>
            </BtnWrap>
          </TextWrapper>
        </Column1>
        <Column2>
          <InfiniteCarousel>
            <Img src={famImg1}/>
            <Img src={famImg2}/>
            <Img src={famImg3}/>
            <Img src={famImg4}/>
          </InfiniteCarousel>
        </Column2>
      </ProgramWrapper>
    </ProgramsContainer>
  )
}

export default Programs