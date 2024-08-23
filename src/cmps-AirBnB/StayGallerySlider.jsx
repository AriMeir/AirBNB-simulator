import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { svgIcons } from './Svgs';

const Stay = ({ image }) => (
    <section>
        <div className="stay-img" style={{ backgroundImage: `url(${image})` }}></div>
    </section>
);

export const StayGallerySlider = ({ data }) => {
    const sliderRef = useRef(null);

    const settings = {
        arrows: false,
        swipeToSlide: true,
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    const handlePrevClick = event => {
        event.stopPropagation();
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const handleNextClick = event => {
        event.stopPropagation();
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    return (
        <div className="slider-container">
            <div onClick={handlePrevClick} className="prev_pic">
                {svgIcons.arrowLeft}
            </div>
            <Slider {...settings} ref={sliderRef}>
                {data?.map((item, index) => (
                    <div key={index}>
                        <Stay image={item.image} />
                    </div>
                ))}
            </Slider>
            <div onClick={handleNextClick} className="next_pic">
                {svgIcons.arrowRight}
            </div>
        </div>
    );
}
