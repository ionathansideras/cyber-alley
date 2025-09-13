import React from "react";
import Title from "@/components/Title";
import type { Events } from "@/types";
import type { GetServerSidePropsContext } from "next";
import { supabase } from "@/lib/supabaseConnection";
import EventPreview from "@/components/events/EventPreview";
import styles from "@/styles/events/Events.module.css";
import Content from "@/components/Content";
import EventFilters from "@/components/events/EventFilters";

export default function Events({ events }: Events) {
    return (
        <main className={styles.eventsContainer}>
            <Title>page under development</Title>
            <Content>Browse through out our events collection!</Content>
            <div className={styles.eventsContent}>
                <div className={styles.eventFilters}>
                    <EventFilters />
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
    const filter = context.query.filter;
    let events: Event[] = [];

    const amount = 10;
    const startIndex = page * 10 - amount;
    const stopIndex = page * 10;

    if (!filter || filter === "default") {
        const { data, error } = await supabase
            .from("events")
            .select("*")
            .range(startIndex, stopIndex - 1);

        events = data as Event[];

        if (error) {
            return {
                props: {
                    events: [],
                },
            };
        }
    } else if (filter === "newFirst") {
        const { data, error } = await supabase
            .from("events")
            .select("*")
            .order("created_at", { ascending: false })
            .range(startIndex, stopIndex - 1);

        events = data as Event[];

        if (error) {
            return {
                props: {
                    events: [],
                },
            };
        }
    } else if (filter === "oldFirst") {
        const { data, error } = await supabase
            .from("events")
            .select("*")
            .order("created_at", { ascending: true })
            .range(startIndex, stopIndex - 1);

        events = data as Event[];

        if (error) {
            return {
                props: {
                    events: [],
                },
            };
        }
    } else if (filter === "mostFamous") {
        const { data, error } = await supabase
            .from("events")
            .select("*")
            .order("attendees_count", { ascending: false })
            .range(startIndex, stopIndex - 1);

        if (error) {
            return { props: { events: [] } };
        }

        events = data as Event[];
    }

    return {
        props: {
            events: events,
        },
    };
}
