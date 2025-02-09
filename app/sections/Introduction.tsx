import { useContext } from "react";
import { envContext } from "../services/Contexts";
import InfoCard from "~/components/InfoCard";
import DoubleCard from "~/components/DoubleCard";
import Button from "~/components/Button";

const Introduction = () => {
    const env = useContext(envContext);

    return (
        <div id="about">
            <DoubleCard
                leftContent={
                    <>
                        <InfoCard
                            blurb="Who are we?"
                            heading="We are the Singapore Students' Association at
                            UCLA!"
                            description={
                                <>
                                    A thriving community of Singaporeans at
                                    UCLA, we welcome everyone! Whether
                                    you&apos;re Singaporean, lived in Singapore,
                                    or think Singapore is really cool, we&apos;d
                                    love to have you join us!
                                    <br />
                                    Discord is the best way to get in touch with
                                    us, so hop on in and say hi!
                                </>
                            }
                        />
                        <Button
                            href={env.VITE_DISCORD_LINK}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Discord!
                        </Button>
                    </>
                }
                rightContent={
                    <img
                        className="w-full rounded-[32px]"
                        src="/images/introImg.jpg"
                        alt="vision"
                    />
                }
                leftIsTop={true}
            />
        </div>
    );
};

export default Introduction;
