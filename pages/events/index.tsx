import React from "react";
import Title from "@/components/Title";
import type { Events, Event } from "@/types";
import type { GetServerSidePropsContext } from "next";
import Link from "next/link";

export default function Events({ events }: Events) {
    return (
        <div className="under-development">
            <Title>page under development</Title>
            {events.map((event) => (
                <p key={event.id}>{event.name}</p>
            ))}
            <Link href={"/events?page=1"}>1</Link>
            <Link href={"/events?page=2"}>2</Link>
        </div>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const page = Number(context.query.page) || 1;

    let content: Event[] = [];

    if (page === 1) {
        content = [
            { id: 1, name: "test1" },
            { id: 2, name: "test2" },
        ];
    } else if (page === 2) {
        content = [
            { id: 3, name: "test3" },
            { id: 4, name: "test4" },
        ];
    } else {
        content = [];
    }

    if (content.length <= 0) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            events: content,
        },
    };
}
