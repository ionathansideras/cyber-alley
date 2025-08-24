import styles from "@/styles/landingPage/Mission.module.css";
import Title from "../Title";
import Content from "../Content";
import Gradient from "../Gradient";
import BentoGrid from "./BentoGrid";

export default function Mission() {
    return (
        <section className={styles.MissionContainer} id="mission">
            <Title center>our mission</Title>
            <Content center forNewSection>
                At <strong>Cyber Alley</strong>, we bring developers together
                through tech-driven events — a space to learn, share, and build
                the future.
            </Content>

            <Gradient top="0px" right="-200px" />
            <Gradient bottom="400px" left="-200px" />
            <BentoGrid />
        </section>
    );
}
