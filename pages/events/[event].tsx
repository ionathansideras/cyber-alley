import React from "react";
import { useRouter } from "next/router";

export default function Event() {
    const router = useRouter();
    return (
        <div
            style={{
                height: "100vh",
            }}
        >
            event: {router.query.event}
        </div>
    );
}
