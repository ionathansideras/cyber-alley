"use client";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "@/styles/Auth.module.css";

import { createClient } from "@/utils/supabase/component";
import Button from "@/components/Button";
import Title from "@/components/Title";

export default function Login() {
    const router = useRouter();
    const supabase = createClient();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [message, setMessage] = useState("");
    const [logInLoading, setLogInLoading] = useState(false);
    const [signUpLoading, setSignUpLoading] = useState(false);

    async function logIn() {
        setLogInLoading(true);
        setErrorMessage("");

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (error) {
            console.error(error);
            setErrorMessage(error.message);
            setMessage("");
            setLogInLoading(false);
        } else {
            router.push("/events");
        }
    }

    async function signUp() {
        setSignUpLoading(true);
        setErrorMessage("");

        const { error } = await supabase.auth.signUp({ email, password });
        if (error) {
            console.error(error);
            setErrorMessage(error.message);
            setMessage("");
            setSignUpLoading(false);
        } else {
            setMessage("Verification Email has been sent");
            setErrorMessage("");
            router.push("/events");
        }
    }

    return (
        <main className={styles.authContainer}>
            <section className={styles.wrapper}>
                <form className={styles.form}>
                    <Title>Start Now</Title>
                    {errorMessage && (
                        <p className={styles.error}>{errorMessage}</p>
                    )}
                    {message && <p className={styles.message}>{message}</p>}

                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className={styles.buttonsContainer}>
                        <Button
                            onClick={logIn}
                            title={"Click to login"}
                            loading={logInLoading}
                        >
                            Log in
                        </Button>
                        <Button
                            onClick={signUp}
                            title={"Click to Sign up"}
                            loading={signUpLoading}
                        >
                            Sign up
                        </Button>
                    </div>
                </form>
            </section>
        </main>
    );
}
