import {
    useRef,
    useEffect,
    useState,
    type Dispatch,
    type SetStateAction,
    memo,
} from "react";
import styles from "@/styles/HamburgerMenu.module.css";
import Gradient from "./Gradient";
import { createClient } from "@/utils/supabase/component";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "./Button";

const links = [
    {
        name: "home",
        url: "/",
    },
    {
        name: "events",
        url: "/events",
    },
    {
        name: "create event",
        url: "/events/create",
    },
    {
        name: "profile",
        url: "/me",
    },
];

function HamburgerMenu({
    open,
    setOpen,
}: {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}) {
    const burgerRef = useRef<HTMLDivElement | null>(null);
    const supabase = createClient();
    const router = useRouter();
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);

    function handleOpenHamburger() {
        setOpen((prev) => !prev);
    }

    useEffect(() => {
        function onClickOutside(e: PointerEvent) {
            if (
                e.target instanceof Node &&
                !burgerRef.current?.contains(e.target)
            ) {
                setOpen(false);
            }
        }
        document.addEventListener("click", onClickOutside);

        return () => {
            document.removeEventListener("click", onClickOutside);
        };
    }, [setOpen]);

    useEffect(() => {
        async function getUser() {
            const userObject = await supabase.auth.getUser();
            if (userObject.data.user) {
                setUserLoggedIn(true);
            } else {
                setUserLoggedIn(false);
            }
        }

        getUser();
    });

    async function handleLogOut() {
        setLoading(true);

        const { error } = await supabase.auth.signOut();

        if (!error) {
            router.push("/");
        } else {
            setLoading(false);
        }
    }

    return (
        <div ref={burgerRef}>
            <div
                className={`${styles.hamburgerMenu} ${
                    open ? styles.open : ""
                } `}
                onClick={handleOpenHamburger}
                title="Click to toggle the menu"
                data-testid="hamburger-button"
            >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {open && (
                <>
                    <div className={styles.menu}>
                        <span className={styles.background}></span>
                        <nav>
                            <ul className={styles.links}>
                                {links.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            onClick={() => setOpen(false)}
                                            href={item.url}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                                {userLoggedIn ? (
                                    <li onClick={handleLogOut}>
                                        <Button loading={loading}>
                                            Log out
                                        </Button>
                                    </li>
                                ) : (
                                    ""
                                )}
                            </ul>
                        </nav>
                        <Gradient top="-170px" left="-250px" z={4} />
                    </div>
                </>
            )}
        </div>
    );
}

export default memo(HamburgerMenu);
