import styled from 'styled-components'
import Colors from './../styles.js'

export const ProgramsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    height: fit-content;
    background-color: ${Colors.offWhite};
`;

export const ProgramWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    height: 55vh;
    width: 70%;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
`;

export const Column1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 30%;
`

export const Column2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const Column3 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const Column4 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 600;
    color: ${Colors.primary};

    text-align: left;
    margin-bottom: 2rem;
`;

export const TextWrapper = styled.div`
    width: 100%;
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
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;

    @media screen and (max-width: 480px) {
        font-size: 32px;
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
`

export const Img = styled.img`
    width: 100%;
`;