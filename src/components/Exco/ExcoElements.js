import styled from 'styled-components'

export const ExcoContainer = styled.div`
    height: fit-content;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: #e8e9eb;

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
    background: #0b0e24;
    border-radius: 15px;
    border-color: #0b0e24;
    border-style: solid;
    border-width: 1px;

    box-shadow: 0px 10px 16px #060714;
    height: 400px;
    width: 320px;
    margin-bottom: 20px;
    transition: all 0.3s ease-in-out;
    z-index: 2;

    &:hover {
        transform: scale(1.15);
        z-index: 3;
        transition: all 0.4s ease-in-out;
    }
`

export const ExcoInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.2s ease-in-out;
    
    &:hover {
        transform: translateY(-310px);
        transition: all 0.3s ease-in-out;
    }
`

export const ExcoTextWrapper = styled.div`
    height: 1000px;
    background: #0b0e24;
`

export const ExcoPhoto = styled.img`
    height: 340px;
    width: 340px;
    transform: translateY(-10px);
    border-radius: 15px;
    object-fit: cover;
`

export const ExcoHeader = styled.h1`
    font-size: 2.5rem;
    color: #0b0e24;
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
    color: #E60000;
    font-style: italic;
    z-index: 2;
`

export const ExcoH2 = styled.h2`
    font-size: 1.2rem;
    color: #E8E9EB;
`

export const ExcoH4 = styled.h4`
    font-size: 0.95rem;
    margin: 10px;
    color: #E8E9EB;
`
export const ExcoP = styled.p`
    text-align: center;
    font-size: 0.9rem;
    margin: 5px;
    color: #E8E9EB;
`

export const ExcoVision = styled.h1`
    font-size: 1.5rem;
    font-style: italic;
    letter-spacing: 0.5px;
    text-align: center;
    margin: 35px;
    color: #E8E9EB;
`

export const Blob = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    z-index: 1;
    background: rgb(212,68,68);
    background: linear-gradient(19deg, rgba(212,68,68,1) 0%, rgba(196,34,34,1) 39%, rgba(255,70,70,1) 72%, rgba(212,68,68,1) 100%);
    height: 900px;
    width: 1400px;

    clip-path: polygon(49.3% 4.5%, 96.6% 31%, 91.4% 64.8%, 71.1% 75%, 49.9% 98.3%, 28.5% 75.8%, 5.5% 81.8%, 0.7% 63.5%, 18.2% 17%);

    @media screen and (max-width: 1440px){
        display: none;
    }
`

export const BottomDiv = styled.div`
    height: ${props => (props.height || '100px')};
`