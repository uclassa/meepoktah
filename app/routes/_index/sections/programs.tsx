import { useContext } from "react";
import { envContext } from "~/services/Contexts";
import InfoCard from "~/components/InfoCard";
import DoubleCard from "~/components/DoubleCard";
import InfiniteCarousel from "~/components/InfiniteCarousel";
import Emoji from "~/components/Emoji";
import Button from "~/components/Button";

const basePath = "/images/fams/";

const Programs = () => {
    const env = useContext(envContext);

    return (
        <DoubleCard
            leftContent={
                <InfiniteCarousel>
                    <img src={basePath + "fam1.jpg"} />
                    <img src={basePath + "fam2.jpg"} />
                    <img src={basePath + "fam3.jpg"} />
                    <img src={basePath + "fam4.jpg"} />
                </InfiniteCarousel>
            }
            rightContent={
                <>
                    <InfoCard
                        blurb={
                            <>
                                <Emoji symbol={"🤗"} />
                                Join a family!
                            </>
                        }
                        heading="FAMILY SYSTEM"
                        description={
                            <>
                                Our family system is a great way to meet new
                                people and make friends! You will be placed in a
                                family with other members and a family head. You
                                will be able to participate in fun events and
                                activities with your family throughout the year!
                            </>
                        }
                    />
                    <Button
                        href={env.VITE_FAM_SIGNUP}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Sign up
                    </Button>
                </>
            }
            leftIsTop={false}
        />
    );
};

export default Programs;
