import Link from "next/link";
import React from "react";
import styles from "@/styles/Button.module.css";

export default function Button({
    children,
    href,
    icon,
    title,
    onClick,
}: {
    children: React.ReactNode;
    href?: string;
    icon?: React.ReactNode;
    title?: string;
    onClick?: () => void;
}) {
    if (href) {
        return (
            <Link href={href} className={styles.button} title={title}>
                {children}
                {icon}
            </Link>
        );
    } else {
        return (
            <button className={styles.button} title={title} onClick={onClick}>
                {children}
                {icon}
            </button>
        );
    }
}
