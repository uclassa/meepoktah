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
            At only $5, enjoy 15% off Simpang Asia and reduced entry to events!
          </Subtitle>
          <Subtitle>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc2FAgLIKSJ2ot7VmHFEzoiJIGdtCstcSfK5497U_34AaNUKQ/viewform">Sign up here!</a>
          </Subtitle>
        </ProgramsCard>
        <ProgramsCard2>
          <Heading>
            <Emoji symbol="🙆‍♂️" /> Family System
          </Heading>
          <Subtitle>
            Led by "fam heads" as a way to integrate new members into the community, families serve as intimate platforms to meet people.
          </Subtitle>
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