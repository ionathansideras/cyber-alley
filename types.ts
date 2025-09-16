type Event = {
    admin_id: number;
    admins_nickname: string;
    attendees: number[];
    begins_at: string;
    created_at: string;
    deleted: boolean;
    description: string;
    id: number;
    image: string;
    link: string;
    title: string;
    topics: string[];
};

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

export type { Event, User };
