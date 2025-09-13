import React from "react";
import type { Event } from "@/types";
import styles from "@/styles/events/EventPreview.module.css";
import Image from "next/image";
import Button from "../Button";
import Gradient from "../Gradient";

function formatDate(dateString: string) {
    return new Date(dateString).toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
}

export default function EventPreview({ event }: { event: Event }) {
    return (
        <section className={styles.wrapper}>
            <span>{formatDate(event.begins_at)}</span>

            <div className={styles.eventPreviewContainer}>
                <article>
                    <Gradient top="-150px" left="-100px" />
                    <Image
                        src="/robot-img.png"
                        width={200}
                        height={200}
                        alt="event image"
                        className={styles.image}
                    />
                    <div className={styles.info}>
                        <h4>{event.title}</h4>
                        <p>{event.description}</p>

                        <div className={styles.join}>
                            <p>{event.attendees.length} has joined</p>
                            <Button href={`/events/${event.id}`}>
                                Take a look
                            </Button>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}
