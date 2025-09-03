import Link from "next/link";
import React from "react";
import styles from "@/styles/Button.module.css";

export default function Button({
    children,
    href,
    icon,
    title,
    onClick,
    loading,
}: {
    children: React.ReactNode;
    href?: string;
    icon?: React.ReactNode;
    title?: string;
    onClick?: () => void;
    loading?: boolean;
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
            <button
                className={styles.button}
                type="button"
                title={title}
                onClick={onClick}
            >
                {loading ? (
                    <span className={styles.loader}></span>
                ) : (
                    <>
                        {children} {icon}
                    </>
                )}
            </button>
        );
    }
}
