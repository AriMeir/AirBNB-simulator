import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { svgIcons } from './Svgs';

const Stay = ({ image }) => (
    <section>
        <div className="stay-img" style={{ backgroundImage: `url(${image})` }}></div>
    </section>
);

export const StayGallerySlider = ({ data, slideNum }) => {
    const sliderRef = useRef(null);

    useEffect(() => {
    }, []);

    const settings = {
        arrows: false,
        swipeToSlide: true,
        infinite: true,
        slidesToShow: slideNum,
        slidesToScroll: slideNum,
    };

    0

    const handlePrevClick = event => {
        event.stopPropagation()
        console.log('Prev button clicked')
        if (sliderRef.current) {
            console.log('Calling slickPrev')
            sliderRef.current.slickPrev()
        } else {
            console.log('sliderRef.current is null')
        }
    };

    const handleNextClick = event => {
        event.stopPropagation()
        console.log('Next button clicked')
        if (sliderRef.current) {
            console.log('Calling slickNext')
            sliderRef.current.slickNext()
        } else {
            console.log('sliderRef.current is null')
        }
    };

    return (
        <div className="wrapper">
            <div onClick={handlePrevClick} className="prev_pic" style={{ cursor: 'pointer' }}>
                {svgIcons.arrowLeft}
            </div>
            <Slider {...settings} ref={sliderRef}>
                {data?.map((item, index) => (
                    <div key={index}>
                        <Stay image={item.image} />
                    </div>
                ))}
            </Slider>
            <div onClick={handleNextClick} className="next_pic" style={{ cursor: 'pointer' }}>
                {svgIcons.arrowRight}
            </div>
        </div>
    );
};
