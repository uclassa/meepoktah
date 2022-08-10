import styled from 'styled-components'

export const GuideContainer = styled.div`
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding: 20px;
    background: #E8E9EB;
`

export const GuideHeaderWrapper = styled.div`
    height: fit-content;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #E8E9EB;
    border-radius: 15px;
    margin-top: 100px;
    box-shadow: 2px 2px 5px #0b0e24;

    @media screen and (max-width: 768px){
        max-width: 500px;
    }
    @media screen and (max-width: 480px){
        max-width: 280px;
    }
`

export const GuideH1 = styled.h1`
    font-size: 2rem;
    font-style: italic;
    color: #0b0e24;
    margin: 10px;

    @media screen and (max-width: 768px){
        font-size: 1.5rem;
    }
    @media screen and (max-width: 480px){
        font-size: 1rem;
    }
`

export const GuideBodyWrapper = styled.div`
    height: fit-content;
    max-width: 1200px;
    padding: 10px;
    margin: 50px;

    @media screen and (max-width: 768px){
        max-width: 500px;
    }
    @media screen and (max-width: 480px){
        max-width: 280px;
    }
`