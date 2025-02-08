import InfiniteCarousel from "./Commons/InfiniteCarousel";
import Emoji from "./Commons/Emojis";
import Button from "./Commons/Button";
import { useContext } from "react";
import { envContext } from "./Commons/Contexts";

const basePath = "/images/fams/";

const Programs = () => {
    const env = useContext(envContext);
    const fams =
        "Our family system is a great way to meet new people and make friends! You will be placed in a family with other members and a family head. You will be able to participate in fun events and activities with your family throughout the year!";

    return (
        <div className="flex items-center justify-center">
            <div className="grid w-full auto-cols-fr max-w-[1100px] mx-auto px-6 justify-center pt-20 md:pt-40">
                <div className="p-7.5 max-w-[540px] col-auto lg:col-start-2 m-auto">
                    <p className="leading-4 font-bold tracking-[1.4px] uppercase mb-4">
                        <Emoji symbol={"🤗"} />
                        Join a family!
                    </p>
                    <h1 className="mb-6 text-[32px] md:text-5xl leading-[1.1] font-semibold">
                        FAMILY SYSTEM
                    </h1>
                    <p className="font-inter font-medium mb-[35px] text-[1.3rem] leading-[2.5rem]">
                        {fams}
                    </p>
                    <Button>
                        <a
                            href={env.VITE_FAM_SIGNUP}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Sign up
                        </a>
                    </Button>
                </div>
                <div className="p-7.5 max-w-[540px] col-end-2 m-auto lg:row-end-2">
                    <InfiniteCarousel>
                        <img src={basePath + "fam1.jpg"} />
                        <img src={basePath + "fam2.jpg"} />
                        <img src={basePath + "fam3.jpg"} />
                        <img src={basePath + "fam4.jpg"} />
                    </InfiniteCarousel>
                </div>
            </div>
        </div>
    );
};

export default Programs;
