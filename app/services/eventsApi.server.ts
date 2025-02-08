import http from "./httpCommon.server";
import { AxiosError } from "axios";

export interface Events {
    upcoming: Event[];
    past: Event[];
}

export interface Event {
    start_date: string;
    image: string | null;
    venue: string;
    title: string;
    description: string;
    link: string | null;
    [key: string]: unknown;
}

export function reportError(e: AxiosError) {
    console.error(
        `Request to ${e.config?.baseURL}${e.config?.url} failed: ${e.code}`,
    );
}

export const getEvents = async (): Promise<Events> => {
    let res: { data: Event[]; status: number };
    try {
        res = await http.get("/events/");
    } catch (error) {
        if (error instanceof AxiosError) {
            reportError(error);
            return {
                upcoming: [],
                past: [],
            };
        } else throw error;
    }

    if (res.status !== 200) {
        console.log(res);
        return {
            upcoming: [],
            past: [],
        };
    }
    // Filters out events that have already occurred
    const upcoming = res.data.filter(
        (event) => new Date(event.start_date).getTime() >= new Date().getTime(),
    );
    /*
        GET request to /events to retrieve all events.
        
        Filters out events that have yet to occur, sorts the events by start date. Displays the past 6 events.
    */
    const past = res.data
        .filter(
            (event) =>
                new Date(event.start_date).getTime() < new Date().getTime(),
        )
        .slice(0, 8);
    return {
        upcoming: upcoming,
        past: past,
    };
};
