import React from "react";
import { useRouter } from "next/router";

import type { GetServerSidePropsContext } from "next";
import Title from "@/components/Title";
import { auth0 } from "@/lib/auth0";

export default function Event() {
    const router = useRouter();
    return (
        <div className="under-development">
            <Title>page under development</Title>
            event: {router.query.event}
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
