import { useEffect, useRef, useContext } from "react";
import { animateScroll as scroll, Link as LinkScroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { envContext } from "../Commons/Contexts";

import "./Navbar.scss";

export default function Navbar({
    toggle,
    isOpen,
}: {
    toggle: () => void;
    isOpen: boolean;
}) {
    const navbar = useRef(null);

    useEffect(() => {
        const updateBG = () => {
            if (!navbar.current) return;
            const navbarElement = navbar.current as HTMLElement;
            if (window.scrollY >= 700) navbarElement.classList.add("bg-red");
            else navbarElement.classList.remove("bg-red");
        };
        window.addEventListener("scroll", updateBG);
        updateBG();
    });

    return (
        <div className="nav-container">
            <aside
                className="sidebar"
                style={{
                    opacity: isOpen ? "100%" : "0",
                    top: isOpen ? "79px" : "-70%",
                }}
            >
                <div className="m-6 flex flex-col items-end gap-4 md:hidden">
                    <NavItems />
                </div>
            </aside>
            <IconContext.Provider value={{ color: "#fff" }}>
                <nav className="navbar" ref={navbar}>
                    <div className="flex h-20 w-7/10 max-w-[1100px] justify-between">
                        <div
                            className="ml-6 max-w-[75px] min-w-[75px] cursor-pointer content-center text-2xl"
                            onClick={scroll.scrollToTop}
                        >
                            <img src="/images/ssaLogo.png" alt={"UCLA SSA"} />
                        </div>
                        <div
                            className="absolute top-1/3 right-[20px] block cursor-pointer text-[1.8rem] md:hidden"
                            onClick={toggle}
                        >
                            <FaBars />
                        </div>
                        <ul className="mr-6 hidden list-none items-center text-center md:flex">
                            <NavItems />
                        </ul>
                    </div>
                </nav>
            </IconContext.Provider>
        </div>
    );
}

function NavItems() {
    const env = useContext(envContext);
    return (
        <>
            <li>
                <LinkScroll
                    className="link"
                    to="about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass="active"
                >
                    About
                </LinkScroll>
            </li>
            <li>
                <LinkScroll
                    className="link"
                    to="events"
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass="active"
                >
                    Events
                </LinkScroll>
            </li>
            <li>
                <LinkScroll
                    className="link"
                    to="team"
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass="active"
                >
                    Our Team
                </LinkScroll>
            </li>
            <li>
                <LinkScroll
                    className="link"
                    to="partnerships"
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass="active"
                >
                    Partnerships
                </LinkScroll>
            </li>
            <li>
                <a
                    className="link"
                    href={env.VITE_MEMBERSHIP_CARD_LINK}
                    target="_blank"
                    rel="noreferrer"
                >
                    Membership
                </a>
            </li>
            <li>
                <a
                    className="link"
                    href={env.VITE_SOTONG_GUIDE}
                    target="_blank"
                    rel="noreferrer"
                >
                    Sotong Guide
                </a>
            </li>
        </>
    );
}
