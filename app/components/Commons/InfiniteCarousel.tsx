import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function InfiniteCarousel(props: any) {
    return (
        <div className="aspect-4/3 object-cover rounded-[32px] overflow-hidden">
            <Carousel
                autoPlay={true}
                interval={1500}
                showStatus={false}
                showIndicators={false}
                showArrows={false}
                infiniteLoop={true}
                showThumbs={false}
            >
                {props.children}
            </Carousel>
        </div>
    );
}
