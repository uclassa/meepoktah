import styled from 'styled-components'
import Colors from './../styles.js'

export const ProgramsContainer = styled.div`
    display: flex;
    background: ${Colors.offWhite};
    height: 100vh;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
        height: fit-content;
    }
`;

export const ProgramWrapper = styled.div`
    display: flex;
    flex-direction: row;
    z-index: 1;
    height: fit-content;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding-top: 4rem;
    justify-content: center;

    @media screen and (max-width: 768px) {
        padding-top: 12rem;
        max-width: 100%;
        flex-direction: column;
    }
`;

export const Column1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    width: fit-content;
`

export const Column2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;

    @media screen and (max-width: 768px) {
        width: 100%;
        padding-top: 2rem;
    }
`

export const TextWrapper = styled.div`
    width: fit-content;
    height: 100%;
    padding: 0 1.5rem;
`

export const TopLine = styled.p`
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;

    @media screen and (max-width: 768px) {
        text-align: center;
    }
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;

    @media screen and (max-width: 480px) {
        font-size: 32px;
        text-align: center;
    }
`

export const Subtitle = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 1.3rem;
    line-height: 2.5rem;
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`

export const Img = styled.img`
    width: 100%;
`;