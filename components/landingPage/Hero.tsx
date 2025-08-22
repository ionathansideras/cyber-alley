import Image from "next/image";
import styles from "@/styles/Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.heroContainer}>
            <div className={styles.clipPathBorder}></div>
            <Image
                className={styles.heroImage}
                src="/hero.png"
                alt="hero-image"
                width={900}
                height={900}
            />
        </section>
    );
}
