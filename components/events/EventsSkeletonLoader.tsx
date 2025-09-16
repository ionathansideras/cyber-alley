import React from "react";
import styles from "@/styles/events/EventsSkeletonLoader.module.css";

export default function EventsSkeletonLoader() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.eventPreviewContainer}>
                <article></article>
            </div>
        </section>
    );
}
