import { useContext, type ReactNode } from "react";
import { envContext } from "~/services/Contexts";
import Emoji from "~/components/Emoji";

export default function Footer() {
    const env = useContext(envContext);

    return (
        <div className="flex w-full flex-col justify-between gap-8 bg-linear-19 from-yellow-500 to-yellow-400 p-10 text-navyblue lg:grid lg:auto-cols-fr">
            <FooterUl
                heading={
                    <>
                        <Emoji symbol="💪" />
                        Supported by:
                    </>
                }
                items={[
                    <a
                        key={1}
                        href={env.VITE_SGN_JOIN_LINK}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className="max-w-50"
                            src="/images/sgnLogo.png"
                            alt="SGN Logo"
                        />
                    </a>,
                ]}
            />
            <FooterUl
                heading="Connect with us!"
                items={[
                    <a
                        key={1}
                        href="mailto:ssa.uclabruins@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Contact
                    </a>,
                    <a
                        key={2}
                        href={env.VITE_INSTAGRAM_LINK}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Instagram
                    </a>,
                    <a
                        key={3}
                        href={env.VITE_DISCORD_LINK}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Discord
                    </a>,
                ]}
            />
            <FooterUl
                heading="For the newbies"
                items={[
                    <a
                        key={1}
                        href={env.VITE_SGN_JOIN_LINK}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Singapore Global Network
                    </a>,
                    <a
                        key={2}
                        href={env.VITE_SOTONG_GUIDE}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Sotong Guide
                    </a>,
                    <a
                        key={3}
                        href={env.VITE_MEMBERSHIP_CARD_LINK}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Membership card
                    </a>,
                ]}
            />
            <FooterUl
                heading="For the nerds"
                items={[
                    <a
                        key={1}
                        href={env.VITE_GITHUB_LINK}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Repository
                    </a>,
                ]}
            />
            <FooterUl
                heading={
                    <>
                        Join our mailing list!
                        <Emoji symbol="📧" />
                    </>
                }
                items={[
                    <a
                        key={1}
                        href={env.VITE_MAILCHIMP}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Subscribe
                    </a>,
                ]}
            />
        </div>
    );
}

function FooterUl({
    heading,
    items,
}: {
    heading: ReactNode;
    items: ReactNode[];
}) {
    return (
        <div className="row-end-1">
            <h3 className="mb-3">{heading}</h3>
            <ul>
                {items.map((item, index) => (
                    <li key={index} className="mt-2 text-[0.9rem]">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}
