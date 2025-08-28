import Header from "@/components/Header";
import Footer from "@/components/landingPage/Footer";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Tektur } from "next/font/google";
import { useRouter } from "next/router";

const tektur = Tektur({
    subsets: ["latin"],
    weight: ["400", "800"],
});

export default function App({ Component, pageProps }: AppProps) {
    const { pathname } = useRouter();
    return (
        <main className={tektur.className}>
            <Header forLandingPage={pathname === "/" ? true : false} />
            <Component {...pageProps} />
            <Footer withImage={pathname === "/" ? true : false} />
        </main>
    );
}
