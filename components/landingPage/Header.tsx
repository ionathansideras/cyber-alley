"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/landingPage/Header.module.css";
import Button from "../Button";

export default function Header() {
    const [onTop, setOnTop] = useState(true);
    const [showHeader, setShowHeader] = useState(true);
    const [openMenu, setOpenMenu] = useState(false);
    const prevScrollYRef = useRef(0);

    useEffect(() => {
        function handleScroll() {
            const scrollY = window.scrollY;

            if (scrollY === 0) {
                setOnTop(true);
            } else if (scrollY > 10) {
                setOnTop(false);
            }

            if (scrollY < prevScrollYRef.current) {
                setShowHeader(true);
            } else {
                setShowHeader(false);
            }

            prevScrollYRef.current = scrollY;
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`${styles.header} ${!onTop ? styles.scrolled : ""} ${
                !showHeader ? styles.hidden : ""
            }`}
        >
            <div className={styles.brand}>
                <h1>cyber alley</h1>
            </div>
            <nav className={styles.nav}>
                <div
                    className={`${styles.hamburgerMenu} ${
                        openMenu ? styles.open : ""
                    }`}
                    onClick={() => setOpenMenu((prev) => !prev)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <Button
                    href="/events"
                    icon={
                        <svg
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            {" "}
                            <path
                                d="M4 11v2h12v2h2v-2h2v-2h-2V9h-2v2H4zm10-4h2v2h-2V7zm0 0h-2V5h2v2zm0 10h2v-2h-2v2zm0 0h-2v2h2v-2z"
                                fill="currentColor"
                            />{" "}
                        </svg>
                    }
                >
                    start
                </Button>
            </nav>
        </header>
    );
}
