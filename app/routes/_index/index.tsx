import { useState, Suspense } from "react";
import { Await } from "react-router";

import Navbar from "./sections/navbar";
import Hero from "./sections/hero";
import Introduction from "./sections/introduction";
import Programs from "./sections/programs";
import EventSection from "./sections/events";
import Exco from "./sections/exco";
import Partnerships from "./sections/partnerships";
import Footer from "./sections/footer";
import APIClient from "~/services/httpCommon.server";
import { useLoaderData } from "react-router";
import { envContext } from "~/services/Contexts";

export async function loader() {
    return {
        events: APIClient.getEvents(),
        exco: APIClient.getExco(),
        env: {
            VITE_DJANGO_API: process.env.VITE_DJANGO_API,
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
    const { events, exco, env } = useLoaderData<typeof loader>();
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <envContext.Provider value={env}>
            <Navbar toggle={toggle} isOpen={isOpen} />
            <div className="flex flex-col items-center">
                <Hero />
                <Introduction />
                <Programs />
                <Suspense
                    fallback={
                        <>
                            <EventSection upcoming={[]} past={[]} />
                            <Exco excoData={[]} />
                        </>
                    }
                >
                    <Await resolve={events}>
                        {(events) => (
                            <EventSection
                                upcoming={events.upcoming}
                                past={events.past}
                            />
                        )}
                    </Await>
                    <Await resolve={exco}>
                        {(exco) => <Exco excoData={exco} />}
                    </Await>
                </Suspense>
                <Partnerships />
                <Footer />
            </div>
        </envContext.Provider>
    );
}
