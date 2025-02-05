import styled from 'styled-components'
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'
import Colors from '../styles'

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        z-index: 2;
    }
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o--object-fit: cover;
    object-fit: cover;
    background: #232a34;
    opacity: 0.3;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.1s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.35s ease-in-out;
    }
`

export const HeroH1 = styled.h1`
    font-family: Helvetica;
    color: ${Colors.offWhite};
    font-size: 48px;
    text-align: center;
    letter-spacing: 1px;
    text-shadow: 5px 2px 10px rgba(0,0,0,0.6);

    @media screen and (max-width: 760px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const HeroP = styled.p`
    font-family: Helvetica;
    margin-top: 12px;
    color: ${Colors.offWhite};
    font-size: 28px;
    text-align: center;
    max-width: 660px;
    text-shadow: 5px 2px 10px rgba(0,0,0,0.6);

    @media screen and (max-width: 480px){
        font-size: 20px;
    }
`

export const HeroP2 = styled.p`
    margin-top: 24px;
    color: ${Colors.offWhite};
    font-size: 16px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 480px){
        font-size: 10px;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`