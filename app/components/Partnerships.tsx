import Button from "./Commons/Button";

const Partnerships = () => {
    const subtitleString =
        "Our partner organisations bring a lot of value our community. " +
        "They provide us with resources, mentorship, and opportunities for our members. " +
        "We are always looking for new partners to work with, so if you're interested, please reach out to us!";

    return (
        <div id="partnerships" className="flex items-center justify-center">
            <div className="grid auto-cols-fr w-full max-w-[1100px] mx-auto px-6 pb-20 justify-center items-center pt-20 md:pt-40">
                <div className="p-7.5 col-end-2 max-w-[540px] m-auto">
                    <p className="leading-4 font-bold tracking-[1.4px] uppercase mb-4">Partnerships</p>
                    <h1 className="mb-6 text-[32px] md:text-5xl leading-[1.1] font-semibold">We are open to working with your organisation!</h1>
                    <p className="font-inter font-medium max-w-[440px] mb-[35px] text-[1.3rem] leading-[2.2rem]">{subtitleString}</p>
                    <div className="flex justify-start mx-auto">
                        <Button>
                            <a href="mailto:ssa.uclabruins@gmail.com">
                                Contact Us!
                            </a>
                        </Button>
                    </div>
                </div>
                <div className="p-7.5 col-auto lg:col-start-2 max-w-[540px] m-auto">
                    <img className="w-full rounded-[32px]" src="/images/partnershipsImg.jpg" alt="partnerships" />
                </div>
            </div>
        </div>
    );
};

export default Partnerships;
