import {
    useRef,
    useEffect,
    type Dispatch,
    type SetStateAction,
    memo,
} from "react";
import styles from "@/styles/HamburgerMenu.module.css";
import Gradient from "./Gradient";
import Link from "next/link";
import Button from "./Button";
import { useUser } from "@auth0/nextjs-auth0";

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
    const { user } = useUser();
    // const [loading, setLoading] = useState(false);

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
                                {user ? (
                                    <Button
                                        href="/auth/logout"
                                        aTag
                                        // loading={loading}
                                        // onClick={() => setLoading(true)}
                                    >
                                        Log out
                                    </Button>
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
