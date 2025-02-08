import Emoji from "../Commons/Emojis";
import Button from "../Commons/Button";
import { useContext } from "react";
import { envContext } from "../Commons/Contexts";
import type { Events, Event } from "~/services/eventsApi.server";
import "./Events.scss";

export default function EventsSection({ upcoming, past }: Partial<Events>) {
    const env = useContext(envContext);

    return (
        <div
            id="events"
            className="events-container flex flex-col max-w-[1100px] mx-auto items-center pb-[50px] p-5 md:-mt-12 xl:mt-0 text-darkblue"
        >
            <h1> Our Events </h1>
            <p> Watch this space for updates on future events!</p>
            <h2>
                {" "}
                <Emoji symbol="🙌" /> Upcoming Events{" "}
            </h2>
            {upcoming && upcoming?.length > 0 ? (
                <EventList events={upcoming} />
            ) : (
                <p className="text-center leading-[1.3]">
                    No upcoming events for now. Check out our
                    <a
                        className="bg-red p-[1px] rounded-[5px] m-1 text-offwhite transition duration-200 ease hover:bg-gold hover:text-black cursor-pointer"
                        href={env.VITE_INSTAGRAM_LINK}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Instagram
                    </a>
                    to stay up to date with future events!
                </p>
            )}
            <h2> A couple of our past events</h2>
            {past && past?.length > 0 && <EventList events={past} />}
            <div className="flex flex-col items-center">
                <p className="text-center leading-[1.3]">
                    {" "}
                    Find us on Instagram to keep up to date with all our
                    happenings! <Emoji symbol="👇" />
                </p>
                <Button fontBig={true}>
                    <a
                        href={env.VITE_INSTAGRAM_LINK}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Stalk Us!
                    </a>{" "}
                </Button>
            </div>
        </div>
    );
}

const EventList = ({ events }: { events: Event[] }) => (
    <div className="text-offwhite grid auto-cols-fr grid-cols-1 xl:grid-cols-2 gap-6 max-w-[1400px] items-center">
        {events.map(EventCard)}
    </div>
);

function EventCard(props: Event, index: number) {
    const imageLink =
        props?.image == null ? "/images/eventDefault.jpg" : props.image;

    const date = new Date(props.start_date);

    return (
        <div key={index} className="event-card">
            <img
                className="w-full object-cover"
                src={imageLink}
                alt="Picture of event"
            />
            <a
                className="event-text-wrapper"
                href={props.link ?? "javascript:"}
                target="_blank"
                rel="noreferrer"
            >
                <p className="">
                    {" "}
                    {date.toDateString()} | {props.venue}
                </p>
                <h3 className="text-2xl md:text-5xl">{props.title}</h3>
                {date.getTime() > new Date().getTime() && (
                    <p>{props.description}</p>
                )}
            </a>
        </div>
    );
}
