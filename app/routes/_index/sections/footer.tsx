import { useContext, type ReactNode } from "react";
import { envContext } from "~/services/Contexts";
import Emoji from "~/components/Emoji";
import BaseNavItem from "~/components/NavItem";

export default function Footer() {
    const env = useContext(envContext);

    return (
        <div className="flex w-full flex-col justify-between gap-8 bg-linear-19 from-yellow-500 to-yellow-300 p-10 text-navyblue lg:grid lg:auto-cols-fr">
            <FooterUl
                heading={
                    <>
                        <Emoji symbol="💪" />
                        Supported by:
                    </>
                }
            >
                <NavItem href={env.VITE_SGN_JOIN_LINK}>
                    <img
                        className="max-w-50"
                        src="/assets/images/sgnLogo.png"
                        alt="SGN Logo"
                    />
                </NavItem>
            </FooterUl>

            <FooterUl heading="Connect with us!">
                <NavItem href="mailto:ssa.uclabruins@gmail.com">
                    Contact
                </NavItem>
                <NavItem href={env.VITE_INSTAGRAM_LINK}>Instagram</NavItem>
                <NavItem href={env.VITE_DISCORD_LINK}>Discord</NavItem>
            </FooterUl>

            <FooterUl heading="For the newbies">
                <NavItem href={env.VITE_SGN_JOIN_LINK}>
                    Singapore Global Network
                </NavItem>
                <NavItem href={env.VITE_SOTONG_GUIDE}>Sotong Guide</NavItem>
                <NavItem href={env.VITE_MEMBERSHIP_CARD_LINK}>
                    Membership Card
                </NavItem>
            </FooterUl>

            <FooterUl heading="For the nerds">
                <NavItem href={env.VITE_GITHUB_LINK}>GitHub</NavItem>
            </FooterUl>

            <FooterUl
                heading={
                    <>
                        Join our mailing list!
                        <Emoji symbol="📧" />
                    </>
                }
            >
                <NavItem href={env.VITE_MAILCHIMP}>Subscribe</NavItem>
            </FooterUl>
        </div>
    );
}

function FooterUl({
    heading,
    children,
}: {
    heading: ReactNode;
    children?: ReactNode;
}) {
    return (
        <div className="row-end-1">
            <h3 className="mb-3">{heading}</h3>
            <ul className="grid gap-2 text-[0.9rem]">{children}</ul>
        </div>
    );
}

function NavItem(props: Record<string, unknown>) {
    return (
        <BaseNavItem
            className="transition-transform duration-100 hover:scale-105"
            {...props}
        />
    );
}
