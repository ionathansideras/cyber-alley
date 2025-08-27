"use client";
import { useEffect, useRef } from "react";
import styles from "@/styles/Header.module.css";
import Button from "./Button";

export default function Header() {
    const headerRef = useRef<HTMLHeadingElement | null>(null);
    const prevScrolledAmountRef = useRef(0);

    useEffect(() => {
        function handleScroll() {
            const scrolledAmount = window.scrollY;
            const buffer = 100;

            if (scrolledAmount === 0) {
                headerRef.current?.classList.remove("headerHidden");
                headerRef.current?.classList.remove("headerFilled");
            } else if (scrolledAmount > 10) {
                headerRef.current?.classList.add("headerFilled");
            }

            if (scrolledAmount > prevScrolledAmountRef.current + buffer) {
                prevScrolledAmountRef.current = scrolledAmount;
                headerRef.current?.classList.add("headerHidden");
            } else if (scrolledAmount < prevScrolledAmountRef.current) {
                prevScrolledAmountRef.current = scrolledAmount;
                headerRef.current?.classList.remove("headerHidden");
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function handleOpenHamburger(e: React.MouseEvent<HTMLDivElement>) {
        e.currentTarget.classList.toggle("hamburgerOpen");
    }

    return (
        <header ref={headerRef} className={`${styles.header}`}>
            <div className={styles.brand}>
                <h1>cyber alley</h1>
            </div>
            <nav className={styles.nav}>
                <div
                    className={styles.hamburgerMenu}
                    onClick={handleOpenHamburger}
                    title="Click to toggle the menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <Button
                    title="Click to see the current events"
                    href="/events"
                    icon={
                        <svg
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M4 11v2h12v2h2v-2h2v-2h-2V9h-2v2H4zm10-4h2v2h-2V7zm0 0h-2V5h2v2zm0 10h2v-2h-2v2zm0 0h-2v2h2v-2z"
                                fill="currentColor"
                            />
                        </svg>
                    }
                >
                    start
                </Button>
            </nav>
        </header>
    );
}
