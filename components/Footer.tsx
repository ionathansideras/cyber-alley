import Image from "next/image";
import styles from "@/styles/Footer.module.css";
import Title from "./Title";
import Link from "next/link";
import Content from "./Content";

export default function Footer({ withImage }: { withImage: boolean }) {
    return (
        <footer className={styles.footerContainer}>
            {withImage && (
                <Image
                    className={styles.coderImage}
                    src={"/coder.png"}
                    width={600}
                    height={600}
                    alt="coder image"
                />
            )}
            <div className={styles.footerContentLeft}>
                <Title>Cyber Alley</Title>
                <Content>Join, Connect, Learn, Repeat</Content>
            </div>
            <div className={styles.footerContentRight}>
                <nav className={styles.socialLinks}>
                    <h3>social media</h3>
                    <ul>
                        <li>
                            <a
                                href="https://www.youtube.com/"
                                target="_blank"
                                title="Click to visit our Youtube channel"
                            >
                                Youtube
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://discord.com/"
                                target="_blank"
                                title="Click to visit our Discord server"
                            >
                                Discord
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://x.com/"
                                target="_blank"
                                title="Click to visit our X page"
                            >
                                X
                            </a>
                        </li>
                    </ul>
                </nav>
                <nav className={styles.siteLinks}>
                    <h3>links</h3>
                    <ul>
                        <li>
                            <Link href="/" title="Click to visit the Home page">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/events"
                                title="Click to visit the Events page"
                            >
                                Events
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/me"
                                title="Click to visit your Profile page"
                            >
                                Profile
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}
