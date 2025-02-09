import type { ReactNode } from "react";

export default function InfoCard({
    blurb,
    heading,
    description,
}: {
    blurb: ReactNode;
    heading: ReactNode;
    description: ReactNode;
}) {
    return (
        <>
            <p className="mb-4 leading-4 font-bold tracking-[1.4px] uppercase">
                {blurb}
            </p>
            <h1 className="mb-6 text-[32px] leading-[1.1] font-semibold md:text-5xl">
                {heading}
            </h1>
            <p className="mb-[35px] max-w-[440px] font-inter text-[1.3rem] leading-[2.2rem] font-medium">
                {description}
            </p>
        </>
    );
}
