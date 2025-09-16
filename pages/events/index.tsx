import React, { useState, useEffect } from "react";
import Title from "@/components/Title";
import type { Event } from "@/types";
import type { GetServerSidePropsContext } from "next";
import { supabase } from "@/lib/supabaseConnection";
import EventPreview from "@/components/events/EventPreview";
import styles from "@/styles/events/Events.module.css";
import Content from "@/components/Content";
import EventFilters from "@/components/events/EventFilters";
import Pagination from "@/components/events/Pagination";
import { useRouter } from "next/router";
import EventsSkeletonLoader from "@/components/events/EventsSkeletonLoader";

export default function Events({
    events,
    page,
    totalEvents,
    amountPerPage,
}: {
    events: Event[];
    page: number;
    totalEvents: number;
    amountPerPage: number;
}) {
    const [loader, setLoader] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setLoader(false);
    }, [router]);

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

                    {loader ? (
                        <>
                            {Array.from(Array(10)).map((_, index) => (
                                <EventsSkeletonLoader key={index} />
                            ))}
                        </>
                    ) : (
                        <>
                            {events.map((event) => (
                                <EventPreview key={event.id} event={event} />
                            ))}
                        </>
                    )}

                    <Pagination
                        page={page}
                        totalEvents={totalEvents}
                        amountPerPage={amountPerPage}
                        setLoader={setLoader}
                    />
                </div>
            </div>
        </main>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const page = Number(context.query.page) || 1;
    const filter = context.query.filter;
    let events: Event[] = [];
    const { count: totalEvents } = await supabase
        .from("events")
        .select("*", { count: "exact", head: true });

    const amountPerPage = 10;
    const startIndex = page * 10 - amountPerPage;
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
                    page: page,
                    totalEvents: 0,
                    amountPerPage,
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
                    page: page,
                    totalEvents: 0,
                    amountPerPage,
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
                    page: page,
                    totalEvents: 0,
                    amountPerPage,
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
            return {
                props: {
                    events: [],
                    page: page,
                    totalEvents: 0,
                    amountPerPage,
                },
            };
        }

        events = data as Event[];
    }

    return {
        props: {
            events: events,
            page: page,
            totalEvents: totalEvents,
            amountPerPage,
        },
    };
}
