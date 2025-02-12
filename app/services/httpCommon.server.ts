import axios, { AxiosError, type AxiosInstance } from "axios";
/*
  Axios instance where we will call HTTP methods from.
  Import into service file before writing request functions.
*/
class APIClient {
    constructor() {
        this.axios = axios.create({
            baseURL: process.env.VITE_DJANGO_API ?? "http://localhost:8000",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            timeout: 3000, // this value has to be less than remix's timeout to avoid error
        });
    }

    private reportError(e: AxiosError) {
        console.error(
            `Request to ${e.config?.baseURL}${e.config?.url} failed: ${e.code}`,
        );
    }

    public async getEvents() {
        let res: { data: App.Event[]; status: number };
        try {
            res = await this.axios.get("/events/");
        } catch (error) {
            if (axios.isAxiosError(error)) {
                this.reportError(error);
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
            (event) =>
                new Date(event.start_date).getTime() >= new Date().getTime(),
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
    }

    public async getExco() {
        return this.axios
            .get("/exco/")
            .then((res) => res.data)
            .catch((e) => this.reportError(e) ?? []);
    }

    private axios: AxiosInstance;
}

export default new APIClient();
