import Image from "next/image";
import styles from "@/styles/Hero.module.css";
import Title from "../Title";
import Content from "../Content";
import Button from "../Button";
import FloatingIcon from "../FloatingIcon";

export default function Hero() {
    return (
        <section className={styles.heroContainer}>
            <div className={styles.clipPathBorder}></div>
            <Image
                className={styles.heroImage}
                src="/hero.png"
                alt="hero-image"
                priority={true}
                width={900}
                height={900}
            />
            <Image
                className={styles.heroImageMagic}
                src="/hero-magic.png"
                alt="hero-image-magic"
                priority={true}
                width={900}
                height={900}
            />

            <div className={styles.contentContainer}>
                <Title>Welcome To Cyber Alley</Title>
                <div>
                    <Content>
                        Here you will find the Tech Event <br /> you dreamed
                        about
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
            <FloatingIcon medium bottom="10px" right="0px" rotate={45}>
                <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    {" "}
                    <path
                        d="M7 3H3v4h4V3zm0 14H3v4h4v-4zM17 3h4v4h-4V3zm4 14h-4v4h4v-4zM8 8h2v2H8V8zm4 2h-2v4H8v2h2v-2h4v2h2v-2h-2v-4h2V8h-2v2h-2z"
                        fill="#dbff29ff"
                    />{" "}
                </svg>
            </FloatingIcon>
            <FloatingIcon medium top="10px" left="0px" rotate={-25}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    {" "}
                    <path
                        d="M22 2h-2v2h2v12h-2v2h2v-2h2V4h-2V2ZM2 4H0v12h2v2h2v-2H2V4Zm0 0V2h2v2H2Zm4 2H4v8h2V6Zm0 0V4h2v2H6Zm4 0h4v2h-4V6Zm0 6H8V8h2v4Zm4 0h-4v2H8v4H6v4h2v-4h2v-4h4v4h2v4h2v-4h-2v-4h-2v-2Zm0 0h2V8h-2v4Zm6-6h-2V4h-2v2h2v8h2V6Z"
                        fill="#dbff29ff"
                    />{" "}
                </svg>
            </FloatingIcon>
            <p className={styles.decorText}>2025 - made for devs by devs</p>
        </section>
    );
}
