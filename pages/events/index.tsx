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
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setLoading(false);
    }, [router]);

    return (
        <main className={styles.eventsContainer}>
            <Title>page under development</Title>
            <Content>Browse through out our events collection!</Content>
            <div className={styles.eventsContent}>
                <div className={styles.eventFilters}>
                    <EventFilters setLoading={setLoading} />
                </div>
                <div className={styles.eventList}>
                    {events.length === 0 && (
                        <Content center>No results found</Content>
                    )}

                    {loading ? (
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
                        setLoading={setLoading}
                    />
                </div>
            </div>
        </main>
    );
}

function returnEmptyProps(page: number, amountPerPage: number) {
    return {
        props: {
            events: [],
            page: page,
            totalEvents: 0,
            amountPerPage,
        },
    };
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const page = Number(context.query.page) || 1;
    const filter = context.query.filter;
    const keywords = (context.query.keywords || "") as string;
    const keywordsReduced =
        keywords.length > 50 ? keywords.slice(0, 50) : keywords;
    // split by comma, trim spaces, remove empties, normalize case
    const keywordsArray = keywordsReduced
        .split(",")
        .map((word) => word.trim().toLowerCase())
        .filter(Boolean);

    let events: Event[] = [];

    let totalEventsQuery = supabase
        .from("events")
        .select("*", { count: "exact", head: true })
        .gte("begins_at", new Date().toISOString());

    if (totalEventsQuery && keywordsArray.length > 0) {
        totalEventsQuery = totalEventsQuery.overlaps("topics", keywordsArray);
    }

    const { count: totalEvents } = await totalEventsQuery;

    const amountPerPage = 10;
    const startIndex = page * 10 - amountPerPage;
    const stopIndex = page * 10;

    // redirect to page 1 if the current page is not supported in the new data that we get
    if (
        (totalEvents! > 0 || totalEvents === 0) &&
        Math.ceil(totalEvents! / amountPerPage) < page &&
        page != 1
    ) {
        return {
            redirect: {
                destination: `/events?page=1${
                    context.query.filter
                        ? "&filter=" + context.query.filter
                        : ""
                }${
                    context.query.keywords
                        ? "&keywords=" + context.query.keywords
                        : ""
                }`,
                permanent: false,
            },
        };
    }

    let query = supabase.from("events").select("*");

    if (!filter || filter === "default") {
        query = query
            .gte("begins_at", new Date().toISOString())
            .range(startIndex, stopIndex - 1);
    } else if (filter === "newFirst") {
        query = query
            .gte("begins_at", new Date().toISOString())
            .order("created_at", { ascending: false })
            .range(startIndex, stopIndex - 1);
    } else if (filter === "oldFirst") {
        query = query
            .gte("begins_at", new Date().toISOString())
            .order("created_at", { ascending: true })
            .range(startIndex, stopIndex - 1);
    } else if (filter === "mostFamous") {
        query = query
            .gte("begins_at", new Date().toISOString())
            .order("attendees_count", { ascending: false })
            .range(startIndex, stopIndex - 1);
    } else if (filter === "AToZ") {
        query = query
            .gte("begins_at", new Date().toISOString())
            .order("title", { ascending: true })
            .range(startIndex, stopIndex - 1);
    } else if (filter === "ZToA") {
        query = query
            .gte("begins_at", new Date().toISOString())
            .order("title", { ascending: false })
            .range(startIndex, stopIndex - 1);
    }

    if (query && keywordsArray.length > 0) {
        query.overlaps("topics", keywordsArray);
    }

    const { data, error } = await query;

    if (error) {
        returnEmptyProps(page, amountPerPage);
    }

    events = data as Event[];

    return {
        props: {
            events: events,
            page: page,
            totalEvents: totalEvents,
            amountPerPage,
        },
    };
}
