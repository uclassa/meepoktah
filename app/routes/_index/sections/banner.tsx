export default function Banner() {
    const text =
        "Welcome to the prospective incoming freshies of 2025! Join our telegram group here 🌟";

    return (
        <a
            href="https://t.me/+rtKVQe-ui69iYmY1"
            target="_blank"
            className="z-2 flex h-10 w-full flex-col items-center overflow-hidden bg-red whitespace-nowrap"
        >
            <div className="my-auto flex animate-scroll-x space-x-100 tracking-wider text-offwhite">
                <span className="">{text}</span>
                <span className="">{text}</span>
                <span className="">{text}</span>
                <span className="">{text}</span>
            </div>
        </a>
    );
}
