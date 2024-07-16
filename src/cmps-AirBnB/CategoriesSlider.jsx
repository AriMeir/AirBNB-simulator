import Slider from "react-slick";
// import { useResponsive } from "../useResponsive";
import { useRef } from "react";
import { svgIcons } from './Svgs'
// import SvgIcon from './SvgIcon';


const Category = ({
    image,
    text
    }) => {
    return (
        <section className="category">
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
        slidesToScroll: slideNum,
    };
    return (
        <>
            <div className="categories main-content">
                <div className="wrapper">
                    <div onClick={() => sliderRef.current.slickPrev()} className="prev_category">
                        {svgIcons.arrowLeft}
                    </div>
                    <Slider {...settings} ref={sliderRef}>
                        {data?.length > 0 && data.map((item, index) => (
                            // <div key={index}>
                                    <Category
                                        image={item.image}
                                        text={item.title}
                                    />
                            // </div>
                        ))}
                    </Slider>
                    <div onClick={() => sliderRef.current.slickNext()} className="next_category">
                        {svgIcons.arrowRight}
                    </div>
                </div>
            </div>
        </>
    )
}
