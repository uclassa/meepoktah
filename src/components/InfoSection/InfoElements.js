import styled from 'styled-components'

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#E8E9EB' : '#0b0e24')};
    height: 1000px;
    clip-path: ${({top}) => (top ? 'ellipse(249% 100% at 89.8% 100%)' : 'ellipse(102% 100% at 28.68% 0%)')};
    
    @media screen and (max-width: 1440px){
        clip-path: none;
    }

    @media screen and (max-width: 768px){
        padding-top: 100px;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    margin-top: 24px;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    grid-area: col1;
    padding: 0 24px;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 740px;
    padding-top: 0;
    padding-bottom: 60px;
    margin-left: ${({imgStart}) => (imgStart ? '0px' : '150px')};

    @media screen and (max-width: 768px){
        padding-bottom: 0px;
        margin-left: 0px;
    }
`

export const TopLine = styled.p`
    color: ${({lightText}) => (lightText ? '#E4B363' : '#E60000')};
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;

    @media screen and (max-width: 480px){
        font-size: 14px;
    }
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#1D3461')};

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    margin-bottom: 24px;
    font-size: 1.5rem;
    line-height: 2rem;
    color: ${({darkText}) => (darkText ? '#000' : '#fff')};

    @media screen and (max-width: 480px){
        line-height: 1.2rem;
        font-size: 1.2rem;
    }
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    height: 100%;
    transition: all 0.1s ease-in-out;

    @media screen and (max-width: 768px){
        max-width: 440px;
        margin-left: auto;
        margin-right: auto;
    }
    &:hover {
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
    }
`

export const Img = styled.img`
    width: 100%;
` 

export const MarginDiv = styled.div`
    margin-top: ${props => (props.margin || '-60px')};
`