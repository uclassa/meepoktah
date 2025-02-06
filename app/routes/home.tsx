import type { Route } from "./+types/home";
import { useState } from "react";

import Navbar from "~/components/Navbar";
import Hero from "~/components/Hero";
import Introduction from "~/components/Introduction";
import Programs from "~/components/Programs";
import Events from "~/components/EventsSection";
import Exco from "~/components/Exco";
import Partnerships from "~/components/Partnerships";
import Footer from "~/components/Footer";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "UCLA SSA" },
        { name: "description", content: "Welcome to SSA's official website." },
    ];
}

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Navbar toggle={toggle} isOpen={isOpen} />
            <Hero />
            <Introduction />
            <Programs/>
            <Events/>
            <Exco/>
            <Partnerships/>
            <Footer/>
        </>
    );
}
