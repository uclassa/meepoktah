import Button from "./Commons/Button";

const Introduction = () => {
    let subtitleString =
        "A thriving community of Singaporeans at UCLA, we welcome everyone! " +
        "Whether you're Singaporean, lived in Singapore, or think Singapore is really cool, we'd love to have you join us! " +
        "\nDiscord is the best way to get in touch with us, so hop on in and say hi!";

    return (
        <div
            id="about"
            className="flex items-center justify-center"
        >
            <div className="grid auto-cols-fr w-full max-w-[1100px] mx-auto px-6 justify-center items-center pt-20 md:pt-40">
                <div className="p-7.5 col-end-2 max-w-[540px] m-auto">
                    <p className="leading-4 font-bold tracking-[1.4px] uppercase mb-4">Who are we?</p>
                    <h1 className="mb-6 text-[32px] md:text-5xl leading-[1.1] font-semibold">
                        We are the Singapore Students' Association at
                        UCLA!
                    </h1>
                    <p className="font-inter font-medium max-w-[440px] mb-[35px] text-[1.3rem] leading-[2.2rem]">{subtitleString}</p>
                    <div className="flex justify-start mx-auto">
                        <Button>
                            <a
                                href={import.meta.env.VITE_DISCORD_LINK}
                                target="_blank"
                            >
                                Discord!
                            </a>
                        </Button>
                    </div>
                </div>
                <div className="p-7.5 col-auto lg:col-start-2 max-w-[540px] m-auto">
                    <img className="w-full rounded-[32px]" src="/images/introImg.jpg" alt="vision" />
                </div>
            </div>
        </div>
    );
};

export default Introduction;
