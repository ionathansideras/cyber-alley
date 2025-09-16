import React from "react";
import { useRouter } from "next/router";
import styles from "@/styles/events/Pagination.module.css";

export default function Pagination({
    page,
    totalEvents,
    amountPerPage,
    setLoader,
}: {
    page: number;
    totalEvents: number;
    amountPerPage: number;
    setLoader: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const router = useRouter();
    const pagesBasedOnAmount = Math.ceil(totalEvents / amountPerPage);

    const pagesArray = Array.from(Array(pagesBasedOnAmount).keys());

    function changePage(index: number) {
        setLoader(true);
        window.scrollTo({
            top: 0,
        });
        router.replace({
            query: { ...router.query, page: index },
        });
    }

    return (
        <nav className={styles.nav}>
            <button
                title="Go to previous Page"
                disabled={page <= 1}
                className={`${styles.backArrow} ${
                    page <= 1 ? styles.disabled : ""
                }`}
                onClick={() => changePage(page > 1 ? page - 1 : 1)}
            >
                <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M20 11v2H8v2H6v-2H4v-2h2V9h2v2h12zM10 7H8v2h2V7zm0 0h2V5h-2v2zm0 10H8v-2h2v2zm0 0h2v2h-2v-2z"
                        fill="black"
                    />
                </svg>
            </button>
            {pagesArray.map((_, index) => {
                const indexRelativeToPages = index + 1;

                // show always the number 1 page
                if (indexRelativeToPages === 1) {
                    return (
                        <button
                            key={index}
                            onClick={() => changePage(index + 1)}
                            className={`${
                                page === index + 1 ? styles.selected : ""
                            }`}
                        >
                            {index + 1}
                        </button>
                    );
                }

                // show the dots if the index is less 3 than the selected page
                if (indexRelativeToPages === page - 3) {
                    return (
                        <span key={index} className={styles.spanPrev}></span>
                    );
                }

                // show 2 pages before and after the index it will be like this: 2,3,[4],5,6
                if (
                    // -2 pages
                    indexRelativeToPages >= page - 2 &&
                    // +2 pages
                    indexRelativeToPages <= page + 2 &&
                    // don't run for the first page
                    indexRelativeToPages > 1 &&
                    // don't run for the last page
                    indexRelativeToPages < pagesBasedOnAmount
                ) {
                    return (
                        <button
                            key={index}
                            onClick={() => changePage(index + 1)}
                            className={`${
                                page === index + 1 ? styles.selected : ""
                            }`}
                        >
                            {index + 1}
                        </button>
                    );
                }

                // show dots if the index is one less than the pagesBasedOnAmount
                if (indexRelativeToPages === pagesBasedOnAmount - 1) {
                    return (
                        <span key={index} className={styles.spanNext}></span>
                    );
                }

                // show always the last page
                if (indexRelativeToPages === pagesBasedOnAmount) {
                    return (
                        <button
                            key={index}
                            onClick={() => changePage(index + 1)}
                            className={`${
                                page === index + 1 ? styles.selected : ""
                            }`}
                        >
                            {index + 1}
                        </button>
                    );
                }
            })}
            <button
                title="Go to next Page"
                disabled={page >= pagesBasedOnAmount}
                className={`${styles.nextArrow} ${
                    page >= pagesBasedOnAmount ? styles.disabled : ""
                }`}
                onClick={() =>
                    changePage(
                        page < pagesBasedOnAmount
                            ? page + 1
                            : pagesBasedOnAmount
                    )
                }
            >
                <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M4 11v2h12v2h2v-2h2v-2h-2V9h-2v2H4zm10-4h2v2h-2V7zm0 0h-2V5h2v2zm0 10h2v-2h-2v2zm0 0h-2v2h2v-2z"
                        fill="black"
                    />
                </svg>
            </button>
        </nav>
    );
}
