import React from "react";
import styles from "@/styles/Content.module.css";

export default function Content({ children }: { children: React.ReactNode }) {
    return <p className={styles.content}>{children}</p>;
}
