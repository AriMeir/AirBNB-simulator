import Slider from "react-slick";
// import { useResponsive } from "../useResponsive";
import { useRef } from "react";
import { svgIcons } from './Svgs'
// import SvgIcon from './SvgIcon';


const Stay = ({
    image,
    }) => {
    return (
        <section>
            <div className="stay-img"
                style={{ backgroundImage: `url(${image})`}}>
            </div>
        </section>
    )
}

export const StayGallerySlider = ({
    data,
    slideNum
    }) => {
    // const { screenType } = useResponsive();
    const sliderRef = useRef();
    const settings = {
        arrows: false,
        // dots: true,
        swipeToSlide: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <div>
                    <div onClick={() => sliderRef.current.slickPrev()} className="prev">
                        {svgIcons.arrowLeft}
                    </div>
                    <Slider {...settings} ref={sliderRef}>
                        {data?.length > 0 && data.map((item, index) => (
                            <div key={index}>
                                    <Stay
                                        image={item.image}
                                    />
                            </div>
                        ))}
                    </Slider>
                    <div onClick={() => sliderRef.current.slickNext()} className="next">
                        {svgIcons.arrowRight}
                    </div>
            </div>
        </>
    )
}
