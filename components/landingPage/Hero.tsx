import Image from "next/image";
import styles from "@/styles/landingPage/Hero.module.css";
import Title from "../Title";
import Content from "../Content";
import Button from "../Button";
import FloatingIcon from "../FloatingIcon";
import Gradient from "../Gradient";

export default function Hero() {
    return (
        <section className={styles.heroContainer} id="hero">
            <Gradient top="-100px" left="-250px" z={-1} />

            <div className={styles.clipPathBorder}></div>
            <Image
                className={styles.heroImage}
                src="/hero.png"
                alt="hero-image"
                priority={true}
                width={900}
                height={900}
                loading="eager"
            />
            <Image
                className={styles.heroImageMagic}
                src="/hero-magic.png"
                alt="hero-image-magic"
                priority={true}
                width={900}
                height={900}
                loading="eager"
            />

            <div className={styles.contentContainer}>
                <Title>Build What&#8217;s Next in Cyber Alley</Title>
                <div>
                    <Content>
                        Discover, host, and join <strong>tech events</strong>{" "}
                        that level up your skills,
                        <br /> expand your network, and spark real
                        collaboration.
                    </Content>
                    <Button
                        href="/events"
                        icon={
                            <svg
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M6 4h14v2h2v6h-8v2h6v2h-4v2h-2v2H2V8h2V6h2V4zm2 6h2V8H8v2z"
                                    fill="currentColor"
                                />
                            </svg>
                        }
                    >
                        Explore
                    </Button>
                </div>
            </div>
            <FloatingIcon
                small
                bottom="20px"
                right="0px"
                rotate={45}
                extraStyles={styles.floatingIcon}
            >
                <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M7 3H3v4h4V3zm0 14H3v4h4v-4zM17 3h4v4h-4V3zm4 14h-4v4h4v-4zM8 8h2v2H8V8zm4 2h-2v4H8v2h2v-2h4v2h2v-2h-2v-4h2V8h-2v2h-2z"
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
