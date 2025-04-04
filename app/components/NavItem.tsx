import type { ReactNode } from "react";
import { NavLink } from "react-router";
import { Link as LinkScroll } from "react-scroll";

export default function NavItem({
    href,
    to,
    children,
    className: propsClassName,
    extendHitboxToNearestRelative,
}: {
    href?: string;
    to?: string;
    children?: ReactNode;
    className?: string;
    extendHitboxToNearestRelative?: boolean;
}) {
    const className =
        `${extendHitboxToNearestRelative ? "before:absolute before:top-0 before:left-0 before:w-full before:h-full" : ""} cursor-pointer w-max ${propsClassName ?? ""}`.trim();
    return (
        <>
            {href ? (
                <NavLink className={className} to={href}>
                    {children}
                </NavLink>
            ) : (
                <LinkScroll
                    className={(
                        className + " transition-[border] duration-100"
                    ).trim()}
                    to={to ?? ""}
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass="border-b-5 border-gold"
                >
                    {children}
                </LinkScroll>
            )}
        </>
    );
}
