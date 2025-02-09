import { useContext } from "react";
import Button from "./Commons/Button";
import { envContext } from "./Commons/Contexts";

const Introduction = () => {
    const env = useContext(envContext);

    const subtitleString =
        "A thriving community of Singaporeans at UCLA, we welcome everyone! " +
        "Whether you're Singaporean, lived in Singapore, or think Singapore is really cool, we'd love to have you join us! " +
        "\nDiscord is the best way to get in touch with us, so hop on in and say hi!";

    return (
        <div id="about" className="flex items-center justify-center">
            <div className="mx-auto grid w-full max-w-[1100px] auto-cols-fr items-center justify-center px-6 pt-20 md:pt-40">
                <div className="col-end-2 m-auto max-w-[540px] p-7.5">
                    <p className="mb-4 leading-4 font-bold tracking-[1.4px] uppercase">
                        Who are we?
                    </p>
                    <h1 className="mb-6 text-[32px] leading-[1.1] font-semibold md:text-5xl">
                        We are the Singapore Students&apos; Association at UCLA!
                    </h1>
                    <p className="mb-[35px] max-w-[440px] font-inter text-[1.3rem] leading-[2.2rem] font-medium">
                        {subtitleString}
                    </p>
                    <Button>
                        <a
                            href={env.VITE_DISCORD_LINK}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Discord!
                        </a>
                    </Button>
                </div>
                <div className="col-auto m-auto max-w-[540px] p-7.5 lg:col-start-2">
                    <img
                        className="w-full rounded-[32px]"
                        src="/images/introImg.jpg"
                        alt="vision"
                    />
                </div>
            </div>
        </div>
    );
};

export default Introduction;
