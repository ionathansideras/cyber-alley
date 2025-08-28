import Head from "next/head";
import Hero from "@/components/landingPage/Hero";
import Mission from "@/components/landingPage/Mission";
import HowItWorks from "@/components/landingPage/HowItWorks";
import Connect from "@/components/landingPage/Connect";
import { URL } from "@/constants";

export default function Home() {
    return (
        <>
            <Head>
                <title>Cyber Alley</title>
                <meta
                    name="description"
                    content="Cyber Alley is a community-driven platform for developers to discover, host, and join tech events. Connect, learn, and build the future together—organize meetups, join workshops, and collaborate with innovators worldwide."
                />
                {/* Open Graph (Facebook, LinkedIn, etc.) */}
                <meta property="og:title" content="Cyber Alley" />
                <meta
                    property="og:description"
                    content="Cyber Alley is a community-driven platform for developers to discover, host, and join tech events. Connect, learn, and build the future together—organize meetups, join workshops, and collaborate with innovators worldwide."
                />
                <meta property="og:url" content={URL} />
                <meta property="og:type" content="website" />
                {/* Twitter Card */}
                <meta
                    name="twitter:card"
                    content="Cyber Alley is a community-driven platform for developers to discover, host, and join tech events. Connect, learn, and build the future together—organize meetups, join workshops, and collaborate with innovators worldwide."
                />
                <meta name="twitter:title" content="Cyber Alley" />
                <meta
                    name="twitter:description"
                    content="Discover, host, and join developer events worldwide. Connect, learn, and build the future together on Cyber Alley."
                />
            </Head>
            <Hero />
            <Mission />
            <HowItWorks />
            <Connect />
        </>
    );
}
