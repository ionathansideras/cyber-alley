import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Tektur } from "next/font/google";

const tektur = Tektur({
    subsets: ["latin"],
    weight: ["400", "800"],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={tektur.className}>
            <Component {...pageProps} />
        </main>
    );
}
