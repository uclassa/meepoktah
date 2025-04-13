import clsx from "clsx";
import type { ReactNode } from "react";
import { NavLink } from "react-router";
import { Link as LinkScroll } from "react-scroll";

export default function NavItem({
    href,
    to,
    children,
    className,
    extendHitboxToNearestRelative,
}: {
    href?: string;
    to?: string;
    children?: ReactNode;
    className?: string;
    extendHitboxToNearestRelative?: boolean;
}) {
    className = clsx([
        extendHitboxToNearestRelative &&
            "before:absolute before:top-0 before:left-0 before:h-full before:w-full",
        "w-max cursor-pointer",
        className,
    ]);

    return (
        <>
            {href ? (
                <NavLink className={className} to={href}>
                    {children}
                </NavLink>
            ) : (
                <LinkScroll
                    className={clsx([
                        className,
                        "transition-[border] duration-100",
                    ])}
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
