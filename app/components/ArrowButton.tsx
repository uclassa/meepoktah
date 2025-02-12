import { useState, type PropsWithChildren } from "react";
import {
    MdArrowBack,
    MdArrowForward,
    MdKeyboardArrowLeft,
    MdKeyboardArrowRight,
} from "react-icons/md";
import Button from "./Button";

export default function ArrowButton(
    props: PropsWithChildren & {
        left: boolean;
        [key: string]: unknown;
    },
) {
    const { left, children, ...restprops } = props;
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    };

    return (
        <Button onMouseEnter={onHover} onMouseLeave={onHover} {...restprops}>
            {left && (
                <>
                    {hover ? (
                        <MdArrowBack className="mr-2 text-xl" />
                    ) : (
                        <MdKeyboardArrowLeft className="mr-2 text-xl" />
                    )}
                </>
            )}
            {children}
            {left || (
                <>
                    {hover ? (
                        <MdArrowForward className="ml-2 text-xl" />
                    ) : (
                        <MdKeyboardArrowRight className="ml-2 text-xl" />
                    )}
                </>
            )}
        </Button>
    );
}
