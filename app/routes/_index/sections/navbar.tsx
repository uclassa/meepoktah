import { useEffect, useRef, useContext } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { envContext } from "~/services/Contexts";
import BaseNavItem from "~/components/NavItem";

export default function Navbar({
    toggle,
    isOpen,
}: {
    toggle: () => void;
    isOpen: boolean;
}) {
    const navbar = useRef(null);
    let targetPosition: number;
    let navbarElement: HTMLElement;

    useEffect(() => {
        if (!navbar.current) return;
        const targetDiv = document.getElementById("about");
        if (!targetDiv) return;
        navbarElement = navbar.current as HTMLElement;
        targetPosition = targetDiv.offsetTop - navbarElement.offsetHeight;

        const updateBG = () => {
            if (window.scrollY > targetPosition)
                navbarElement.classList.add("bg-red");
            else navbarElement.classList.remove("bg-red");
        };
        window.addEventListener("scroll", updateBG);
        updateBG();
    });

    return (
        <div className="sticky top-0 z-1">
            <aside
                className="absolute w-full bg-[#b30000] p-6 text-offwhite transition-all duration-300 lg:hidden"
                style={{
                    opacity: isOpen ? "100%" : "100%",
                    top: isOpen ? "79px" : "-300px",
                }}
            >
                <ul className="grid justify-items-end gap-8">
                    <NavItems />
                </ul>
            </aside>
            <div
                className="absolute h-20 w-full transition-all duration-300 max-lg:bg-red"
                ref={navbar}
            >
                <IconContext.Provider value={{ color: "#fff" }}>
                    <nav className="relative mx-auto flex w-9/10 max-w-[900px] justify-between px-6">
                        <div
                            className="max-w-[75px] min-w-[75px] cursor-pointer content-center text-2xl"
                            onClick={scroll.scrollToTop}
                        >
                            <img
                                src="/assets/images/ssaLogo.png"
                                alt={"UCLA SSA"}
                            />
                        </div>
                        <div
                            className="my-auto cursor-pointer text-[1.8rem] lg:hidden"
                            onClick={toggle}
                        >
                            <FaBars />
                        </div>
                        <ul className="hidden grid-flow-col items-center justify-items-center gap-4 text-center text-offwhite lg:grid">
                            <NavItems />
                        </ul>
                    </nav>
                </IconContext.Provider>
            </div>
        </div>
    );
}

function NavItems() {
    const env = useContext(envContext);
    return (
        <>
            <NavItem to="about">About</NavItem>
            <NavItem to="events">Events</NavItem>
            <NavItem to="team">Our Team</NavItem>
            <NavItem to="partnerships">Partnerships</NavItem>
            <NavItem href={env.VITE_MEMBERSHIP_CARD_LINK}>Membership</NavItem>
            <NavItem href={env.VITE_SOTONG_GUIDE}>Sotong Guide</NavItem>
            <NavItem href="auth/login">Member Login</NavItem>
        </>
    );
}

function NavItem(props: { className?: string; [key: string]: unknown }) {
    const { className, ...restprops } = props;
    return (
        <li className="block transition duration-100 hover:scale-110">
            <BaseNavItem className={className ?? "" + "p-2"} {...restprops} />
        </li>
    );
}
