"use client";
import { useEffect, useRef, useState } from "react";
import styles from "@/styles/Header.module.css";
import Button from "./Button";
import HamburgerMenu from "./HamburgerMenu";

export default function Header({
    forLandingPage,
}: {
    forLandingPage: boolean;
}) {
    const headerRef = useRef<HTMLElement | null>(null);
    const prevScrolledAmountRef = useRef(0);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const scrolledAmount = window.scrollY;
            const buffer = 100;
            const headerClassList = headerRef.current?.classList;

            if (!headerClassList) return;

            if (scrolledAmount === 0 && forLandingPage) {
                headerClassList.remove(styles.headerHidden);
                headerClassList.remove(styles.headerFilled);
            } else if (scrolledAmount > 10 && forLandingPage) {
                headerClassList.add(styles.headerFilled);
            }

            if (scrolledAmount > prevScrolledAmountRef.current + buffer) {
                prevScrolledAmountRef.current = scrolledAmount;
                headerClassList.add(styles.headerHidden);
                setOpen(false);
            } else if (scrolledAmount < prevScrolledAmountRef.current) {
                prevScrolledAmountRef.current = scrolledAmount;
                headerClassList.remove(styles.headerHidden);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [forLandingPage]);

    useEffect(() => {
        const headerClassList = headerRef.current?.classList;

        if (!headerClassList) return;

        if (!headerClassList.contains(styles.headerFilled) && open) {
            headerClassList.add(styles.headerFilled);
        } else if (
            headerClassList.contains(styles.headerFilled) &&
            !open &&
            window.scrollY === 0 &&
            forLandingPage
        ) {
            headerClassList.remove(styles.headerFilled);
        }
    }, [open]);

    return (
        <header
            ref={headerRef}
            className={`${styles.header} ${
                forLandingPage ? styles.forLandingPage : styles.headerFilled
            }`}
        >
            <div className={styles.brand}>
                <h1>cyber alley</h1>
            </div>
            <nav className={styles.nav}>
                {!forLandingPage && (
                    <Button
                        title={`Click to see ${
                            forLandingPage
                                ? "the current events"
                                : "your profile"
                        }`}
                        href={"/events/create"}
                        icon={
                            <svg
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d={
                                        "M3 3h14v14H3V3zm12 12V5H5v10h10zm-8 6v-2h12V7h2v14H7zm4-12h2v2h-2v2H9v-2H7V9h2V7h2v2z"
                                    }
                                    fill="currentColor"
                                />
                            </svg>
                        }
                    >
                        create event
                    </Button>
                )}

                <Button
                    title={`Click to see ${
                        forLandingPage ? "the current events" : "your profile"
                    }`}
                    href={forLandingPage ? "/events" : "/me"}
                    icon={
                        <svg
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d={
                                    forLandingPage
                                        ? "M4 11v2h12v2h2v-2h2v-2h-2V9h-2v2H4zm10-4h2v2h-2V7zm0 0h-2V5h2v2zm0 10h2v-2h-2v2zm0 0h-2v2h2v-2z"
                                        : "M10 2h4v4h-4V2zM7 7h10v2h-2v13h-2v-6h-2v6H9V9H7V7zM5 5v2h2V5H5zm0 0H3V3h2v2zm14 0v2h-2V5h2zm0 0V3h2v2h-2z"
                                }
                                fill="currentColor"
                            />
                        </svg>
                    }
                >
                    {forLandingPage ? "start" : "profile"}
                </Button>
                <HamburgerMenu open={open} setOpen={setOpen} />
            </nav>
        </header>
    );
}
