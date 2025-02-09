import type { Route } from "./+types/home";
import { useState } from "react";

import Navbar from "~/sections/Navbar";
import Hero from "~/sections/Hero";
import Introduction from "~/sections/Introduction";
import Programs from "~/sections/Programs";
import Events from "~/sections/Events";
import Exco from "~/sections/Exco";
import Partnerships from "~/sections/Partnerships";
import Footer from "~/sections/Footer";
import { getEvents } from "~/services/eventsApi.server";
import httpCommon from "~/services/httpCommon.server";
import { useLoaderData } from "react-router";
import { envContext } from "~/services/Contexts";
import { reportError } from "~/services/eventsApi.server";

// eslint-disable-next-line no-empty-pattern
export function meta({}: Route.MetaArgs) {
    return [
        { title: "UCLA SSA" },
        { name: "description", content: "Welcome to SSA's official website." },
    ];
}

export async function loader() {
    const [events, exco] = await Promise.all([
        getEvents(),
        httpCommon
            .get("/exco/")
            .then((res) => res.data)
            .catch((e) => reportError(e) ?? []),
    ]);
    return {
        events,
        exco,
        env: {
            VITE_INSTAGRAM_LINK: process.env.VITE_INSTAGRAM_LINK,
            VITE_DISCORD_LINK: process.env.VITE_DISCORD_LINK,
            VITE_MEMBERSHIP_CARD_LINK: process.env.VITE_MEMBERSHIP_CARD_LINK,
            VITE_GITHUB_LINK: process.env.VITE_GITHUB_LINK,
            VITE_MAILCHIMP: process.env.VITE_MAILCHIMP,
            VITE_FAM_SIGNUP: process.env.VITE_FAM_SIGNUP,
            VITE_SGN_JOIN_LINK: process.env.VITE_SGN_JOIN_LINK,
            VITE_SOTONG_GUIDE: process.env.VITE_SOTONG_GUIDE,
        },
    };
}

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const { events, exco, env } = useLoaderData<typeof loader>();

    return (
        <envContext.Provider value={env}>
            <Navbar toggle={toggle} isOpen={isOpen} />
            <div className="flex flex-col items-center">
                <Hero />
                <Introduction />
                <Programs />
                <Events upcoming={events.upcoming} past={events.past} />
                <Exco excoData={exco} />
                <Partnerships />
                <Footer />
            </div>
        </envContext.Provider>
    );
}
