import http from "./httpCommon";

export const getPastEvents = async () => {
    /*
        GET request to /events to retrieve all events.
        
        Filters out events that have yet to occur, sorts the events by start date. Displays the past 6 events.
    */

    try {
        const res = await http.get('/events');
        const data = res.data.filter(
            event => (new Date((event.start_date) < new Date())) 
        ).sort(
            (a, b) => new Date(b.start_date) - new Date(a.start_date)
        ).slice(0, 6);
        return {
            status: res.status,
            data: data
        };
    } catch (error) {
        console.log(error)
    }
}

export const getUpcomingEvents = async () => {
    try {
        const res = await http.get('/events');
        const data = res.data.filter(
            event => new Date(event.start_date) > new Date()
                  ||(new Date(event.start_date) === new Date())
        );
        return {
            status: res.status,
            data: data
        };
    } catch (error) {
        console.log(error)
    }
}