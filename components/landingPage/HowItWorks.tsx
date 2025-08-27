import Title from "../Title";
import Content from "../Content";
import styles from "@/styles/landingPage/HowItWorks.module.css";
import Gradient from "../Gradient";
import Image from "next/image";

const data = [
    {
        title: "organize",
        content: "You can organize & host an event.",
        icon: "M10 2h4v4h-4V2zM7 7h10v2h-2v13h-2v-6h-2v6H9V9H7V7zM5 5v2h2V5H5zm0 0H3V3h2v2zm14 0v2h-2V5h2zm0 0V3h2v2h-2z",
    },

    {
        title: "select",
        content: "Select & subscribe to your event of interest.",
        icon: "M19 4h2v2h-2V4zm-2 4V6h2v2h-2zm-2 0h2v2h-2V8zm0 0h-2V6h2v2zM3 6h8v2H3V6zm8 10H3v2h8v-2zm7 2v-2h2v-2h-2v2h-2v-2h-2v2h2v2h-2v2h2v-2h2zm0 0v2h2v-2h-2z",
    },
    {
        title: "wait",
        content: "Patiently wait until the date comes.",
        icon: "M19 3H5v2H3v14h2v2h14v-2h2V5h-2V3zm0 2v14H5V5h14zm-8 2h2v6h4v2h-6V7z",
    },
    {
        title: "join",
        content: "And it's time to join, learn & improve!",
        icon: "M14 4V2h-4v2H5v2h14V4h-5zm5 12H5v-4H3v6h5v4h2v-4h4v2h-4v2h6v-4h5v-6h-2V6h-2v8h2v2zM5 6v8h2V6H5z",
    },
];

export default function HowItWorks() {
    return (
        <section className={styles.howItWorksContainer} id="how-it-works">
            <Gradient right="-200px" top="0px" />
            <Title center>how it works</Title>
            <Content center forNewSection>
                <strong>Cyber Alley</strong> makes it simple: discover events,
                join fellow developers, and start building connections that
                matter. Whether you&#8217;re looking to attend, host, or
                collaborate, this is where your journey begins.
            </Content>
            <div className={styles.chipsContainer}>
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={
                            index % 2 === 0
                                ? styles.clipPath1
                                : styles.clipPath2
                        }
                    >
                        <div className={styles.contentContainer}>
                            <span>
                                <svg
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    {" "}
                                    <path d={item.icon} />{" "}
                                </svg>
                            </span>
                            <h3>{item.title}</h3>
                            <Content center>{item.content}</Content>
                        </div>
                    </div>
                ))}
            </div>
            <Image
                className={styles.gridBackground}
                src={"/grid2.svg"}
                width={500}
                height={200}
                alt="grid background"
            />
        </section>
    );
}
