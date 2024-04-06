import React, {useEffect, useState} from 'react'
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
import heroVideo from '../../videos/hero.mp4'


const Hero = () => {

  const [video, setVideo] = useState();
  useEffect(() => {
     setVideo(heroVideo);
  }, [])
  
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
                src={video} 
                type='video/mp4' 
            />
        </HeroBg>
        <HeroContent>
            <HeroH1> SINGAPORE STUDENTS' ASSOCIATION </HeroH1>
            <HeroP> <Emoji symbol="👋"/> Hello! Welcome to SSA, a tight-knit community that welcomes everyone! </HeroP>
            <HeroBtnWrapper>
                <Button href='https://discord.gg/TtdgWEG68U'
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