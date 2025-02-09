import type { PropsWithChildren } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function InfiniteCarousel({ children }: PropsWithChildren) {
    return (
        <div className="aspect-4/3 overflow-hidden rounded-[32px] object-cover">
            <Carousel
                autoPlay={true}
                interval={1500}
                showStatus={false}
                showIndicators={false}
                showArrows={false}
                infiniteLoop={true}
                showThumbs={false}
            >
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {children as any}
            </Carousel>
        </div>
    );
}
