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
            className="events-container mx-auto flex max-w-[1100px] flex-col items-center p-5 pb-[50px] text-darkblue md:-mt-12 xl:mt-0"
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
                        className="ease m-1 cursor-pointer rounded-[5px] bg-red p-[1px] text-offwhite transition duration-200 hover:bg-gold hover:text-black"
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
    <div className="grid max-w-[1400px] auto-cols-fr grid-cols-1 items-center gap-6 text-offwhite xl:grid-cols-2">
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
