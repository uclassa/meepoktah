import { useEffect, useState } from "react";
import Emoji from "../Commons/Emojis";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";
import heroVideo from "/videos/hero.mp4";
import Button from "../Commons/Button";
import { useContext } from "react";
import { envContext } from "../Commons/Contexts";
import "./Hero.scss";

export default function Hero() {
    const [video, setVideo]: [undefined | string, (video: string) => void] =
        useState();
    useEffect(() => {
        setVideo(heroVideo);
    }, []);

    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    };

    const env = useContext(envContext);

    return (
        <div className="hero-container">
            <div className="hero-bg">
                <video
                    className="video-bg"
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    src={video}
                />
            </div>
            <div className="hero-content">
                <h1> SINGAPORE STUDENTS&apos; ASSOCIATION </h1>
                <p>
                    {" "}
                    <Emoji symbol="👋" /> Hello! Welcome to SSA, a tight-knit
                    community that welcomes everyone!{" "}
                </p>
                <div className="mt-4.5">
                    <Button
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary={true}
                    >
                        <a
                            href={env.VITE_DISCORD_LINK}
                            target="_blank"
                            rel="noreferrer"
                        />
                        Join Us!{" "}
                        {hover ? (
                            <MdArrowForward className="ml-2 text-xl" />
                        ) : (
                            <MdKeyboardArrowRight className="ml-2 text-xl" />
                        )}
                    </Button>
                </div>
            </div>
        </div>
    );
}
