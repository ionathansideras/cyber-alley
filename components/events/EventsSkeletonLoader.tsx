import React, { memo } from "react";
import styles from "@/styles/events/EventsSkeletonLoader.module.css";

function EventsSkeletonLoader() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.eventPreviewContainer}>
                <article></article>
            </div>
        </section>
    );
}

export default memo(EventsSkeletonLoader);
