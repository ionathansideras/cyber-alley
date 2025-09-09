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
    aTag,
}: {
    children: React.ReactNode;
    href?: string;
    icon?: React.ReactNode;
    title?: string;
    onClick?: () => void;
    loading?: boolean;
    aTag?: boolean;
}) {
    if (href) {
        if (aTag) {
            // plain <a>
            return (
                <a
                    href={href}
                    className={styles.button}
                    title={title}
                    onClick={onClick}
                >
                    {loading ? (
                        <span className={styles.loader}></span>
                    ) : (
                        <>
                            {children}
                            {icon}
                        </>
                    )}
                </a>
            );
        }
        // Next.js <Link>
        return (
            <Link
                href={href}
                className={styles.button}
                title={title}
                onClick={onClick}
            >
                {loading ? (
                    <span className={styles.loader}></span>
                ) : (
                    <>
                        {children}
                        {icon}
                    </>
                )}
            </Link>
        );
    }

    // fallback <button>
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
