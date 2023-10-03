import React from 'react'
import {
  ProgramsContainer,
  ProgramsCardWrapper,
  Title,
  ProgramsCard,
  ProgramsCard2,
  ProgramsCard3,
  Heading,
  Subtitle
} from './ProgramsElements'
import {Button} from '../Commons/ButtonElement.js'
import Emoji from '../Commons/Emojis.js'

const Programs = () => {

  return (
    <ProgramsContainer>
      <Title> what you can expect... </Title>
      <ProgramsCardWrapper>
        <ProgramsCard>
          <Heading>
            <Emoji symbol="💳" /> Membership card
          </Heading>
          <Subtitle>
            At at one-time fee of $20, enjoy 15% off Simpang Asia and reduced entry to events!
          </Subtitle>
          <Subtitle>
            <a href="https://forms.gle/UUue5zvbuXmDH5ua7">Reserve one!</a>
          </Subtitle>
        </ProgramsCard>
        <ProgramsCard2>
          <Heading>
            <Emoji symbol="🙆‍♂️" /> Families
          </Heading>
          <Subtitle>
            Families are small groups that meet regularly to hang out and bond over food, games, and more!
          </Subtitle>
          <Button href="https://forms.gle/usgkAHvXxwgKQPjz9">
            Sign up!
          </Button>
        </ProgramsCard2>
        <ProgramsCard3>
          <Heading>
            <Emoji symbol="✌"/> Socials
          </Heading>
          <Subtitle>
            From board game nights to kickbacks, SSA hosts a variety of socials throughout the year!
          </Subtitle>
        </ProgramsCard3>
      </ProgramsCardWrapper>
    </ProgramsContainer>
  )
}

export default Programs