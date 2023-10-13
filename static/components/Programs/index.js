import React from 'react'
import {
  ProgramsContainer,
  ProgramWrapper,
  Title,
  Img
} from './ProgramsElements'
import InfiniteCarousel from '../Commons/InfiniteCarousel'
import Emoji from '../Commons/Emojis.js'
import {Button} from '../Commons/ButtonElement.js'

import deer from '../../images/excos/deer.png'

const Programs = () => {

  const membershipCardLink = "https://forms.gle/UUue5zvbuXmDH5ua7"
  const famSignupLink = "https://forms.gle/usgkAHvXxwgKQPjz9"

  return (
    <ProgramsContainer>
      <ProgramWrapper>
        <Title>Family system</Title>
        <InfiniteCarousel>
          <Img src={deer}/>
          <Img src={deer}/>
          <Img src={deer}/>
        </InfiniteCarousel>
      </ProgramWrapper>
      <ProgramWrapper>
        <Title>Membership Card</Title>
      </ProgramWrapper>
      <ProgramWrapper>
        <Title>Mentorship</Title>
      </ProgramWrapper>
    </ProgramsContainer>
  )
}

export default Programs