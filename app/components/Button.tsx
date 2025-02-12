export default function Button(props: {
    primary?: boolean;
    size?: number;
    fontBig?: boolean;
    className?: string;
    [key: string]: unknown;
}) {
    const { primary, size, fontBig, className, ...restprops } = props;
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

    let padding;
    switch (size ?? 1) {
        case 0:
            padding = "px-4 py-2.5";
            break;
        case 1:
            padding = "px-7.5 py-3";
            break;
        case 2:
            padding = "px-12 py-3.5";
            break;
    }
    const fontsize = fontBig ? "text-[20px]" : "text-[16px]";

    return (
        <div
            className={`flex w-max cursor-pointer items-center justify-center rounded-[50px] border-none whitespace-nowrap outline-none ${padding} ${fontsize} ${bg} ${text} transition duration-200 ease-in-out ${bgHover} ${textHover} ${className ?? ""}`}
            {...restprops}
        />
    );
}
