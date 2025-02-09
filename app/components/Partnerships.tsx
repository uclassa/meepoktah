import Button from "./Commons/Button";

const Partnerships = () => {
    const subtitleString =
        "Our partner organisations bring a lot of value our community. " +
        "They provide us with resources, mentorship, and opportunities for our members. " +
        "We are always looking for new partners to work with, so if you're interested, please reach out to us!";

    return (
        <div id="partnerships" className="flex items-center justify-center">
            <div className="mx-auto grid w-full max-w-[1100px] auto-cols-fr items-center justify-center px-6 pt-20 pb-20 md:pt-40">
                <div className="col-end-2 m-auto max-w-[540px] p-7.5">
                    <p className="mb-4 leading-4 font-bold tracking-[1.4px] uppercase">
                        Partnerships
                    </p>
                    <h1 className="mb-6 text-[32px] leading-[1.1] font-semibold md:text-5xl">
                        We are open to working with your organisation!
                    </h1>
                    <p className="mb-[35px] max-w-[440px] font-inter text-[1.3rem] leading-[2.2rem] font-medium">
                        {subtitleString}
                    </p>
                    <Button>
                        <a href="mailto:ssa.uclabruins@gmail.com">
                            Contact Us!
                        </a>
                    </Button>
                </div>
                <div className="col-auto m-auto max-w-[540px] p-7.5 lg:col-start-2">
                    <img
                        className="w-full rounded-[32px]"
                        src="/images/partnershipsImg.jpg"
                        alt="partnerships"
                    />
                </div>
            </div>
        </div>
    );
};

export default Partnerships;
