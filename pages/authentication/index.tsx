import styles from "@/styles/Authentication.module.css";
import Head from "next/head";
import { URL } from "@/constants";
import Title from "@/components/Title";
import Button from "@/components/Button";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Content from "@/components/Content";
import type { GetServerSidePropsContext } from "next";

export default function Login({ returnTo }: { returnTo: string }) {
    return (
        <>
            <Head>
                <title>Log in / Sign up - Cyber Alley</title>
                <meta
                    name="description"
                    content="Log in or sign up to Cyber Alley, the platform for tech enthusiasts to discover, join, and host tech events. Access the latest events, meetups, and workshops for developers and innovators."
                />
                {/* Open Graph (Facebook, LinkedIn, etc.) */}
                <meta
                    property="og:title"
                    content="Log in / Sign up - Cyber Alley"
                />
                <meta
                    property="og:description"
                    content="Log in or sign up to Cyber Alley, the platform for tech enthusiasts to discover, join, and host tech events. Access the latest events, meetups, and workshops for developers and innovators."
                />
                <meta property="og:url" content={URL + "authentication"} />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta
                    name="twitter:card"
                    content="Log in or sign up to Cyber Alley, the platform for tech enthusiasts to discover, join, and host tech events. Access the latest events, meetups, and workshops for developers and innovators."
                />
                <meta
                    name="twitter:title"
                    content="Log in / Sign up - Cyber Alley"
                />
                <meta
                    name="twitter:description"
                    content="Discover, host, and join tech events for developers on Cyber Alley. Log in or sign up now!"
                />
            </Head>

            <main className={styles.authContainer}>
                <section className={styles.wrapper}>
                    <form className={styles.form}>
                        <Title>Start Now</Title>
                        <Content center>
                            Start easily by continuing with your favorite
                            account:
                        </Content>

                        <Button
                            href={`/auth/login?connection=google-oauth2&returnTo=${returnTo}`}
                            icon={<SiGmail />}
                        >
                            Continue with Google
                        </Button>
                        <Button
                            href={`/auth/login?connection=github&returnTo=${returnTo}`}
                            icon={<FaGithubSquare />}
                        >
                            Continue with GitHub
                        </Button>
                    </form>
                </section>
            </main>
        </>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const returnTo = context.query.returnTo;

    return { props: { returnTo: returnTo ?? "/" } };
}
