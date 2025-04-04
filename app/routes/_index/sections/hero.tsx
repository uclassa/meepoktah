import { useEffect, useState, useContext } from "react";
import { envContext } from "~/services/Contexts";
import ArrowButton from "~/components/ArrowButton";
import Emoji from "~/components/Emoji";
import heroVideo from "/assets/videos/hero.mp4";
import NavItem from "~/components/NavItem";

export default function Hero() {
    const [video, setVideo]: [undefined | string, (video: string) => void] =
        useState();
    useEffect(() => {
        setVideo(heroVideo);
    }, []);

    const env = useContext(envContext);

    return (
        <div className="z-0 grid h-[100vh] w-full items-center justify-items-center overflow-hidden bg-[#0c0c0c]">
            <video
                className="col-end-2 row-end-2 h-full w-full bg-[#232a34] object-cover opacity-30"
                autoPlay={true}
                loop={true}
                muted={true}
                src={video}
            />
            <div className="relative z-1 col-end-2 row-end-2 flex max-w-[1200px] flex-col items-center text-center text-offwhite drop-shadow-[5px_2px_10px_rgba(0,0,0,0.6)] transition duration-300 hover:scale-102">
                <h1 className="text-[32px] font-bold tracking-[1px] sm:text-[40px] md:text-5xl">
                    SINGAPORE STUDENTS&apos; ASSOCIATION
                </h1>
                <p className="mt-3 mb-4.5 max-w-[660px] font-inter text-xl sm:text-[28px]">
                    <Emoji symbol="👋" /> Hello! Welcome to SSA, a tight-knit
                    community that welcomes everyone!
                </p>
                <ArrowButton primary={true} left={false}>
                    <NavItem href={env.VITE_DISCORD_LINK}>
                        Join our discord!
                    </NavItem>
                </ArrowButton>
                <ArrowButton className="mt-5" primary={false} left={false}>
                    <NavItem href="https://t.me/+rtKVQe-ui69iYmY1">
                        2025 admits telegram!
                    </NavItem>
                </ArrowButton>
            </div>
        </div>
    );
}
