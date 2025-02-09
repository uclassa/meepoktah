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
            <div className="mx-auto grid w-full max-w-[1100px] auto-cols-fr justify-center px-6 pt-20 md:pt-40">
                <div className="col-auto m-auto max-w-[540px] p-7.5 lg:col-start-2">
                    <p className="mb-4 leading-4 font-bold tracking-[1.4px] uppercase">
                        <Emoji symbol={"🤗"} />
                        Join a family!
                    </p>
                    <h1 className="mb-6 text-[32px] leading-[1.1] font-semibold md:text-5xl">
                        FAMILY SYSTEM
                    </h1>
                    <p className="mb-[35px] font-inter text-[1.3rem] leading-[2.5rem] font-medium">
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
                <div className="col-end-2 m-auto max-w-[540px] p-7.5 lg:row-end-2">
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
