import Link from "next/link";
import React from "react";
import styles from "@/styles/Button.module.css";

export default function Button({
    children,
    href,
    icon,
}: {
    children: React.ReactNode;
    href?: string;
    icon?: React.ReactNode;
}) {
    if (href) {
        return (
            <Link href={href} className={styles.button}>
                {children}
                {icon}
            </Link>
        );
    } else {
        return (
            <button className={styles.button}>
                {children}
                {icon}
            </button>
        );
    }
}
