import React from "react";
import styles from "@/styles/Title.module.css";

export default function Title({ children }: { children: React.ReactNode }) {
    return <h2 className={styles.title}>{children}</h2>;
}
