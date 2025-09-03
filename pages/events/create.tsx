import React from "react";

import type { GetServerSidePropsContext } from "next";
import { createClient } from "@/utils/supabase/server-props";
import Title from "@/components/Title";

export default function Create() {
    return (
        <div className="under-development">
            <Title>page under development</Title>
        </div>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const supabase = createClient(context);
    const { data, error } = await supabase.auth.getUser();
    if (error || !data) {
        return {
            redirect: {
                destination: "/authentication",
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
