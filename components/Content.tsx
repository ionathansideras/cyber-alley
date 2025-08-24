import React from "react";
import styles from "@/styles/Content.module.css";

export default function Content({
    children,
    center,
    forNewSection,
}: {
    children: React.ReactNode;
    center?: boolean;
    forNewSection?: boolean;
}) {
    return (
        <p
            className={`${styles.content} ${center ? styles.center : ""} ${
                forNewSection ? styles.forNewSection : ""
            }`}
        >
            {children}
        </p>
    );
}
