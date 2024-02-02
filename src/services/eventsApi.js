import http from "./httpCommon";

export const getUpcomingEvents = async () => {
    try {
        const res = await http.get('/events');
        console.log(res)
        return res;
    } catch (error) {
        console.log(error)
    }
}

export const getPastEvents = async () => {
    try {
        const res = await http.get('/events');
        return res;
    } catch (error) {
        console.log(error)
    }
}