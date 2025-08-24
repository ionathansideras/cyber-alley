import React from "react";
import styles from "@/styles/Title.module.css";

export default function Title({
    children,
    black,
    center,
}: {
    children: React.ReactNode;
    black?: boolean;
    center?: boolean;
}) {
    return (
        <h2
            className={`${styles.title} ${black ? styles.blackColor : ""} ${
                center ? styles.center : ""
            }`}
        >
            {children}
        </h2>
    );
}
