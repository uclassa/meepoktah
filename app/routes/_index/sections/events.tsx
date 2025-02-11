import Emoji from "~/components/Emoji";
import Button from "~/components/Button";
import { useContext, type ReactNode } from "react";
import { envContext } from "~/services/Contexts";
import type { Events, Event } from "~/services/eventsApi.server";

export default function EventsSection({ upcoming, past }: Events) {
    const env = useContext(envContext);

    return (
        <div
            id="events"
            className="flex w-full flex-col items-center px-5 pb-[50px] tracking-[1px] text-darkblue sm:px-10 sm:text-2xl md:-mt-12 lg:px-20 xl:mt-0"
        >
            <h1 className="mt-8 mb-2 text-2xl sm:text-[2.5rem]">Our Events</h1>
            <p className="text-center">
                Watch this space for updates on future events!
            </p>

            <EventList
                heading={
                    <>
                        <Emoji symbol="🙌" /> Upcoming Events
                    </>
                }
                events={upcoming}
            />
            {upcoming.length === 0 && (
                <p className="py-3 text-center leading-[1.3]">
                    No upcoming events for now. Check out our
                    <a
                        className="m-1 cursor-pointer rounded-[5px] bg-red p-[1px] text-offwhite transition duration-200 hover:bg-gold hover:text-black"
                        href={env.VITE_INSTAGRAM_LINK}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Instagram
                    </a>
                    to stay up to date with future events!
                </p>
            )}
            <EventList heading="A couple of our past events" events={past} />
            <div className="flex flex-col items-center">
                <p className="py-3 text-center leading-[1.3]">
                    Find us on Instagram to keep up to date with all our
                    happenings! <Emoji symbol="👇" />
                </p>
                <Button
                    fontBig={true}
                    href={env.VITE_INSTAGRAM_LINK}
                    target="_blank"
                    rel="noreferrer"
                >
                    Stalk Us!
                </Button>
            </div>
        </div>
    );
}

const EventList = ({
    heading,
    events,
}: {
    heading: ReactNode;
    events: Event[];
}) => (
    <div className="flex w-full flex-col items-center py-5">
        <h2 className="self-start text-2xl sm:text-[2rem]">{heading}</h2>
        {events.length > 0 && (
            <div className="mt-4 grid max-w-[1400px] auto-cols-fr grid-cols-1 items-center gap-6 text-offwhite xl:grid-cols-2">
                {events.map(EventCard)}
            </div>
        )}
    </div>
);

function EventCard(props: Event, index: number) {
    const imageLink =
        props?.image == null ? "/images/eventDefault.jpg" : props.image;

    const date = new Date(props.start_date);

    return (
        <div
            key={index}
            className="relative grid h-[150px] w-[350px] max-w-full auto-cols-fr auto-rows-fr overflow-hidden rounded-[15px] border-1 border-solid border-darkblue bg-[#656565] shadow-[0px_15px_24px_#656565] transition duration-200 hover:scale-103 sm:h-[250px] sm:w-[500px]"
        >
            <img
                className="col-end-1 row-end-1 h-full w-full object-cover object-top"
                src={imageLink}
                alt="Picture of event"
            />
            <a
                className="col-end-1 row-end-1 flex h-full w-full flex-col bg-[rgba(0,0,0,0.5)] p-[10px] transition duration-200 hover:opacity-0 sm:p-[25px]"
                href={props.link ?? undefined}
                target="_blank"
                rel="noreferrer"
            >
                <p
                    className="max-w-[550px] overflow-hidden tracking-[1px] sm:mb-3 sm:text-2xl"
                    suppressHydrationWarning={true}
                >
                    {date.toDateString()} | {props.venue}
                </p>
                <h3 className="overflow-hidden text-2xl break-words sm:text-5xl">
                    {props.title}
                </h3>
                {date.getTime() > new Date().getTime() && (
                    <p>{props.description}</p>
                )}
            </a>
        </div>
    );
}
