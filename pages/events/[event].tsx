import React from "react";
import { useRouter } from "next/router";

export default function Event() {
    const router = useRouter();
    return <div>event: {router.query.event}</div>;
}
