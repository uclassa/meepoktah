import http from "./httpCommon";

export const getUpcomingEvents = async () => {
    try {
        const res = await http.get('/upcomingEvents');
        return res;
    } catch (error) {
        console.log(error)
    }
}

export const getPastEvents = async () => {
    try {
        const res = await http.get('/pastEvents');
        return res;
    } catch (error) {
        console.log(error)
    }
}