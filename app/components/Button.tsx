import clsx from "clsx";

export default function Button(props: {
    primary?: boolean;
    size?: number;
    fontBig?: boolean;
    className?: string;
    [key: string]: unknown;
}) {
    const { primary, size, fontBig, className, ...restprops } = props;

    return (
        <div
            className={clsx([
                "flex w-max cursor-pointer items-center justify-center rounded-[50px] border-none whitespace-nowrap transition duration-200 ease-in-out outline-none",
                className,
                size === 0
                    ? "px-4 py-2.5"
                    : size === 2
                      ? "px-12 py-3.5"
                      : "px-7.5 py-3",
                primary
                    ? [
                          "bg-offwhite",
                          "hover:bg-red",
                          "text-black",
                          "hover:text-offwhite",
                      ]
                    : [
                          "bg-red",
                          "hover:bg-gold",
                          "text-offwhite",
                          "hover:text-black",
                      ],
                fontBig ? "text-[20px]" : "text-[16px]",
            ])}
            {...restprops}
        />
    );
}
