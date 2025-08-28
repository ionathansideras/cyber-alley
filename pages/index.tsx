import Head from "next/head";
import Hero from "@/components/landingPage/Hero";
import Mission from "@/components/landingPage/Mission";
import HowItWorks from "@/components/landingPage/HowItWorks";
import Connect from "@/components/landingPage/Connect";

export default function Home() {
    return (
        <>
            <Head>
                <title>Cyber Alley</title>
                <meta
                    name="description"
                    content="Cyber Alley is a community-driven platform for developers to discover, host, and join tech events. Connect, learn, and build the future together—organize meetups, join workshops, and collaborate with innovators worldwide."
                />
            </Head>
            <Hero />
            <Mission />
            <HowItWorks />
            <Connect />
        </>
    );
}
