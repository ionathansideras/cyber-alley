import React from "react";
import style from "@/styles/FloatingIcon.module.css";

export default function FloatingIcon({
    top,
    right,
    left,
    bottom,
    small,
    medium,
    children,
    rotate,
}: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    small?: boolean;
    medium?: boolean;
    rotate?: number;
    children: React.ReactNode;
}) {
    return (
        <div
            className={`${style.icon} ${small ? style.small : ""} ${
                medium ? style.medium : ""
            }`}
            style={{
                top: top,
                right: right,
                left: left,
                bottom: bottom,
                transform: `rotate(${rotate}deg)`,
            }}
        >
            {children}
        </div>
    );
}
