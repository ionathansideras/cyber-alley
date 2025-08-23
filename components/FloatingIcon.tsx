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
    extraStyles,
}: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    small?: boolean;
    medium?: boolean;
    rotate?: number;
    children: React.ReactNode;
    extraStyles: string;
}) {
    return (
        <div
            className={`${style.icon} ${small ? style.small : ""} ${
                medium ? style.medium : ""
            } ${extraStyles}`}
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
