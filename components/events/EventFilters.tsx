import React, { useEffect, useState, memo } from "react";
import styles from "@/styles/events/EventFilters.module.css";
import { useRouter } from "next/router";

function EventFilters({
    setLoading,
}: {
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const router = useRouter();

    const [keywords, setKeywords] = useState("");
    const [checked, setChecked] = useState<string | null>(null);

    const filterQuery = router.query.filter as string;

    useEffect(() => {
        setChecked(filterQuery);
        const prevKeywords = router.query.keywords as string;
        if (prevKeywords) setKeywords(prevKeywords.replaceAll(",", " "));
    }, [filterQuery, router.query.keywords]);

    useEffect(() => {
        if (keywords.length > 50) {
            setKeywords(keywords.slice(0, 50));
        }
    }, [keywords]);

    function handleAddFilter(e: React.ChangeEvent<HTMLInputElement>) {
        window.scrollTo({ top: 0 });
        setLoading(true);
        setChecked(e.target.id);
        router.replace({
            query: { ...router.query, filter: e.target.id },
        });
    }

    function handleKeywords() {
        window.scrollTo({ top: 0 });
        setLoading(true);
        const sanitizedKeywords = keywords.replaceAll(" ", ",");
        router.replace({
            query: { ...router.query, keywords: sanitizedKeywords },
        });
    }

    return (
        <section className={styles.eventFiltersContainer}>
            <h4>Filters</h4>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleKeywords();
                }}
            >
                <div className={styles.search}>
                    <label htmlFor="keyWords">Key Words</label>
                    <div>
                        <input
                            type="text"
                            id="keyWords"
                            value={keywords}
                            onChange={(e) => setKeywords(e.target.value)}
                            placeholder="Search for Keywords..."
                        />
                        <button
                            type="button"
                            onClick={handleKeywords}
                            className={styles.searchButton}
                        >
                            Search
                        </button>
                    </div>
                </div>
                <nav className={styles.nav}>
                    <div className={styles.radio}>
                        <label htmlFor="default">Default</label>
                        <input
                            type="radio"
                            name="filter"
                            id="default"
                            onChange={handleAddFilter}
                            checked={
                                checked === "" || checked == "default"
                                    ? true
                                    : false
                            }
                        />
                    </div>
                    <div className={styles.radio}>
                        <label htmlFor="newFirst">New First</label>
                        <input
                            type="radio"
                            name="filter"
                            id="newFirst"
                            onChange={handleAddFilter}
                            checked={checked === "newFirst"}
                        />
                    </div>
                    <div className={styles.radio}>
                        <label htmlFor="oldFirst">Old First</label>
                        <input
                            type="radio"
                            name="filter"
                            id="oldFirst"
                            onChange={handleAddFilter}
                            checked={checked === "oldFirst"}
                        />
                    </div>
                    <div className={styles.radio}>
                        <label htmlFor="mostFamous">Most Famous</label>
                        <input
                            type="radio"
                            name="filter"
                            id="mostFamous"
                            onChange={handleAddFilter}
                            checked={checked === "mostFamous"}
                        />
                    </div>
                    <div className={styles.radio}>
                        <label htmlFor="AToZ">A to Z</label>
                        <input
                            type="radio"
                            name="filter"
                            id="AToZ"
                            onChange={handleAddFilter}
                            checked={checked === "AToZ"}
                        />
                    </div>
                    <div className={styles.radio}>
                        <label htmlFor="ZToA">Z to A</label>
                        <input
                            type="radio"
                            name="filter"
                            id="ZToA"
                            onChange={handleAddFilter}
                            checked={checked === "ZToA"}
                        />
                    </div>
                </nav>
            </form>
        </section>
    );
}

export default memo(EventFilters);
