import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:image" content="/hero.png" />
                <meta name="twitter:image" content="/hero.png" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
