import React from "react";
import styles from "@/styles/404.module.css";
import Title from "@/components/Title";
import Image from "next/image";
import Content from "@/components/Content";
import Button from "@/components/Button";
import FloatingIcon from "@/components/FloatingIcon";

export default function NotFountError() {
    return (
        <section className={styles.container} id="hero">
            <div className={styles.clipPathBorder}></div>
            <Image
                className={styles.heroImage}
                src="/hero.png"
                alt="hero image"
                priority
                width={900}
                height={900}
            />
            <Image
                className={styles.heroImageMagic}
                src="/hero-magic.webp"
                alt="hero image magic"
                priority
                width={900}
                height={900}
            />

            <div className={styles.contentContainer}>
                <Title>404</Title>
                <Content center>
                    Oops looks like you tried to access a page that doesn&apos;t
                    exist
                </Content>
                <div>
                    <Button
                        title="Click to see the current events"
                        href="/"
                        icon={
                            <svg
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M5 5h2v2H5V5zm4 4H7V7h2v2zm2 2H9V9h2v2zm2 0h-2v2H9v2H7v2H5v2h2v-2h2v-2h2v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2zm2-2v2h-2V9h2zm2-2v2h-2V7h2zm0 0V5h2v2h-2z"
                                    fill="currentColor"
                                />
                            </svg>
                        }
                    >
                        get out of here
                    </Button>
                </div>
            </div>
            <FloatingIcon
                small
                bottom="20px"
                right="0px"
                extraStyles={styles.floatingIcon}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M5 3h14v2H5V3zm0 16H3V5h2v14zm14 0v2H5v-2h14zm0 0h2V5h-2v14zM10 8H8v2h2V8zm4 0h2v2h-2V8zm-5 8v-2h6v2h2v-2h-2v-2H9v2H7v2h2z"
                        fill="#dbff29ff"
                    />
                </svg>
            </FloatingIcon>

            <p className={styles.decorText}>
                2025 — For developers, from developers
            </p>
        </section>
    );
}
