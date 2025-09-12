import type { GetStaticPropsContext } from "next";
import Title from "@/components/Title";
import type { Event } from "@/types";

export default function Event() {
    return (
        <div className="under-development">
            <Title>page under development</Title>
            {/* event: {event.title} */}
        </div>
    );
}

// export async function getStaticProps(context: GetStaticPropsContext) {
//     const eventId = Number(context.params?.event);

//     const events: Event[] = [
//         { id: 1, title: "test1" },
//         { id: 2, title: "test2" },
//         { id: 3, title: "test3" },
//         { id: 4, title: "test4" },
//     ];

//     const event = events.find((event) => eventId === event.id);

//     if (!event) {
//         return {
//             notFound: true,
//         };
//     }

//     return { props: { event }, revalidate: 10 };
// }

// export async function getStaticPaths() {
//     const events: Event[] = [
//         { id: 1, title: "test1" },
//         { id: 2, title: "test2" },
//         { id: 3, title: "test3" },
//         { id: 4, title: "test4" },
//     ];

//     const paths = events.map((e) => ({
//         params: { event: String(e.id) },
//     }));

//     return {
//         paths,
//         fallback: "blocking",
//     };
// }
