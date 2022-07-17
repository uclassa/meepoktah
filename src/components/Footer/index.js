import React from 'react'
import {
    FooterContainer,
    FooterWrapper,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    FooterExternalLink
} from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrapper>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> Connect with us! </FooterLinkTitle>
                        <FooterLink to='/contact'>Contact</FooterLink>
                        <FooterExternalLink href='https://www.instagram.com/ucla.ssa' target="_blank">Instagram</FooterExternalLink>
                        <FooterExternalLink href='https://discord.gg/rNzYBUFx6a' target="_blank">Discord</FooterExternalLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> For the freshies </FooterLinkTitle>
                        <FooterLink to='/sotongGuide'>Sotong Guide</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> For the nerds </FooterLinkTitle>
                        <FooterLink to='/github'>Repository</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
        </FooterWrapper>
    </FooterContainer>

  )
}

export default Footer