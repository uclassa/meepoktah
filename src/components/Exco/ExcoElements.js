import styled from 'styled-components'
import Colors from '../styles'

export const ExcoContainer = styled.div`
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: ${Colors.offWhite};

    @media screen and (max-width: 768px){
        margin-top: -128px;
    }

    @media screen and (max-width: 480px){
        padding: 20px;
    }
`

export const ExcoWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 10px 50px;

    @media screen and (max-width: 1024px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 10px;
    }
`
export const ExcoCard = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: ${Colors.darkBlue};
    border-radius: 15px;

    height: 400px;
    width: 320px;
    z-index: 2;
`

export const ExcoInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ExcoPhoto = styled.img`
    height: 320px;
    width: 340px;
    transform: translateY(-10px);
    border-radius: 15px;
    object-fit: cover;
`

export const ExcoHeader = styled.h1`
    font-size: 2.5rem;
    color: ${Colors.navyBlue};
    margin-bottom: 8px;
    margin-top: 32px;
    z-index: 2;

    @media screen and (max-width: 768px){
        margin-top: 150px;
    }

    @media screen and (max-width: 480px){
        font-size: 1.5rem;
    }
`

export const ExcoSubheader = styled.h3`
    font-size: 1rem;
    margin-bottom: 36px;
    color: ${Colors.red};
    font-style: italic;
    z-index: 2;
`

export const ExcoH2 = styled.h2`
    font-size: 1.2rem;
    color: ${Colors.offWhite};
`

export const ExcoH4 = styled.h4`
    font-size: 0.95rem;
    color: ${Colors.offWhite};
`
export const ExcoP = styled.p`
    text-align: center;
    font-size: 0.9rem;
    margin: 5px;
    color: ${Colors.offWhite};
`
export const Blob = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    z-index: 1;
    background: linear-gradient(19deg, rgba(212,68,68,1) 0%, rgba(196,34,34,1) 39%, rgba(255,70,70,1) 72%, rgba(212,68,68,1) 100%);
    height: 900px;
    width: 1400px;

    clip-path: polygon(49.3% 4.5%, 96.6% 31%, 91.4% 64.8%, 71.1% 75%, 49.9% 98.3%, 28.5% 75.8%, 5.5% 81.8%, 0.7% 63.5%, 18.2% 17%);

    @media screen and (max-width: 1440px){
        display: none;
    }
`
