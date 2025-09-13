import React, { useEffect, useMemo, useState } from "react";
import styles from "@/styles/events/EventFilters.module.css";
import { useRouter } from "next/router";

export default function EventFilters() {
    const router = useRouter();

    const [keywords, setKeywords] = useState("");
    const [checked, setChecked] = useState<string | null>(null);

    const filterQuery = useMemo(() => {
        return router.query.filter as string;
    }, [router.query.filter]);

    useEffect(() => {
        setChecked(filterQuery);
    }, []);

    function handleAddFilter(e: React.ChangeEvent<HTMLInputElement>) {
        setChecked(e.target.id);
        router.replace({
            query: { ...router.query, filter: e.target.id },
        });
    }
    return (
        <section className={styles.eventFiltersContainer}>
            <h4>Filters</h4>
            <form>
                <div className={styles.search}>
                    <label htmlFor="keyWords">Key Words</label>
                    <input
                        type="text"
                        id="keyWords"
                        value={keywords}
                        onChange={(e) => setKeywords(e.target.value)}
                        placeholder="Search for Keywords..."
                    />
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
                </nav>
            </form>
        </section>
    );
}
