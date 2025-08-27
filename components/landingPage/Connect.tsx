import styles from "@/styles/landingPage/Connect.module.css";
import Title from "../Title";
import Content from "../Content";
import Button from "../Button";
import Gradient from "../Gradient";

export default function Connect() {
    return (
        <section className={styles.connectContainer} id="connect">
            <Gradient top="0px" left="-200px" z={-1} />
            <article className={styles.connectArticle}>
                <div className={styles.connectContent}>
                    <p className={styles.decor}>
                        01101010 01101111 01101001 01101110
                    </p>

                    <div className={styles.connectText}>
                        <Title>Connect & Create</Title>

                        <div>
                            <Content>
                                Launch meetups, hack nights, and workshops.
                                <br />
                                Find collaborators, share knowledge, and grow
                                your network.
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
                                        <path
                                            d="M5 3H3v18h18V3H5zm0 2h14v14H5V5zm4 7H7v2h2v2h2v-2h2v-2h2v-2h2V8h-2v2h-2v2h-2v2H9v-2z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                }
                            >
                                Join
                            </Button>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
}
