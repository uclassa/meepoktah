import styled from 'styled-components'
import { BsArrowRight } from 'react-icons/bs'

export const EventsContainer = styled.div`
    height: fit-content;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #E8E9EB;

    margin-top: -300px;
    @media screen and (max-width: 1440px){
        margin-top: 0px;
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
`

export const EventsHeadline = styled.h1`
    font-size: 2.5rem;
    color: #0b0e24;
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
    color: #0b0e24;
    letter-spacing: 1px;
    font-style: italic;
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
    color: #0b0e24;
    margin-bottom: 8px;
    margin-top: 32px;
    text-align: start;

    @media screen and (max-width: 768px){
        margin-top: 150px;
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
    border-color: #0b0e24;
    border-style: solid;
    border-width: 1px;
    height: 250px;
    width: 600px;
    margin-bottom: 20px;
    overflow: hidden;

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

export const BtnWrap = styled.a`
    display: flex;
    justify-content: center;
    text-decoration: none;
    align-items: center;
    background: ${ props => props.color || '#E60000'};
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
    
export const EventsTextWrapperCol = styled.div`
    display: flex;
    width: 595px;
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
    color: #fff;

    @media screen and (max-width: 480px){
        font-size: 1rem;
    }
`

export const EventsTitle = styled.h2`
    font-size: 3.5rem;
    color: #fff;
    text-align: start;
    margin-bottom: 15px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`
export const EventsDescription = styled.p`
    font-size: 1.2rem;
    max-width: 500px;
    color: #fff;
    margin-bottom: 24px;

    @media screen and (max-width: 480px){
        font-size: 0.8rem;
    }
`
    
export const ArrowRight = styled(BsArrowRight)`
    margin: 0 0 8px 8px;
    font-size: 16px;
    color: #fff;

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
`