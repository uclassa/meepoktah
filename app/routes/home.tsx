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
import { getEvents } from "~/services/eventsApi.server";
import httpCommon from "~/services/httpCommon.server";
import { useLoaderData } from "react-router";

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
        exco: exco.data
    }
}

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const {events, exco} = useLoaderData<typeof loader>();
    

    return (
        <>
            <Navbar toggle={toggle} isOpen={isOpen} />
            <Hero />
            <Introduction />
            <Programs/>
            <Events upcomingEvents={events?.upcoming} pastEvents={events?.past}/>
            <Exco excoData={exco}/>
            <Partnerships/>
            <Footer/>
        </>
    );
}
