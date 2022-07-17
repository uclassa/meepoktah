import React, {useState} from 'react'
import Video from '../../videos/hero.mp4'
import { Button } from '../Commons/ButtonElement'
import Emoji from '../Commons/Emojis'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
} from './HeroElements'

const Hero = () => {

  const [hover, setHover] = useState(false)
  const onHover = () => {
      setHover(!hover);
  }

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg 
            autoPlay={true} 
            loop={true} 
            muted={true} 
            src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1> SINGAPORE STUDENTS ASSOCIATION </HeroH1>
            <HeroP> <Emoji symbol="👋"/> Looking for a tight-knit community? We welcome everyone! </HeroP>
            <HeroBtnWrapper>
                <Button href='https://discord.gg/vr94dUxP8x'
                        target='_blank'
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true">
                    Join Us! {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default Hero