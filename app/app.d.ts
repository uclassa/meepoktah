declare global {
    namespace App {
        interface Event {
            start_date: string;
            image: string | null;
            venue: string;
            title: string;
            description: string;
            link: string | null;
            [key: string]: unknown;
        }

        interface Events {
            upcoming: Event[];
            past: Event[];
        }

        interface ExcoMemberData {
            id: number;
            name: string;
            role: string;
            major: string;
            year: string;
            photo: string;
            alt_photo: string | null;
            alt: string;
        }
    }
}

export default {};
