import http from "./httpCommon.server";

export const getEvents = async () => {
    try {
        const res = await http.get('/events/');
        // Filters out events that have already occurred
        const upcoming = res.data.filter(
            event => new Date(event.start_date) > new Date()
                  ||(new Date(event.start_date) === new Date())
        );
        /*
            GET request to /events to retrieve all events.
            
            Filters out events that have yet to occur, sorts the events by start date. Displays the past 6 events.
        */
        const past = res.data.filter(
            event => new Date(event.start_date) < new Date()
        ).sort(
            (a, b) => new Date(b.start_date) - new Date(a.start_date)
        ).slice(0, 8);
        return {
            status: res.status,
            upcoming: upcoming,
            past: past
        };
    } catch (error) {
        console.log(error)
    }
}