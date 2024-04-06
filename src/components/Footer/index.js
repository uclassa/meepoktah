import React from 'react'
import Emoji from '../Commons/Emojis'
import {
    FooterContainer,
    FooterWrapper,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterExternalLink,
    FooterLogo,
    MailingListButton
} from './FooterElements'
import sgnLogo from '../../images/sgnLogo.png'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrapper>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> <Emoji symbol="💪"/>Supported by:</FooterLinkTitle>
                        <a href={import.meta.env.VITE_SGN_JOIN_LINK} target="_blank">
                            <FooterLogo src={sgnLogo} alt="SGN Logo" />
                        </a>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> Connect with us! </FooterLinkTitle>
                        <FooterExternalLink href='mailto:ssa.uclabruins@gmail.com' target="_blank">Contact</FooterExternalLink>
                        <FooterExternalLink href={import.meta.env.VITE_INSTAGRAM_LINK} target="_blank">Instagram</FooterExternalLink>
                        <FooterExternalLink href={import.meta.env.VITE_DISCORD_LINK} target="_blank">Discord</FooterExternalLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> For the newbies </FooterLinkTitle>
                        <FooterExternalLink href={import.meta.env.VITE_SGN_JOIN_LINK} target="_blank">Singapore Global Network</FooterExternalLink>
                        <FooterExternalLink href={import.meta.env.VITE_SOTONG_GUIDE} target="_blank">Sotong Guide</FooterExternalLink>
                        <FooterExternalLink href={import.meta.env.VITE_MEMBERSHIP_CARD_LINK} target="_blank">Membership card</FooterExternalLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> For the nerds </FooterLinkTitle>
                        <FooterExternalLink href={import.meta.env.VITE_GITHUB_LINK} target="_blank">Repository</FooterExternalLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> <Emoji symbol="📧"/>Join our mailing list!</FooterLinkTitle>
                        <MailingListButton href={import.meta.env.VITE_MAILCHIMP} target="_blank">
                            Subscribe
                        </MailingListButton>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
        </FooterWrapper>
    </FooterContainer>

  )
}

export default Footer