import type { Route } from "./+types/home";
import { createContext, useState } from "react";

import Navbar from "~/components/Navbar";
import Hero from "~/components/Hero";
import Introduction from "~/components/Introduction";
import Programs from "~/components/Programs";
import Events from "~/components/EventsSection";
import Exco from "~/components/Exco";
import Partnerships from "~/components/Partnerships";
import Footer from "~/components/Footer";
import { getEvents } from "~/services/eventsApi.server";
import httpCommon from "~/services/httpCommon.server";
import { useLoaderData } from "react-router";
import { envContext } from "~/components/Commons/Contexts";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "UCLA SSA" },
        { name: "description", content: "Welcome to SSA's official website." },
    ];
}

export async function loader() {
    const events = await getEvents();
    const exco = await httpCommon.get('/exco/');
    return {
        events,
        exco: exco.data,
        env: {
            VITE_INSTAGRAM_LINK: process.env.VITE_INSTAGRAM_LINK,
            VITE_DISCORD_LINK: process.env.VITE_DISCORD_LINK,
            VITE_MEMBERSHIP_CARD_LINK: process.env.VITE_MEMBERSHIP_CARD_LINK,
            VITE_GITHUB_LINK: process.env.VITE_GITHUB_LINK,
            VITE_MAILCHIMP: process.env.VITE_MAILCHIMP,
            VITE_FAM_SIGNUP: process.env.VITE_FAM_SIGNUP,
            VITE_SGN_JOIN_LINK: process.env.VITE_SGN_JOIN_LINK,
            VITE_SOTONG_GUIDE: process.env.VITE_SOTONG_GUIDE
        }
    }
}

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const {events, exco, env} = useLoaderData<typeof loader>();
    

    return (
        <envContext.Provider value={env}>
            <Navbar toggle={toggle} isOpen={isOpen} />
            <Hero />
            <Introduction />
            <Programs/>
            <Events upcomingEvents={events?.upcoming} pastEvents={events?.past}/>
            <Exco excoData={exco}/>
            <Partnerships/>
            <Footer/>
        </envContext.Provider>
    );
}
