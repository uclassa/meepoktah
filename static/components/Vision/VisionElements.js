import styled from 'styled-components'

export const VisionContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    background: #AAAAAA;
    height: fit-content;
`

export const VisionBannerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: #C73b3C;
    justify-content: center;
    align-items: center;
    height: 340px;
    width: 100%;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 132px;
    font-weight: 800;
    color: #FFFFFF;
    font-family: 'Asap', sans-serif;
    text-align: center;

    text-shadow: 5px 2px 15px rgba(0,0,0,0.4);

    @media screen and (max-width: 480px){
        font-size: 32px;
        text-align: center;
    }
    @media screen and (max-width: 920px){
        font-size: 56px;
        text-align: center;
    }
`

export const VisionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 800px;
    width: 100%;
`

export const ImgBg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(1.2px) grayscale(0.3) hue-rotate(-30deg);
`

export const ImgTextWrapper = styled.div`
    position: absolute;
    top: 108rem;
    color: #fff;
    text-align: left;
    max-width: 95%;
    padding-left: 12px;
    padding-right: 24px;

    @media screen and (max-width: 480px){
        top: 96rem;
    }
    
    z-index: 2;
`

export const ImgText = styled.h1`
    font-size: 96px;
    font-weight: 600;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    max-height: 100%;
    
    text-shadow: 5px 2px 10px rgba(0,0,0,0.6);

    @media screen and (max-width: 920px){
        font-size: 48px;
        font-weight: 600;
        margin-bottom: 4px;
    }
`

export const TopLine = styled.p`
    color: #FFF;
    font-size: 48px;
    line-height: 16px;
    font-weight: 700;
    margin-bottom: 24px;

    text-decoration: gold underline;
    text-underline-offset: 12px;

    text-shadow: 5px 2px 10px rgba(0,0,0,0.6);

    @media screen and (max-width: 920px){
        font-size: 48px;
        font-weight: 600;
        text-underline-offset: 8px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 8px;
    font-size: 24px;
    color: #fff;
    text-shadow: 5px 2px 10px rgba(0,0,0,0.6);
`