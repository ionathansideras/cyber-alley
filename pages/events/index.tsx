import React from "react";
import Title from "@/components/Title";
import type { Events } from "@/types";
import type { GetServerSidePropsContext } from "next";
import Link from "next/link";
import { supabase } from "@/lib/supabaseConnection";
import EventPreview from "@/components/events/EventPreview";
import styles from "@/styles/events/Events.module.css";
import Content from "@/components/Content";

export default function Events({ events }: Events) {
    return (
        <main className={styles.eventsContainer}>
            <Title>page under development</Title>
            <Content>Browse through out our events collection!</Content>
            <div className={styles.eventsContent}>
                <div className={styles.eventFilters}>
                    <Content>filters</Content>
                </div>
                <div className={styles.eventList}>
                    {events.length === 0 && <p>No results found</p>}
                    {events.map((event) => (
                        <EventPreview key={event.id} event={event} />
                    ))}
                </div>
            </div>
        </main>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const page = Number(context.query.page) || 1;

    const amount = 10;
    const startIndex = page * 10 - amount;
    const stopIndex = page * 10;

    const { data: events, error } = await supabase
        .from("events")
        .select("*")
        .range(startIndex, stopIndex);

    if (!events || events.length <= 0 || error) {
        return {
            props: {
                events: [],
            },
        };
    }

    return {
        props: {
            events: events,
        },
    };
}
