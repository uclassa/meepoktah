import InfoCard from "~/components/InfoCard";
import DoubleCard from "~/components/DoubleCard";
import Button from "~/components/Button";
import NavItem from "~/components/NavItem";

const Partnerships = () => {
    return (
        <div id="partnerships">
            <DoubleCard
                leftContent={
                    <>
                        <InfoCard
                            blurb="Partnerships"
                            heading="We are open to working with your organisation!"
                            description="Our partner organisations bring a lot of value to our community. They provide us with resources, mentorship, and opportunities for our members. We are always looking for new partners to work with, so if you're interested, please reach out to us!"
                        />
                        <Button className="relative">
                            <NavItem
                                href="mailto:ssa.uclabruins@gmail.com"
                                extendHitboxToNearestRelative={true}
                            >
                                Contact Us!
                            </NavItem>
                        </Button>
                    </>
                }
                rightContent={
                    <img
                        className="w-full rounded-[32px]"
                        src="/assets/images/partnershipsImg.jpg"
                        alt="partnerships"
                    />
                }
                leftIsTop={true}
            />
        </div>
    );
};

export default Partnerships;
