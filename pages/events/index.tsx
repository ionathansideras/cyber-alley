import React from "react";

import type { User } from "@supabase/supabase-js";
import type { GetServerSidePropsContext } from "next";
import Title from "@/components/Title";
import { auth0 } from "@/lib/auth0";

export default function Events({ user }: { user: User }) {
    return (
        <div className="under-development">
            <Title>page under development</Title>
            <h1>Hello, {user.email || "user"}!</h1>
        </div>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await auth0.getSession(context.req);

    if (!session) {
        return {
            redirect: {
                destination: "/authentication",
                permanent: false,
            },
        };
    } else if (session) {
        return { props: { user: session.user ?? null } };
    }
}
