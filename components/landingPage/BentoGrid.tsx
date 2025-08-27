import Image from "next/image";
import Button from "../Button";
import FloatingIcon from "../FloatingIcon";
import styles from "@/styles/landingPage/BentoGrid.module.css";
import Title from "../Title";
import Content from "../Content";

export default function BentoGrid() {
    return (
        <div className={styles.gridContainer}>
            <article className={styles.article1}>
                <div className={styles.articleContainer}>
                    <div className={styles.article1Image}>
                        <Image
                            className={styles.robotImage}
                            src="/robot-img.webp"
                            width={500}
                            height={600}
                            alt="robot image"
                        />
                    </div>
                    <div className={styles.article1Content}>
                        <Title>Connect Developers</Title>
                        <Content>
                            Join a community of makers and innovators. Discover
                            and participate in events that spark collaboration,
                            inspire new skills, and grow your network in tech.
                        </Content>
                        <Button
                            title="Click to see the current events"
                            href="/events"
                            icon={
                                <svg
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    {" "}
                                    <path
                                        d="M5 3H3v18h18V3H5zm14 2v14H5V5h14zm-2 2H7v2h10V7zM7 11h10v2H7v-2zm7 4H7v2h7v-2z"
                                        fill="currentColor"
                                    />{" "}
                                </svg>
                            }
                        >
                            Explore Events
                        </Button>
                    </div>
                </div>
            </article>
            <article className={styles.article2}>
                <div className={styles.articleContainer}>
                    <Image
                        className={styles.article2Image}
                        src="/grid.svg"
                        width={500}
                        height={600}
                        alt="grid background"
                    />
                    <div className={styles.article2Content}>
                        <Title>Host Your Tech Event</Title>
                        <Content>
                            Spin up meetups, hack nights, and workshops in
                            minutes. Publish your agenda, manage RSVPs, and put
                            your community on the map with Cyber Alley.
                        </Content>
                        <Button
                            title="Click to create a new event"
                            href="/events/create"
                            icon={
                                <svg
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    {" "}
                                    <path
                                        d="M16 4h-6v2H8v2H4v2H2v2H0v6h2v2h20v-2h2v-6h-2v-2h-2V8h-2V6h-2V4zm0 2v2h2v4h4v6H2v-6h2v-2h4V8h2V6h6zm-6 6H8v2h2v2h2v-2h2v-2h2v-2h-2v2h-2v2h-2v-2z"
                                        fill="currentColor"
                                    />{" "}
                                </svg>
                            }
                        >
                            create event
                        </Button>
                    </div>
                </div>
            </article>
            <article className={styles.article3}>
                <div className={styles.articleContainer}>
                    <div className={styles.article3Content}>
                        <Title black center>
                            Cyber Alley
                        </Title>
                        <FloatingIcon large top="-5px" left="20px">
                            <svg
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                {" "}
                                <path
                                    d="M5 2h2v12h3v3h7v-7h-3V2h8v8h-3v9h-9v3H2v-8h3V2zm15 6V4h-4v4h4zM8 19v-3H4v4h4v-1z"
                                    fill="currentColor"
                                />{" "}
                            </svg>
                        </FloatingIcon>
                        <FloatingIcon large bottom="-2px" right="20px">
                            <svg
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                {" "}
                                <path
                                    d="M2 2h8v8H7v12H5V10H2V2zm2 2v4h4V4H4zm8 1h7.09v9H22v8h-8v-8h3.09V7H12V5zm4 11v4h4v-4h-4z"
                                    fill="currentColor"
                                />{" "}
                            </svg>
                        </FloatingIcon>
                    </div>
                </div>
            </article>
        </div>
    );
}
