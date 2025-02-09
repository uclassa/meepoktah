/*
    Can find emojis here: https://www.freecodecamp.org/news/all-emojis-emoji-list-for-copy-and-paste/
*/

export default function Emoji({
    symbol,
    label,
}: {
    symbol?: string;
    label?: string;
}) {
    return (
        <span
            className="leading-[1em]"
            role="img"
            aria-label={label ? label : ""}
            aria-hidden={label ? "false" : "true"}
        >
            {symbol}
        </span>
    );
}
