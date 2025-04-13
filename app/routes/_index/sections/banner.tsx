export default function Banner() {
    const text =
        "Welcome to the prospective incoming freshies of 2025! Join our telegram group here 🌟";

    return (
        <a
            href="https://t.me/+rtKVQe-ui69iYmY1"
            target="_blank"
            className="z-2 flex h-10 w-full flex-row items-center overflow-hidden bg-red tracking-wider whitespace-nowrap text-offwhite"
        >
            <div className="my-auto flex animate-[marquee_25s_infinite_linear]">
                <span className="px-40">{text}</span>
                <span className="px-40">{text}</span>
            </div>
            <div className="my-auto flex animate-[marquee_25s_infinite_linear]">
                <span className="px-40">{text}</span>
                <span className="px-40">{text}</span>
            </div>
        </a>
    );
}
