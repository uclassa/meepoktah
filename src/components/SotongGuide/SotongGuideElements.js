import styled from 'styled-components'

export const SotongNav = styled.div`
    background: #b30000;
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const SotongNavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px:
    max-width: 1100px;
`

export const SotongContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    justify-content: start;
    background: #E8E9EB;

    @media screen and (max-width: 768px){
        height: fit-content;
    }
`

export const SotongWrapper = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;
    padding: 0 10px;

    @media screen and (max-width: 1024px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0px;
    }
`
export const SotongCard = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: #0b0e24;
    border-radius: 15px;
    border-color: #0b0e24;
    border-style: solid;
    border-width: 1px;
    box-shadow: 2px 2px 3px #0b0e24;
    width: 440px;
    height: 140px;
    margin-bottom: 20px;
    transition: all 0.1s ease-in-out;

    &:hover {
        transform: scale(1.05);
        z-index: 1;
        transition: all 0.25s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 1000px){
        width: 360px;
    }
    @media screen and (max-width: 480px){
        width: 280px;
    }
`

export const SotongCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    align-items: start;
    margin: 20px;
    margin-left: 30px;
`

export const SotongTextWrapper = styled.div`
    height: fit-content;
    width: 1200px;
    padding: 10px;
    margin-top: 120px;
    margin-bottom: 72px;
    box-shadow: 2px 2px 4px #0b0e24;

    @media screen and (max-width: 768px){
        width: 600px;
    }
    @media screen and (max-width: 480px){
        width: 300px;
    }
`

export const SotongHeader = styled.h1`
    font-size: 2.5rem;
    color: #0b0e24;

    @media screen and (max-width: 768px){
        font-size: 2rem;
    }
    @media screen and (max-width: 480px){
        font-size: 1.5rem;
    }
`

export const SotongH3 = styled.h3`
    font-size: 1.5rem;
    color: #0b0e24;

    @media screen and (max-width: 480px){
        font-size: 1rem;
    }
`

export const SotongH4 = styled.h4`
    font-size: 1.5rem;
    margin: 10px;
    color: #E8E9EB;
`
export const SotongP = styled.p`
    font-size: 1rem;
    margin: 10px;
    color: #E8E9EB;
`
