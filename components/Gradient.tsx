import styles from "@/styles/Gradient.module.css";

export default function Gradient({
    top,
    left,
    right,
    bottom,
    z,
}: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    z?: number;
}) {
    return (
        <span
            className={styles.gradient}
            style={{
                top: top,
                left: left,
                right: right,
                bottom: bottom,
                zIndex: z,
            }}
        ></span>
    );
}
