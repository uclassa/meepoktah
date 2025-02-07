import Emoji from "../Commons/Emojis";
import Button from "../Commons/Button";
import { useContext } from "react";
import { envContext } from "../Commons/Contexts";
import "./Events.scss";

export default function EventsSection({
    upcomingEvents,
    pastEvents,
}: {
    upcomingEvents: Object[];
    pastEvents: Object[];
}) {
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
            {upcomingEvents?.length > 0 ? (
                <EventList events={upcomingEvents} />
            ) : (
                <p className="text-center leading-[1.3]">
                    No upcoming events for now. Check out our
                    <a
                        className="bg-red p-[1px] rounded-[5px] m-1 text-offwhite transition duration-200 ease hover:bg-gold hover:text-black cursor-pointer"
                        href={env.VITE_INSTAGRAM_LINK}
                        target="_blank"
                    >
                        Instagram
                    </a>
                    to stay up to date with future events!
                </p>
            )}
            <h2> A couple of our past events</h2>
            {pastEvents?.length > 0 && <EventList events={pastEvents} />}
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
                    >
                        Stalk Us!
                    </a>{" "}
                </Button>
            </div>
        </div>
    );
}

const EventList = ({ events }) => (
    <div className="text-offwhite grid auto-cols-fr grid-cols-1 xl:grid-cols-2 gap-6 max-w-[1400px] items-center">
        {events.map(EventCard)}
    </div>
);

function EventCard(data, index) {
    const imageLink =
        data.image == null ? "/images/eventDefault.jpg" : data.image;

    const date = new Date(data.start_date);

    return (
        <div key={index} className="event-card">
            <img
                className="w-full opacity-0.45 object-cover"
                src={imageLink}
                alt="Picture of event"
            />
            <a className="event-text-wrapper" href={data.link} target="_blank">
                <p className="">
                    {" "}
                    {date.toDateString()} | {data.venue}
                </p>
                <h3 className="text-2xl md:text-5xl">{data.title}</h3>
                {date > new Date() && <p>{data.description}</p>}
            </a>
        </div>
    );
}
