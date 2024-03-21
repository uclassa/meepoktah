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

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrapper>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> <Emoji symbol="💪"/>Supported by:</FooterLinkTitle>
                        <a href="https://singaporeglobalnetwork.gov.sg/join-us/" target="_blank">
                            <FooterLogo src={require("./../../images/sgnLogo.png")} alt="SGN Logo" />
                        </a>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> Connect with us! </FooterLinkTitle>
                        <FooterExternalLink href='mailto:ssa.uclabruins@gmail.com' target="_blank">Contact</FooterExternalLink>
                        <FooterExternalLink href='https://www.instagram.com/ucla.ssa' target="_blank">Instagram</FooterExternalLink>
                        <FooterExternalLink href='https://discord.gg/TtdgWEG68U' target="_blank">Discord</FooterExternalLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> For the newbies </FooterLinkTitle>
                        <FooterExternalLink href='https://singaporeglobalnetwork.gov.sg/join-us/' target="_blank">Singapore Global Network</FooterExternalLink>
                        <FooterExternalLink href='https://medium.com/@ssa.uclabruins/ucla-ssa-sotong-guide-6e68161a2506' target="_blank">Sotong Guide</FooterExternalLink>
                        <FooterExternalLink href='https://forms.gle/PzdraTEr3nhrrT4y5' target="_blank">Membership card</FooterExternalLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> For the nerds </FooterLinkTitle>
                        <FooterExternalLink href='https://github.com/PierceCCH/meepoktah' target="_blank">Repository</FooterExternalLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> <Emoji symbol="📧"/>Join our mailing list!</FooterLinkTitle>
                        <MailingListButton href="https://mailchi.mp/868c856a80ab/join-our-ssa-mailing-list" target="_blank">
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