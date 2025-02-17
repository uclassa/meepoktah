import type { PropsWithChildren } from "react";

export default function Button(
    props: PropsWithChildren & {
        primary?: boolean;
        big?: boolean;
        fontBig?: boolean;
        className?: string;
        [key: string]: unknown;
    },
) {
    const { primary, big, fontBig, children, className, ...restprops } = props;
    let bg, bgHover, text, textHover;
    if (primary) {
        bg = "bg-offwhite";
        bgHover = "hover:bg-red";
        text = "text-black";
        textHover = "hover:text-offwhite";
    } else {
        bg = "bg-red";
        bgHover = "hover:bg-gold";
        text = "text-offwhite";
        textHover = "hover:text-black";
    }
    const padding = big ? "px-12 py-3.5" : "px-7.5 py-3";
    const fontsize = fontBig ? "text-[20px]" : "text-[16px]";

    return (
        <a
            className={`flex w-max cursor-pointer items-center justify-center rounded-[50px] border-none whitespace-nowrap outline-none ${padding} ${fontsize} ${bg} ${text} transition duration-200 ease-in-out ${bgHover} ${textHover} ${className}`}
            {...restprops}
        >
            {children}
        </a>
    );
}
