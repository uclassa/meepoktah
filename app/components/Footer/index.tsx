import Emoji from "../Commons/Emojis";
import { useContext } from "react";
import { envContext } from "../Commons/Contexts";
import "./Footer.scss";

const Footer = () => {
    const env = useContext(envContext);

    return (
        <div className="footer-container flex basis-1 flex-col justify-between gap-8 p-10 lg:grid lg:auto-cols-fr">
            <div className="row-end-1 flex flex-col">
                <p>
                    {" "}
                    <Emoji symbol="💪" />
                    Supported by:
                </p>
                <a
                    href={env.VITE_SGN_JOIN_LINK}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        className="max-w-50"
                        src="/images/sgnLogo.png"
                        alt="SGN Logo"
                    />
                </a>
            </div>
            <div className="row-end-1 flex flex-col">
                <p> Connect with us! </p>
                <a
                    href="mailto:ssa.uclabruins@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    Contact
                </a>
                <a
                    href={env.VITE_INSTAGRAM_LINK}
                    target="_blank"
                    rel="noreferrer"
                >
                    Instagram
                </a>
                <a
                    href={env.VITE_DISCORD_LINK}
                    target="_blank"
                    rel="noreferrer"
                >
                    Discord
                </a>
            </div>
            <div className="row-end-1 flex flex-col">
                <p> For the newbies </p>
                <a
                    href={env.VITE_SGN_JOIN_LINK}
                    target="_blank"
                    rel="noreferrer"
                >
                    Singapore Global Network
                </a>
                <a
                    href={env.VITE_SOTONG_GUIDE}
                    target="_blank"
                    rel="noreferrer"
                >
                    Sotong Guide
                </a>
                <a
                    href={env.VITE_MEMBERSHIP_CARD_LINK}
                    target="_blank"
                    rel="noreferrer"
                >
                    Membership card
                </a>
            </div>
            <div className="row-end-1 flex flex-col">
                <p> For the nerds </p>
                <a href={env.VITE_GITHUB_LINK} target="_blank" rel="noreferrer">
                    Repository
                </a>
            </div>
            <div className="row-end-1 -mt-1 flex flex-col">
                <p>
                    {" "}
                    <Emoji symbol="📧" />
                    Join our mailing list!
                </p>
                <a href={env.VITE_MAILCHIMP} target="_blank" rel="noreferrer">
                    Subscribe
                </a>
            </div>
        </div>
    );
};

export default Footer;
