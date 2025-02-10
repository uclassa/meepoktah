import type { ReactNode } from "react";
import { Link as LinkScroll } from "react-scroll";

export default function NavItem({
    href,
    to: optionalTo,
    children,
}: {
    href?: string;
    to?: string;
    children?: ReactNode;
}) {
    const to = optionalTo ?? "";
    return (
        <li className="w-max transition-all duration-100 hover:scale-105">
            {href ? (
                <a
                    className="cursor-pointer p-2 transition-all duration-100"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                >
                    {children}
                </a>
            ) : (
                <LinkScroll
                    className="cursor-pointer p-2 transition-all duration-100"
                    to={to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass="border-b-5 border-gold"
                >
                    {children}
                </LinkScroll>
            )}
        </li>
    );
}
