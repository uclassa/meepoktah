export default function Button(
    props: React.PropsWithChildren & {
        primary?: boolean;
        big?: boolean;
        fontBig?: boolean;
        [key: string]: unknown;
    },
) {
    const { primary, big, fontBig, children, ...restprops } = props;
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
        <div
            className={`rounded-[50px] whitespace-nowrap w-max outline-none border-none cursor-pointer flex justify-center items-center ${padding} ${fontsize} ${bg} ${text} transition duration-200 ease-in-out ${bgHover} ${textHover}`}
            {...restprops}
        >
            {children}
        </div>
    );
}
