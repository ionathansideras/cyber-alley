import React from "react";

import type { GetServerSidePropsContext } from "next";
import Title from "@/components/Title";
import { auth0 } from "@/lib/auth0";
import { supabase } from "@/lib/supabaseConnection";
import type { User } from "@/types";
import Image from "next/image";

export default function Me({ user }: { user: User }) {
    return (
        <div className="under-development">
            <Title>page under development</Title>
            <Image
                src={user.picture}
                width={200}
                height={200}
                alt="profile picture"
            />
            <h1>welcome, {user.nickname}</h1>
        </div>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await auth0.getSession(context.req);

    if (!session) {
        return {
            redirect: {
                destination: "/authentication?returnTo=/me",
                permanent: false,
            },
        };
    }

    const sessionUser = session.user;
    let user = {};

    const { data: currentUser } = await supabase
        .from("users")
        .select("*")
        .eq("user_id", sessionUser.sub);

    if (!currentUser || currentUser.length === 0) {
        const { data: newUser, error } = await supabase
            .from("users")
            .insert([
                {
                    nickname: sessionUser.nickname,
                    email: sessionUser.email,
                    user_id: sessionUser.sub,
                    picture: sessionUser.picture,
                },
            ])
            .select();

        if (!error) user = newUser[0];
    } else {
        user = currentUser[0];
    }

    if (session) {
        return { props: { user: user ?? null } };
    }
}
