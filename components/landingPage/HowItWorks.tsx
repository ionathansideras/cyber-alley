import Title from "../Title";
import Content from "../Content";
import styles from "@/styles/landingPage/HowItWorks.module.css";

export default function HowItWorks() {
    return (
        <section className={styles.howItWorksContainer} id="how-it-works">
            <Title center>how it works</Title>
            <Content center forNewSection>
                <strong>Cyber Alley</strong> makes it simple: discover events,
                join fellow developers, and start building connections that
                matter. Whether you&#8217;re looking to attend, host, or
                collaborate, this is where your journey begins.
            </Content>
        </section>
    );
}
