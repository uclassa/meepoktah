import styled from 'styled-components'

export const ProgramsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;
    background: #e8e9eb;
    padding: 56px 0 48px 0;
`

export const ProgramsCardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    background: #e8e9eb;
    height: fit-content;

    justify-content: space-evenly;
    align-items: top;

    @media screen and (max-width: 920px){
        flex-direction: column;
        align-items: center;
    }
`

export const ProgramsCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;

    border-radius: 48px;
    background: #e0e0e0;
    box-shadow:  24px 24px 48px #d7d7d7,
                -24px -24px 48px #e9e9e9;
    height: 480px;
    max-width: 30%;

    margin: 24px 0 24px 0;
    padding: 56px 0 0 0;
    
    border-radius: 88% 12% 83% 17% / 13% 78% 22% 87%;

    @media screen and (max-width: 920px){
        max-width: 90%;
    }
`

export const ProgramsCard2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;

    border-radius: 48px;
    background: #e0e0e0;
    box-shadow:  24px 24px 48px #d7d7d7,
                -24px -24px 48px #e9e9e9;
    height: 480px;
    max-width: 30%;

    margin: 24px 0 24px 0;
    padding: 56px 0 0 0;
    
    border-radius: 19% 81% 14% 86% / 80% 26% 74% 20%;

    @media screen and (max-width: 920px){
        max-width: 90%;
    }
`

export const ProgramsCard3 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;

    border-radius: 48px;
    background: #e0e0e0;
    box-shadow:  24px 24px 48px #d7d7d7,
                -24px -24px 48px #e9e9e9;
    height: 480px;
    max-width: 30%;

    margin: 24px 0 24px 0;
    padding: 56px 0 0 0;
    
    border-radius: 19% 81% 10% 90% / 78% 12% 88% 22% ;

    @media screen and (max-width: 920px){
        max-width: 90%;
    }
`

export const Title = styled.h1`
    font-size: 2rem;
    color: #000;
    text-align: center;

    max-width: 60%;

    font-family: 'Asap', sans-serif;
    font-weight: 600;

    @media screen and (max-width: 768px){
        font-size: 2.5rem;
    }
`

export const Heading = styled.h1`
    font-size: 3rem;
    color: #000;
    margin-bottom: 24px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 2.5rem;
    }
`

export const Subtitle = styled.p`
    font-size: 2rem;
    max-width: 70%;
    margin-bottom: 24px;
    line-height: 1.2;
    text-align: center;
    
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;

    @media screen and (max-width: 768px){
        font-size: 1.5rem;
    }
`

