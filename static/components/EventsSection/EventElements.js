import styled from 'styled-components'
import { BsArrowRight } from 'react-icons/bs'

import Colors from './../styles.js'

export const EventsContainer = styled.div`
    height: fit-content;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${Colors.offWhite};

    @media screen and (max-width: 1440px){
        margin-top: 0px;
    }
    @media screen and (max-width: 768px){
        margin-top: -48px;
    }
    @media screen and (max-width: 480px){
        padding: 20px;
    }
`

export const EventsHeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    max-width: 800px;
    align-items: center;
    justify-content: center;
    margin-top: 300px;
    @media screen and (max-width: 1440px){
        margin-top: 0px;
    }
    @media screen and (max-width: 768px){
        margin-top: -128px;
    }
`

export const EventsHeadline = styled.h1`
    font-size: 2.5rem;
    color: ${Colors.darkBlue};
    margin-bottom: 8px;
    margin-top: 32px;
    text-align: center;

    @media screen and (max-width: 768px){
        margin-top: 150px;
    }

    @media screen and (max-width: 480px){
        font-size: 1.5rem;
    }
`

export const EventsSubtitle = styled.p`
    font-size: 1.5rem;
    max-width: 550px;
    margin-bottom: 12px;
    color: ${Colors.darkBlue};
    letter-spacing: 1px;
    text-align: center;

    @media screen and (max-width: 480px){
        font-size: 1rem;
    }
`

export const EventsWrapper = styled.div`
    max-width: 1300px;
    display: flex;
    flex-direction: column;
    margin-top: 24px;
`

export const EventsCardWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 24px;

    @media screen and (max-width: 1024px){
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 768px){
        padding: 0 10px;
    }
`

export const Headline = styled.h2`
    font-size: 2rem;
    color: ${Colors.darkBlue};
    margin-bottom: 8px;
    margin-top: 32px;
    text-align: start;

    @media screen and (max-width: 768px){
        margin-top: 15px;
    }

    @media screen and (max-width: 480px){
        font-size: 1.5rem;
    }
`

export const EventsCard = styled.div`
    display: flex;
    flex-direction: row;
    background: #000;
    border-radius: 15px;
    border-color: ${Colors.darkBlue};
    border-style: solid;
    border-width: 1px;
    height: 250px;
    width: 600px;
    margin-bottom: 20px;
    overflow: hidden;

    box-shadow: 0px 15px 24px #656565;

    @media screen and (max-width: 480px){
        height: 145px;
        width: 350px;
    }

    transition: 0.1s ease-in-out;
    &:hover {
        transform: scale(1.03);
        transition: 0.2s ease-in;
    }
`

export const EventsPhoto = styled.img`
    object-fit: cover;
    width: 100%;
    opacity: 0.45;
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${ props => props.color || Colors.red};
    width: 60px;
    height: 60px;
    border-radius: 60px;
    transition: all 0.2s ease-in-out;
    position: absolute;
    z-index: -1;
    top: 180px;
    left: 520px;
    opacity: 0;

    @media screen and (max-width: 480px){
        top: 150px;
        left: 480px;
        width: 50px;
        height: 50px;
        border-radius: 50px;
    }
`
    
export const EventsTextWrapperCol = styled.a`
    display: flex;
    width: 595px;
    text-decoration: none;
    height: 245px;
    border-radius: 15px;
    flex-direction: column;
    padding: 25px;
    position: absolute;
    overflow: hidden;
    z-index: 1;

    &:hover ${BtnWrap}{
        transform: scale(10);
        opacity: 0.7;
        left: 420px;    
        transition: all 0.3s ease-in-out;

        @media screen and (max-width: 480px){
            left: 300px;
        }
    }

    @media screen and (max-width: 480px){
        height: 145px;
        width: 350px;
    }
`

export const EventsDatePlace = styled.p`
    font-size: 1.5rem;
    max-width: 500px;
    font-weight: 600;
    color: ${Colors.offWhite};

    @media screen and (max-width: 480px){
        font-size: 1rem;
    }
`

export const EventsTitle = styled.h2`
    font-size: 3.5rem;
    color: ${Colors.offWhite};
    text-align: start;
    margin-bottom: 12px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
        margin-bottom: 6px;
    }
`
export const EventsDescription = styled.p`
    font-size: 1.2rem;
    max-width: 500px;
    color: ${Colors.offWhite};
    margin-bottom: 24px;

    @media screen and (max-width: 480px){
        font-size: 0.8rem;
    }
`
    
export const ArrowRight = styled(BsArrowRight)`
    margin: 0 0 8px 8px;
    font-size: 16px;
    color: ${Colors.offWhite};

    @media screen and (max-width: 480px){
        margin: 0 4px 16px 0;
        font-size: 8px;
    }
`

export const EventsCenteredBox = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    align-items: center;
    justify-content: center;
    padding-top: 24px;
`
export const InstagramLink = styled.a`
    text-decoration: none;
    background-color: ${Colors.red};
    padding: 1px;
    padding-right: 0px;
    border-radius: 5px;
    font-size: 1.5rem;
    color: white;
    margin: 4px;
`