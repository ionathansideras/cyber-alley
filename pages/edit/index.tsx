import React from "react";

import type { GetServerSidePropsContext } from "next";
import Title from "@/components/Title";
import { auth0 } from "@/lib/auth0";

export default function Edit() {
    return (
        <div className="under-development">
            <Title>page under development</Title>
        </div>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await auth0.getSession(context.req);

    if (!session) {
        return {
            redirect: {
                destination: "/authentication?returnTo=/edit",
                permanent: false,
            },
        };
    } else if (session) {
        return { props: { user: session.user ?? null } };
    }
}
