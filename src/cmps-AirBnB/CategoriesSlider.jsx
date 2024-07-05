import Slider from "react-slick";
// Import css files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FullWidthBgImage } from "./ImageFullPath";
// import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
// import { useResponsive } from "../useResponsive";
import { useRef } from "react";

const FullWidthBgImage = ({
    image,
    text
    }) => {
    return (
        <section>
            <div className="bg-image-container"
                style={{ backgroundImage: `url(${image})`}}>
            </div>
            <div className="text-container"> {text} </div>
        </section>
    )
}

export const SliderComp = ({
    data,
    slideNum
    }) => {
    // const { screenType } = useResponsive();
    const sliderRef = useRef();
    const settings = {
        arrows: false,
        swipeToSlide: true,
        infinite: true,
        slidesToShow: slideNum,
        slidesToScroll: 1,
    };
    return (
        <>
            <div className="categories main-content">
                    <div onClick={() => sliderRef.current.slickPrev()} className="prev">
                        X
                    </div>
                    <Slider {...settings} ref={sliderRef}>
                        {data?.length > 0 && data.map((item, index) => (
                            <div key={index}>

                                    <FullWidthBgImage
                                        image={item.image}
                                        text={item.title}
                                        // height={"60px"}
                                        // width={"60px"}
                                    />
                            </div>
                        ))}
                    </Slider>
                    <div onClick={() => sliderRef.current.slickNext()} className="next">
                        X
                    </div>
                </div>
        </>
    );
};
