import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Colors from '../styles'

export const FooterContainer = styled.footer`
    background: rgb(228,179,99);
    background: linear-gradient(19deg, rgba(228,179,99,1) 0%, rgba(252,180,63,1) 39%, rgba(245,190,101,1) 72%, rgba(255,199,107,1) 100%);
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 1440px){
        margin-top: 0px;
    }
`

export const FooterWrapper = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
` 
export const FooterLinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media screen and (max-width: 820px){
        padding-top: 32px;
        flex-direction: column;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;

    @media screen and (max-width: 820px){
        flex-direction: column-reverse;
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: ${Colors.black};

    @media screen and (max-width: 1000px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
    color: ${Colors.darkBlue};
`

export const FooterLink = styled(Link)`
    color: ${Colors.black};
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: #01bf71;
        transition: 0.3s ease-out;
    }
`

export const FooterExternalLink = styled.a`
    color: ${Colors.black};
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: #01bf71;
        transition: 0.3s ease-out;
    }
`

export const FooterLogo = styled.img`
    object-fit: cover;
    height: 100px;
    width: auto;
    transition: 0.1s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: 0.2s ease-in-out;
    }
`

export const MailingListButton = styled.a`
    width: 140px;
    font-size: 20px;
    border-radius: 15px;
    background-color: white;
    text-decoration: none;
    text-align: center;
    padding: 5px;

    transition: all 0.1s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    }
`