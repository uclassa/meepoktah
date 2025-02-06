import React from "react";

/*
    Can find emojis here: https://www.freecodecamp.org/news/all-emojis-emoji-list-for-copy-and-paste/
*/

const Emoji = ({ symbol, label }: { symbol?: string; label?: string }) => (
    <span
        className="emoji"
        role="img"
        aria-label={label ? label : ""}
        aria-hidden={label ? "false" : "true"}
    >
        {symbol}
    </span>
);
export default Emoji;
