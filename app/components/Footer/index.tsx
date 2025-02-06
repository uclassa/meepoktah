import Emoji from "../Commons/Emojis";
import "./Footer.scss";

const Footer = () => {
    return (
        <div className="footer-container p-10 flex flex-col lg:grid lg:auto-cols-fr basis-1 gap-8 justify-between">
            <div className="row-end-1 flex flex-col">
                <p>
                    {" "}
                    <Emoji symbol="💪" />
                    Supported by:
                </p>
                <a href={import.meta.env.VITE_SGN_JOIN_LINK} target="_blank">
                    <img className='max-w-50' src="/images/sgnLogo.png" alt="SGN Logo" />
                </a>
            </div>
            <div className="row-end-1 flex flex-col">
                <p> Connect with us! </p>
                <a href="mailto:ssa.uclabruins@gmail.com" target="_blank">
                    Contact
                </a>
                <a href={import.meta.env.VITE_INSTAGRAM_LINK} target="_blank">
                    Instagram
                </a>
                <a href={import.meta.env.VITE_DISCORD_LINK} target="_blank">
                    Discord
                </a>
            </div>
            <div className="row-end-1 flex flex-col">
                <p> For the newbies </p>
                <a href={import.meta.env.VITE_SGN_JOIN_LINK} target="_blank">
                    Singapore Global Network
                </a>
                <a href={import.meta.env.VITE_SOTONG_GUIDE} target="_blank">
                    Sotong Guide
                </a>
                <a
                    href={import.meta.env.VITE_MEMBERSHIP_CARD_LINK}
                    target="_blank"
                >
                    Membership card
                </a>
            </div>
            <div className="row-end-1 flex flex-col">
                <p> For the nerds </p>
                <a href={import.meta.env.VITE_GITHUB_LINK} target="_blank">
                    Repository
                </a>
            </div>
            <div className="row-end-1 flex flex-col -mt-1">
                <p>
                    {" "}
                    <Emoji symbol="📧" />
                    Join our mailing list!
                </p>
                <a href={import.meta.env.VITE_MAILCHIMP} target="_blank">
                    Subscribe
                </a>
            </div>
        </div>
    );
};

export default Footer;
