import React from "react";
import { useRouter } from "next/router";

import type { GetServerSidePropsContext } from "next";
import { createClient } from "@/utils/supabase/server-props";
import Title from "@/components/Title";

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
    const supabase = createClient(context);
    const { data, error } = await supabase.auth.getUser();
    if (error || !data) {
        return {
            redirect: {
                destination: "/auth",
                permanent: false,
            },
        };
    }
    return {
        props: {
            user: data.user,
        },
    };
}
