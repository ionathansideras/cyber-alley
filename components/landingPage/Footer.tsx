import Image from "next/image";
import styles from "@/styles/landingPage/Footer.module.css";
import Title from "../Title";
import Link from "next/link";
import Content from "../Content";

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <Image
                className={styles.coderImage}
                src={"/coder.png"}
                width={400}
                height={400}
                alt="coder image"
            />
            <div className={styles.footerContentLeft}>
                <Title>Cyber Alley</Title>
                <Content>Join, Connect, Learn, Repeat</Content>
            </div>
            <div className={styles.footerContentRight}>
                <nav className={styles.socialLinks}>
                    <h3>social media</h3>
                    <ul>
                        <li>
                            <a href="https://www.youtube.com/" target="_blank">
                                Youtube
                            </a>
                        </li>
                        <li>
                            <a href="https://discord.com/" target="_blank">
                                Discord
                            </a>
                        </li>
                        <li>
                            <a href="https://x.com/" target="_blank">
                                X
                            </a>
                        </li>
                    </ul>
                </nav>
                <nav className={styles.siteLinks}>
                    <h3>links</h3>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/events">Events</Link>
                        </li>
                        <li>
                            <Link href="/me">Profile</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}
