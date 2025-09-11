type Event = { id: number; name: string };

type Events = { events: Event[] };

type User = {
    id: string;
    nickname: string;
    userId: string;
    createdAt: string;
    email: string;
    picture: string;
    events_created_ids: null | string[];
    events_joined_ids: null | string[];
};

export type { Event, Events, User };
